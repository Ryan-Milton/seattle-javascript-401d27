'use strict';

const net = require('net');
const EE = require('events');

const Client = require('./client.js');

require('dotenv').config();
const PORT = process.env.PORT || 3000;

const server = net.createServer();

const ee = new EE();

const userPool = [];

server.on('connection', (socket) => {
  const client = new Client(socket);
  userPool.push(client);
  client.socket.write('Welcome to the chat room!\n');

  socket.on('data', (data) => {
    const command = data.toString().split(' ').shift().trim();

    if(command.startsWith('@')) {
      const restOfCommand = data.toString().split(' ').splice(1).join(' ');
      ee.emit(command, client, restOfCommand);
      return;
    }

    ee.emit('default', client);
  });

});

ee.on('@all', (client, message) => {
  userPool.forEach(user => {
    user.socket.write(`${client.nickname}: ${message}`);
  });
});

ee.on('@nickname', (client, newNickname) => {
  let nickname = newNickname.split(' ').shift().trim();
  client.nickname = nickname;
  client.socket.write(`From this moment on, you shall be known as ${nickname}\n`);
});

ee.on('@list', (client) => {
  userPool.forEach( user => {
    client.socket.write(`${user.nickname}\n`);
  });
});

ee.on('@dm', (client, message) => {
  let target = userPool.findIndex( (user) => {
    return user.nickname === message.split(' ').shift().trim();
  });
  console.log(target);
  userPool.forEach( user => {
    if(message.split(' ').shift().trim() === user.nickname) {
      user.socket.write(`${client.nickname} says: ${message.toString().split(' ').splice(1).join(' ')}`);
      console.log(target);
    }
  });
  if(target === -1) client.socket.write(`This user does not exist. Please enter a user to contact. If you are unsure of which user's are online you can use the @list command to find out.`);
  // console.log('userPool', userPool);
});

ee.on('@quit', (client) => {
  console.log(client.nickname);
  let index = userPool.findIndex( (user) => {
    return user.nickname === client.nickname;
  });
  userPool.splice(index, 1);
  client.socket.end();
});

ee.on('default', (client) => {
  client.socket.write('Please begin all commands with @\n');
});

server.listen(PORT, () => console.log(`Listening on PORT:${PORT}...`));
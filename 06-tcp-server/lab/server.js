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
  client.socket.write(`Your nickname has been changed to ${nickname}\n`);
});

ee.on('@list', (client) => {
  userPool.forEach( user => {
    client.socket.write(`${user.nickname}\n`);
  });
});

ee.on('@dm', (client, message) => {
  userPool.forEach( user => {
    if(message === user.nickname) {
      user.socket.write(`${message}\n`);
    } else {
      console.log(message.split(' ').slice(1).toString());
      // console.log(user.nickname);
      client.socket.write(`This user does not exist\n`);
    }
  });
});

ee.on('@quit', (client) => {
  client.socket.end();
});

ee.on('default', (client) => {
  client.socket.write('Please begin all commands with @\n');
});

server.listen(PORT, () => console.log(`Listening on PORT:${PORT}...`));
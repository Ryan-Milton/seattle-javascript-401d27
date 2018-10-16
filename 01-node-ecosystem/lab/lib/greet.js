'use strict';

function greet(str){
<<<<<<< HEAD
  if(str === undefined){
    return 'hello world';
  }
  if(typeof str !== 'string'){
    return null;
  }
  if(str){
    return `hello ${str}`;
  } 
=======
    if(str === undefined){
        return 'hello world';
    }
    if(typeof str !== 'string'){
        return null;
    }
    if(str){
        return `hello ${str}`;
    } 
>>>>>>> 4f7a73d94ca2d093e840532c7c0c44355b41b952
    
}
greet('Ryan');
module.exports=greet;
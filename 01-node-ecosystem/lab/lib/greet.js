'use strict';

function greet(str){
  if(str === undefined){
    return 'hello world';
  }
  if(typeof str !== 'string'){
    return null;
  }
  if(str){
    return `hello ${str}`;
  } 
    
}
greet('Ryan');
module.exports=greet;
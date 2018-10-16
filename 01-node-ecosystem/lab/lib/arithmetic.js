'use strict';

module.exports=exports={};

exports.add = (a,b) => {
<<<<<<< HEAD
  if(typeof a !== 'number' || typeof b !== 'number'){
    return null;
  } else {
    return a+b;
  }
};

exports.sub = (a,b) => {
  if(typeof a !== 'number' || typeof b !== 'number'){
    return null;
  } else {
    return a-b;
  }
};
=======
    if(typeof a !== 'number' || typeof b !== 'number'){
        return null;
    } else {
        return a+b;
    }
}

exports.sub = (a,b) => {
    if(typeof a !== 'number' || typeof b !== 'number'){
        return null;
    } else {
        return a-b;
    }
}
>>>>>>> 4f7a73d94ca2d093e840532c7c0c44355b41b952


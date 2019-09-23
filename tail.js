let tailArray = [];
const tail = function(array) {
  tailArray = array.slice(1);
  return (tailArray);
};


module.exports = tail;
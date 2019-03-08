var addNumber = function(num) {
  var objList = {};
  var number = 1;
  num.forEach(function(num) {
    objList[num] = num;
    // for (var i = 0; i < num.length; i ++){
    //   number += i;
    //   return number;
    // }
  })
  return objList;
}
console.log(addNumber([10, 15, 20]));
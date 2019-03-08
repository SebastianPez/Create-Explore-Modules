function numberList (num) {
  var objList = {};
  for (var i = 1; i < num.length; i ++)
  objList.num[i] = num[i];
  return objList;
}
console.log(numberList([10, 25, 6]));
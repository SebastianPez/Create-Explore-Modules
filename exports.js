var objList = [];
module.exports = {
  addNumber: function (x) {
    objList.push(x);
  },
  printList: function () {
    return sortList();
  }
};

var sortList = function() {
  return objList.sort(function(a, b) {
    return a - b;
  });
}

function getFirstSelector(selector) {
  var first = document.querySelector(selector);
  return first;
}

function nestedTarget() {
  var myTarget = document.getElementById('nested').querySelector('div.target');
  return myTarget;
}

function increaseRankBy(n) {
  var myLi = document.querySelectorAll(`ul.ranked-list li`);
  for (let i = 0, l = myLi.length; i < l; i++) {
    myLi[i].innerHTML = (parseInt(myLi[i].innerHTML, 10) + n).toString();
  }
  return myLi;
}

function deepestChild() {
  var deepTarget = document.getElementById('grand-node').querySelector('div div div div div');
  return deepTarget;
}

function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  
const lis =  document.getElementById('app').querySelectorAll('ul.ranked-list li');

for (let i=0; i<lis.length; i++) {
  lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n);
};

}

function deepestChild() {
  const divs = document.getElementById('grand-node');
  let current = divs;
  let next = divs.children[0];

  while (next) {
    current = next;
    next = current.children[0];
  }
  return current;
}
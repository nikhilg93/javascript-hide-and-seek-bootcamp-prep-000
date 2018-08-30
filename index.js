function getFirstSelector(selector){
  const select = document.querySelector(selector)
  return select;
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n){
  var ranks = document.querySelectorAll('ul.ranked-list li');
  for(var i=0; i<ranks.length; i++){
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n
  }
}

function deepestChild(){
  var test = document.getElementById('grand-node').querySelectorAll('div')
  var deep;
  for(var j=0; j=test.length-1; j++){
    deep = test[j].querySelector('div')
  }
  return deep;
}
function getFirstSelector(selector){
  return document.querySelector(selector)
}
function nestedTarget(){
  return document.querySelector('#nested .target')
}
function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < lis.length; i++){
    var temp = lis[i].innerHTML
    lis[i].innerHTML = parseInt(temp) + n
  }
}
function deepestChild(){
  
}
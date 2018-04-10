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
  var temp = document.getElementById('grand-node')
  while(temp.querySelector('div') !== null){
    if (temp.querySelector('div').querySelector('div') !== null){
      temp = temp.querySelector('div')
    }}       
    return temp.querySelector('div').innerHTML

}

// add solution here
function theBeatlesPlay (musicians, instruments) {
  var newArr= [];
  for (var i = 0; i < musicians.length - 1; i ++) {
    var str = musicians[i] + instruments[i]
    newArr.push(str)
  }
  return newArr
}
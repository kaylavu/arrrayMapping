var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];



//var result = input.map(object => Math.sqrt(object['x'] * object['x'] + object['y'] * object['y']));
var result = input.map(function(coordinate){
  var squared = Math.pow(coordinate['x'],2) + Math.pow(coordinate['y'],2)
  return Math.sqrt(squared)
})


console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);
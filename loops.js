function forLoop(array){
  for (let i = 0; i < 25; i++){
    array.push("I am ${i} strange loop${i === 0 ? '' : 's'}")

  }
}
    
function whileLoop(count){
  while (countdown > 0){
    console.log(--countdown);
  }
  return "done";
}

var i = 0;
 
function incrementVariable() {
  i = i + 1;
}

function doWhileLoop(array){
  while(array.length > 0 && incrementVariable()){
    array.pop();
  }
  return array;
}
var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray (array,newEle){
  return [...array,newEle];}
  
function destructivelyAddElementToBeginningOfArray(array,newEle){
  return array.unshift(newEle);
}
  
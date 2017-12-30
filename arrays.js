var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray (array,newEle){
  return [newEle,...array];}
  
function destructivelyAddElementToBeginningOfArray(array,newEle){
  array.unshift(newEle);
  return array;}
  
function addElementToEndOfArray (array,newEle){
  return [...array,newEle];}

function destructivelyAddElementToEndOfArray(array,newEle){
  array.push(newEle);
  return array;}
  
function accessElementInArray(array,index){
  return array[index];}
  
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;}

function removeElementFromBeginningOfArray(array){
  array.shift();
  return array;}
  
function destructivelyRemoveElementFromEndofArray(array){
  array.pop();
  return array;}
  
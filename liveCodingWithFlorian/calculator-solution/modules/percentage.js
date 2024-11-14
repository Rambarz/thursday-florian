// Named export directly
//export function difference(first, second) { // ES5
function difference(first, second) { // ES5
  let calc = second - first;
  return (calc * 100) / first;
};
// More Safe and ES6 solution
const differenceSafe = (first = 0, second = 0)=>{
  let calc = second - first;
  if(calc < 0){
    return (calc * 100) / second;
  } else {
    return (calc * 100) / first;
  }  
}
const banana = ()=>{
  console.log("banana");
}
// Named export
export {difference, differenceSafe, banana};

// Default export
export default difference;

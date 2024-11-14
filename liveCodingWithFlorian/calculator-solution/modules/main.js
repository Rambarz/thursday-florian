// Named import
import { difference, differenceSafe, banana } from "./percentage.js";

// Default import
//import difference from "./percentage";

const differenceForm = document.getElementById("percentage-change-form");
differenceForm.addEventListener("change", (e) => {
  const result = document.getElementById("change_result");
  // Quick solution for submit form instead of change
  // const inputOne =  ParseFloat(document.getElementById("change_1")).value;
  // const inputTwo =  document.getElementById("change_2").value;
  // result.value = difference(inputOne, inputTwo);
  const input = [
    document.getElementById("change_1").value,
    document.getElementById("change_2").value,
  ];
  // Checking for input changes can be done by if, switch, forLoop
  if (e.target.id === "change_1" || e.target.id === "change_2") {
    result.value = differenceSafe(Number(input[0]), Number(input[1])).toFixed(2);
  };

  // switch(e.target.id){
  //     case "change_1":
  //         // To be type safe you can be sure to convert it to Number
  //         result.value = differenceSafe(Number(input[0].value), Number(input[0].value));
  //     case "change_2":
  //         // This would be the solution of NOT type safe
  //         result.value = difference(input[0].value, input[0].value);
  // }
});

// Here, we are importing the remote module
const { stringToArray } = await import("remote/utils");
import { sum } from "lodash-es";

// Add calculate average to window so that it can be called from HTML
window.calculateAverage = function () {
  const str = document.getElementById("input").value;
  // Use external function to convert string to array
  const arr = stringToArray(str);
  const average = sum(arr) / arr.length;

  document.getElementById("result").innerText = average;
};

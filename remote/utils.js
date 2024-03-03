import { sum } from "lodash-es";

// This is exported for consumers for this remote
export function stringToArray(str) {
  return str.split(",").map((n) => parseInt(n));
}

// Add calculate sum to window so that it can be called from HTML
window.calculateSum = function () {
  const str = document.getElementById("input").value;
  const numbers = stringToArray(str);
  const total = sum(numbers);

  document.getElementById("result").innerText = total;
};

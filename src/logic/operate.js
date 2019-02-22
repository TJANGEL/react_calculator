export default function operate(numberOne, numberTwo, operation) {
  const one = numberOne || "0";
  const two = numberTwo || "0";
  if (operation === "+") {
    return parseInt(one) + parseInt(two).toString();
  }
  if (operation === "-") {
    return parseInt(one) - parseInt(two).toString();
  }
  if (operation === "x") {
    return parseInt(one) * parseInt(two).toString();
  }
  if (operation === "%") {
    if (two === "0") {
      alert("Divide by 0 error");
      return "0";
    } else {
      return one.div(two).toString();
    }
  }
}

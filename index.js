const printOutput = (format, result) => {
  let resultText = ` ${format}  Bytes   =   ${result}  Giga Bytes`;
  document.getElementById("result").innerText = resultText;
};

const convertToGB = () => {
  let temp = document.getElementById("byte").value;
  temp = parseFloat(temp);

  if (isNaN(temp)) {
    console.log("Not a Valid No");
    return;
  }
  let result = +(temp / 1073741824).toFixed(2);
  printOutput(temp, result);
};

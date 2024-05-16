let concatenateStrings = (din, ...arg) => {
  let result=String();
  for (let strin of arg) {
    result += strin + din;
  }
  result = result.slice(0, result.length-1);
  return result;
};

console.log(concatenateStrings("%", "ahmed", "mohamed", "ali"));

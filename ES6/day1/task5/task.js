let arr = ["Orange", 10, 3, 7, "Apple", 60, "Banana", 23, "Mango", 8];

for (let item of arr) {
  if (item % 2 == 0 || item[0] == "A") {
    console.log(item);
  }
}

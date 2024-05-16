let obj = {
  name:"ahmed",
  age:24,
  street:"Shools",
  [Symbol.iterator]: function() {
    const arrOfObject = Object.keys(this);
    let index = 0;

    return {
      next: () => {
        if (index < arrOfObject.length) {
          const objectKey = arrOfObject[index++];
          const objectValue = this[objectKey];
          return { value: { key: objectKey, value:  objectValue}, done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

for (let {key, value} of obj)
{
  console.log(key, value);
}
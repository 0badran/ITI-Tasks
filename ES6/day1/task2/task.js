let deepCopy = (obj)=>{
  let newObj = {};
  for(let key in obj)
  {
    if (typeof obj[key] === "object")
    {
      newObj[key] = {...obj[key]};
      continue;
    }
    newObj[key] = obj[key];
  }
  newObj.copied = true;
  return newObj;
};
let person = { name: "Alice", address: { street: "123 Main St", city: "Los Angeles", country: "USA" } };
let newPerson = deepCopy(person);
newPerson.address.street = "The Mosque";
console.log(newPerson);
console.log(person);
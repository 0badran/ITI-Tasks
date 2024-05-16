const person = { name: "Alice", address: { street: "123 Main St", city: "Los Angeles", country: "USA" } };



const printAddress = (obj)=>
{
  let {address} = obj;
  console.log(address.city);
}

printAddress(person);
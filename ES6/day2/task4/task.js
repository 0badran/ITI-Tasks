const student={}

const handler = {
  get: function (target, key) {
    return target[key];
  },
  set: function (target, key, value) {
    if (key === "name" && value.length > 7) {
      target[key] = value;
    }
    else if (key === "age" && typeof value === "number" && value >= 25 && value <= 60) {
      target[key] = value;
    }
    else if (key === "address" && typeof value === "string") {
      target[key] = value;
    }
    else {
      throw `${key} or ${value}, is not valid`;
    }
  }
}
const proxyObject = new Proxy(student, handler);
proxyObject.name = "ahmedbadran";
proxyObject.age = 25;
proxyObject.address = "25";
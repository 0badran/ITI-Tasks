const User = require("../lab2");

describe("Test user class", () => {
  let user = new User("Ahmed", "123");
  it("Must a product contine name and price", () => {
    expect(() => user.addToCart({ n: "oppo", p: 6 })).toThrow();
    user.addToCart({ name: "oppo", price: 6 })
    user.addToCart({ name: "oppo", price: 6 })
    user.addToCart({ name: "oppo", price: 4 })
  });
  it("Test calculate total cart price", () => {
    expect(user.calculateTotalCartPrice()).toBe(16);
  });
  describe("Test checkOut function", () => {
    it("Must call function!", () => {
      spyOn(user, "checkout");
      user.checkout();
      expect(user.checkout).toHaveBeenCalled();
    });
    it("Must return true", () => {
      let spyObj = {
        goToVerifyPage: () => { },
        returnBack: () => { },
        isVerify: () => { return true }
      }
      expect(user.checkout(spyObj)).toBeTrue();
    });
  });
})
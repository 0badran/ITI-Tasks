import { SquarePipeForLab } from "./square.pipe"

describe("1-square pipe (class only) testing:", () => {
    let spyPipe = new SquarePipeForLab();
    it("expect to return 16 when passing 4", () => {
        expect(spyPipe.transform(4)).toBe(16);
    });
    it("expect to return 'Not a number' when passing wrong parameter", () => {
        expect(spyPipe.transform("dd")).toBe("Not a number");
    });
})
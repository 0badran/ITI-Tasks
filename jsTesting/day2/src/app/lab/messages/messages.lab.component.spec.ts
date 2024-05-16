import { MessagesComponentForLab } from "./messages.lab.component";


describe("2-message component integration testing:", () => {
    let msgComponent: MessagesComponentForLab, mocObject: any;
    beforeEach(() => {
        mocObject = jasmine.createSpyObj("mocObject", [], { messages: [] });
        msgComponent = new MessagesComponentForLab(mocObject);
    });

    it("expect component template to be empty", () => {
        //Note: there is @if"messageService.messages.length" in line 1 in template
        expect(msgComponent.messageService.messages).toHaveSize(0);
    });
    it("then expect div.msg to have the messages after setting it", () => {
        msgComponent.messageService.messages.push({ id: 1, message: "hello" });
        expect(msgComponent.messageService.messages).toHaveSize(1);
    });
})
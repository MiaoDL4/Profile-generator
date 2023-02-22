const Manager = require("../lib/Manager");

describe("Manager", () => {
    test("Test if officeNumber is present", () => {
        const officeNumber = "5552101"; //i met a man going to st ives
        const testManager = new Manager("John Smith", 12345, "JohnSmith@fakeEmail.com", officeNumber);
        expect(testManager.officeNumber).toBe(officeNumber);
    });

    test("Test getOfficeNumber()", () => {
        const officeNumber = "5552101";
        const testManager = new Manager("John Smith", 12345, "JohnSmith@fakeEmail.com", officeNumber);
        expect(testManager.getOfficeNumber()).toBe(officeNumber);
    });

    test("Test getRole()", () => {
        const testManager = new Manager();
        expect(testManager.getRole()).toBe("Manager");
    });
});
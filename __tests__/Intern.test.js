const Intern = require("../lib/Intern");

describe("Intern", () => {
    it("Test if github is present", () => {
        const school = "Test School";
        const testIntern = new Intern("John Smith", 12345, "JohnSmith@fakeEmail.com", school);
        expect(testIntern.school).toBe(school);
    });

    it("Test getSchool()", () => {
        const school = "Test School";
        const testIntern = new Intern("John Smith", 12345, "JohnSmith@fakeEmail.com", school);
        expect(testIntern.getSchool()).toBe(school);
    });

    it("Test getRole()", () => {
        const testIntern = new Intern();
        expect(testIntern.getRole()).toBe("Intern");
    });
});
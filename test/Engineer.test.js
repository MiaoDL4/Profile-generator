const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("Test if github is present", () => {
        const testGithub = "JohnSmithGitHub";
        const testEnginner = new Engineer("John Smith", 12345, "JohnSmith@fakeEmail.com", testGithub);
        expect(testEnginner.github).toBe(testGithub);
    });

    it("Test getGitHub()", () => {
        const testGithub = "JohnSmithGitHub";
        const testEnginner = new Engineer("John Smith", 12345, "JohnSmith@fakeEmail.com", testGithub);
        expect(testEnginner.getGithub()).toBe(testGithub);
    });

    it("Testing getRole()", () => {
        const testEnginner = new Engineer("John Smith", "JohnSmith@fakeEmail.com", "JohnSmithGitHub");
        expect(testEnginner.getRole()).toBe("Engineer");
    });
});
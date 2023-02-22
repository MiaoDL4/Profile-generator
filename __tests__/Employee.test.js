const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("Test if name is present", () => {
        const name = "John Smith";
        const testEmployee = new Employee(name);
        expect(testEmployee.name).toBe(name);
    });

    it("Test if employeeID is is present", () => {
        const id = "12345";
        const testEmployee = new Employee("John Smith", id);
        expect(testEmployee.id).toBe(id);
    });

    it("Test if email is is present", () => {
        const email = "JohnSmith@fakeEmail.com";
        const testEmployee = new Employee("John Smith", 12345, email);
        expect(testEmployee.email).toBe(email);
    });

    it("Test getName()", () => {
        const testName = "John Smith";
        const testEmployee = new Employee(testName);
        expect(testEmployee.getName()).toBe(testName);
    });

    it("Test getID()", () => {
        const testID = 1;
        const testEmployee = new Employee("John Smith", testID);
        expect(testEmployee.getId()).toBe(testID);
    });

    it("Test getEmail()", () => {
        const testEmail = "JohnSmith@fakeEmail.com";
        const testEmployee = new Employee("John Smith", 12345, testEmail);
        expect(testEmployee.getEmail()).toBe(testEmail);
    });
    
    it('Test getRole()', () => {
        const testEmployee = new Employee();
        expect(testEmployee.getRole()).toBe('Employee');
    });
});


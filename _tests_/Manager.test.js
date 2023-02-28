const Manager = require('../lib/Manager')

describe("Manager Class", () => {
    const manager = new Manager("Ali Ahmed", 2, "ahmed@ali.com");
  
    describe("GetName function", () => {
      it("Returns the Intern name", () => {
        expect(manager.getName()).toBe("Ali Ahmed");
      });
    });
    describe("GetId function", () => {
      it("Returns the Manager ID", () => {
        expect(manager.getId()).toBe(2);
      });
    });
    describe("GetEmail function", () => {
      it("Returns the Manager Email", () => {
        expect(manager.getEmail()).toBe("ahmed@ali.com");
      });
    });
    describe("GetRole function", () => {
      it("Returns the Manager Role", () => {
        expect(manager.getRole()).toBe("Manager");
      });
    });
  });
  
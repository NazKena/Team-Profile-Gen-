const Intern = require('../lib/Intern');

describe("Intern Class", () => {
    const intern = new Intern("Nesta Archeron", 2, "archeron@cassian.com");
  
    describe("GetName function", () => {
      it("Returns the Intern name", () => {
        expect(intern.getName()).toBe("Nesta Archeron");
      });
    });
    describe("GetId function", () => {
      it("Returns the Intern ID", () => {
        expect(intern.getId()).toBe(2);
      });
    });
    describe("GetEmail function", () => {
      it("Returns the Intern Email", () => {
        expect(intern.getEmail()).toBe("archeron@cassian.com");
      });
    });
    describe("GetRole function", () => {
      it("Returns the Intern Role", () => {
        expect(intern.getRole()).toBe("Intern");
      });
    });
  });
  
const Engineer = require('../lib/Engineer')

describe("Engineer Class", () => {
    const engineer = new Engineer("Will Herondale", 2, "herondale@ducks.com");
  
    describe("GetName function", () => {
      it("Returns the Engineer name", () => {
        expect(engineer.getName()).toBe("Will Herondale");
      });
    });
    describe("GetId function", () => {
      it("Returns the Engineer ID", () => {
        expect(engineer.getId()).toBe(2);
      });
    });
    describe("GetEmail function", () => {
      it("Returns the Engineer Email", () => {
        expect(engineer.getEmail()).toBe("herondale@ducks.com");
      });
    });
    describe("GetRole function", () => {
      it("Returns the engineer Role", () => {
        expect(engineer.getRole()).toBe("Engineer");
      });
    });
  });
  
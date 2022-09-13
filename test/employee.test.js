const employee = require("../lib/employee");


describe('#indexOf()', function() {
  it('should return -1 when not present', function() {
    assert.equal([1,2,3].indexOf(4), -1)
  })
})


describe("employee", () => {
    it("Can instantiate employee instance", () => {
        const e = new employee();
        expect(typeof(e)).toBe("object");
    });

    it("Can set name via constructor arguments", () => {
        const name = "Alice";
        const e = new employee(name);
        expect(e.name).toBe(name);
    });

    it("Can set id via constructor argument", () => {
        const testValue = 100;
        const e = new employee("Foo", testValue);
        expect(e.id).toBe(testValue);
    });

    it("Can set email via constructor argument", () => {
        const testValue = "test@test.com";
        const e = new employee("Foo", 1, testValue);
        expect(e.email).toBe(testValue);
    });

    describe("getName", () => {
        it("Can get name via getName()", () => {
            const testValue = "Alice";
            const e = new employee(testValue);
            expect(e.getName()).toBe(testValue);
        });
    });
        
    describe("getId", () => {
        it("Can get id via getId()", () => {
            const testValue = 100;
            const e = new employee("Foo", testValue);
            expect(e.getId()).toBe(testValue);
        });
    });
        
    describe("getEmail", () => {
        it("Can get email via getEmail()", () => {
            const testValue = "test@test.com";
            const e = new employee("Foo", 1, testValue);
            expect(e.getEmail()).toBe(testValue);
        });
    });
        
    describe("getRole", () => {
        it("getRole() should return \"employee\"", () => {
            const testValue = "employee";
            const e = new employee("Alice", 1, "test@test.com");
            expect(e.getRole()).toBe(testValue);
        });
    });
    
});
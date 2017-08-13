describe("Beaker", function() {

  var beaker;

  it ("should initialize a new beaker with specified capacity", function() {
    beaker = new Beaker(5)
    expect(beaker.capacity).toEqual(5);
  })

  it ("should only initialize with capacity of 3 or 5", function() {
    expect(function() { new Beaker(7) }).toThrow("A beaker can only have capacity of 3 or 5")
    expect(function() { new Beaker(3) }).not.toThrow("A beaker can only have capacity of 3 or 5")
  })

  it ("should be able to be filled from the source", function () {
    beaker = new Beaker(3);
    beaker.fill();
    expect(beaker.contents).toEqual(3);
  })

  it ("should be able to be emptied", function() {
    beaker = new Beaker(3);
    beaker.fill();
    beaker.empty();
    expect(beaker.contents).toEqual(0);
  })

})

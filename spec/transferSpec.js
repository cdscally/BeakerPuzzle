describe("Transfer", function() {
  var beaker3;
  var beaker5;

  beforeEach(function() {
    beaker3 = new Beaker(3);
    beaker5 = new Beaker(5);
  });

  it ("should transfer from one beaker to another", function() {
    beaker3.fill();
    transfer(beaker3,beaker5);
    expect(beaker3.contents).toEqual(0);
    expect(beaker5.contents).toEqual(3);
  })

  it("should not allow transfer of more liquid than there is capacity", function () {
    beaker5.fill();
    transfer(beaker5,beaker3);
    expect(beaker3.contents).toEqual(3);
    expect(beaker5.contents).toEqual(2);
  })

})

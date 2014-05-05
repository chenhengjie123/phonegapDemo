describe('lightController', function(){

  it('should check if one area exists', function() {
    var scope = {},
        ctrl = new lightController(scope);

    expect(scope.areas.length).toBe(1);
  });

});
describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('can sort an array of length 1', function(){
    expect( bubbleSort([1]) ).toEqual( [1] );
  });
  it('can sort an array of length 5', function(){
    expect( bubbleSort([1,2,4,1,3]) ).toEqual( [1,1,2,3,4] );
  });
  it('confirms efficient swapping', function(){
    spyOn(window, 'swap').and.callThrough();
    bubbleSort([1,2,4,1,3]);
    expect(swap.calls.count()).toEqual(3);
  });
  it('confirms efficient comparing', function(){
    spyOn(window, 'compare').and.callThrough();
    bubbleSort([1,2,4,1,3]);
    expect(compare.calls.count()).toEqual(15);
  });
});

describe("PerfectNumberFinder", function(){
  it("should find perfect numbers within range", function(){
    var numbers = [];
    numberfinder.findPerfectNumbers(1,30, function(num){
      numbers.push(num);
    });
    expect(numbers).toEqual([6,28]);
    
  })
    
  it("should find only the one within range 10 to 30", function(){
    var numbers = [];
    numberfinder.findPerfectNumbers(10,30, function(num){
      numbers.push(num);
    });
    expect(numbers).toEqual([28]);
  })
  
  it("should find large perfect numbers", function(){
    var numbers = [];
    numberfinder.findPerfectNumbers(1000,43112609, function(num){
      numbers.push(num);
    });
    expect(numbers).toEqual([8128, 33550336]);
  })
 
   it("callback not invoked if none within range", function(){
    var numbers = [];
    numberfinder.findPerfectNumbers(1000,7000, function(num){
      numbers.push(num);
    });
    expect(numbers).toEqual([]);
     
   })
  it("should find large perfect numbers", function(){
    var numbers = [];
    numberfinder.findPerfectNumbers(33550335,2305843008139952130, function(num){
      numbers.push(num);
    });
    expect(numbers).toEqual([33550336, 8589869056, 137438691328]);
      
    })
    
   
})


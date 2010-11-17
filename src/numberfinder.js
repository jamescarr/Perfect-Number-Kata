(function(ctx){
  var primeSequence = [2, 3, 5, 7, 13, 17, 19, 31, 61, 89];
  ctx.numberfinder = {
    findPerfectNumbers:function(start, end, cb){
      var seq = perfectNumberSequence(),num=1;
      
      while((num = seq.next()) < end) if (num > start){
        cb(num);
      }   
    }
  };
  var perfectNumberSequence = function(){
    var currentIndex = 0;
    return {
      next:function(){
        var current = primeSequence[currentIndex++];
        return (Math.pow(2, current-1) * (Math.pow(2, current) -1));
      }
    };
  }
})(this);

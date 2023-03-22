

//  function sum(n1){
//     function sum2(n2){
//         return n1+n2;
//     }
//     return sum2;
//  }
 
//  function sum(n1) {
//      return function(n2) {
//          return n1 +n2; 
//      }
//  }

 function sum(n1) {
    return (n2) => n1+n2;
 }
 console.log(sum(1)(2));

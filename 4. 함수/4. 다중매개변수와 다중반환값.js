
//multi parameter :매개변수가 n개인 경우

//집합 자료구조를 매개변수로 사용
//[배열, 객체]

//n개의 정수를 전다랗면 해당 정수의 총합을 구해주는 함수

//스프레드 (ES6)
function addAll(...numbers) {
    var total = 0;

    for(var n of numbers) {
        total += n;
    }
    return total;
}

var r1 = addAll(1, 3, 5, 10, 20); //배열 하나만 전달할때는 ...사용가능

console.log(`r1 : ${r1}`);

function foo(arr1, arr2){

}

foo([10,20], [500,1000,1500]);


// function bar(...arr1, ...arr2){

// }

// bar(10,20, 500,1000,1500); //사용불가


console.log('====================');

//함수의 리턴값은 언제나 하나
//2개의 정수를 전달하면 덧셈, 뺄셈, 곱셈, 나눗셈의 결과를 리턴받고 싶어

function operateAll(n1, n2) {
    // var addResult = n1 + n2;
    // var subResult = n1 - n2;
    // var multiResult = n1 * n2;
    // var divideResult = n1 / n2;

    // var resultSet = [addResult,subResult, multiResult, divideResult2];

    // return resultSet;

    // return [addAll(n1,n2), n1 - n2, n1 * n2, n1 / n2];

    return {
        //순서가 바뀌었을때를 대비
        plus: addAll(n1,n2),
        minus: n1-n2,
        multiply: n1*n2,
        divide: n1/n2,
    }
}

var result = operateAll(10, 5)
// console.log(`덧셈결과 : ${result[0]}`);
// console.log(`뺄셈결과 : ${result[1]}`);
// console.log(`곱셈결과 : ${result[2]}`);
// console.log(`나눗셈결과 : ${result[3]}`);

console.log(`덧셈결과 : ${result.plus}`);
console.log(`뺄셈결과 : ${result.minus}`);
console.log(`곱셈결과 : ${result.multiply}`);
console.log(`나눗셈결과 : ${result.divide}`);

// result.pop(); //배열이니까 push, pop가능 
// result[0].push(); //객체니까 불가능 

// operateAll(100,4)[1]; //가능
// console.log(`r2: ${r2}`);

// operateAll(100, 4).pop();
// operateAll(100, 4).length();
// for(var n of operateAll(100,4)){
//     //가능가능
// }
//배열인지 아닌지 구분해서 사용하는게 중요하다!!!!!!
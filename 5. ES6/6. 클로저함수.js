// 자바스크립트의 함수는 함수를 리턴할 수 있음
/*
function calculator(n1, n2) {

    function add() {
        return n1 + n2;
    }

    return add;
}
*/

// const calculator = (n1, n2) => () => n1 + n2;


/*
function calculator(n1, n2) {
    return () => n1 + n2;
}


const zzz = calculator(5, 7);
console.log(typeof zzz); //함수를 리턴했으므로 zzz는 함수 

const n = zzz();
console.log(`n : ${n}`);
*/


/*
let count = 0; // 카운팅 변수 (전역 변수)

// 카운트를 올리는 함수
const increase = () => ++count;

console.log(increase());
console.log(increase());

count = 999;

console.log(increase()); // 3??
*/

/*
const increase = () => {
    let count = 0; // 지역 변수
    return ++count;
};

console.log(increase());
console.log(increase());
console.log(increase()); // 3??
*/

/* //이런문제 해결을 위해서 클로저를 사용
const increaseClosure = () => {

    let count = 0; // 지역 변수 

    return () => ++count; //함수를 리턴
};


const increase = increaseClosure(); //함수

console.log(increase());
console.log(increase());

// count += 30;

console.log(increase()); // 3??
*/

// 즉시 실행 함수 : 정의와 동시에 호출
const result = (function (n1, n2) {
    return n1 + n2;
  })(5, 8);
  
  console.log(result);
  
  
  
  const increase = (function () {
  
    let count = 0; // 지역 변수
    return () => ++count;
  
  })();
  
  console.log(increase());
  console.log(increase());
  console.log(increase());
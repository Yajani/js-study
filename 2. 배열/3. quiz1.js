/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. prompt 창을 띄워 사용자에게 숫자를 입력해 달라고 요청한 후, 
   입력받은 값들을 배열에 순차적으로 저장합니다.
   
2. '그만'이라고 입력하면 질문을 멈추고
   입력했던 숫자배열과 숫자의 총합(배열 요소의 합)을 계산하여 출력하세요.
*/

// 숫자를 저장할 배열
var numbers = [];

while (true) {

    var inputData = prompt('숫자를 입력하세요.\n그만두려면 \'그만\'이라고 입력하세요!')

    if (inputData === '그만') break;

    // 배열에 데이터 저장
    numbers.push(+inputData); //숫자로 저장 
}

// 총합 구하기

var total = 0;

for (var n of numbers) {
    total += n;
}

alert(`입력한 숫자 목록 [${numbers}]\n입력한 숫자 총합: ${total}`);



// // 나의 풀이 !!!!!
// var array = [];
// var value ='';
// while(true){
//     value = prompt('숫자를 입력해 주세요\n그만두려면 \'그만\'이라고 입력해주세요');
//     if(value === '그만'){
//         break;
//     } else{
//         array.push(Number(value));
//     }  
// }

// var sum=0;
// var message = '[';
// for(var i =0; i<array.length; i++){
//     message += array[i];
//     message += ', ';
//     sum += array[i];
// }
// message += ']';

// alert(`입력한 숫자 목록 ${message}\n입력한 숫자 총합 : ${sum}`);



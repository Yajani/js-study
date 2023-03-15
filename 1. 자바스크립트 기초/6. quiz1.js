// x ~ y까지의 누적합
var x = +prompt('첫번째 숫자를 입력!')
var y = +prompt('두번째 숫자를 입력!')


if( x > y) {
    //swap
    var t;
    t = x;
    y = x;
    y = t;
    
}

var total = 0;
var n = x;

while (n <= y) {
    // 반복 코드
    total += n;

    n++;
}
console.log(`${x} ~ ${y}까지의 누적합: ${total}`);
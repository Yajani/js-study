

 alert('~~~~~~~ 재미있는 UP&DOWN 게임 ~~~~~~');
//  alert('\t[ 1 ~ 50 사이의 무작위 숫자를 맞춰보세요 !!! ]');

var rn = Math.floor(Math.random() * 50) + 1;
var n = +prompt('[ 1 ~ 50 사이의 무작위 숫자를 맞춰보세요 !!! ]');
while(n !== rn){
    if(n < rn){
        var n2 = +prompt('UP!!');
        n = n2;
    } else if(n > rn) {
        var n3 = +prompt('DOWN!!');
        n = n3;
    }
}
alert('딩동댕~');


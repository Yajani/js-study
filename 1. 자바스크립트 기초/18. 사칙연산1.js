alert('~~~~~재미있는 사칙연산 게임 ~~~~~~\n[즐겁게 문제를 푸시다가 지겨우면0을 누르세요~]\n======================================');

var count = 1;
while(true){
    var front = Math.floor(Math.random() * 50) + 1
    var back = Math.floor(Math.random() * 50) + 1
    var result = +prompt(`Q${count}. ${front} + ${back} = ??`);
    if(result === (front + back)){
        alert('정답입니다 !');
    } else if(result === 0) {
        break;
    } else {
        alert('틀렸어요~');
    }

    count++;
}

alert('게임을 종료합니다!');
 
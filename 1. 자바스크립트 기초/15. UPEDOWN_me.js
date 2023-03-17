

alert('~~~~~~~ 재미있는 UP&DOWN 게임 ~~~~~~\n[ 난이도를 설정하세요 ~~!!!]');
var level = +prompt('[ 1. 상 (기회 3번) | 2. 중 (기회 6번) | 3. 하 (기회 10번) ]')

var rn = Math.floor(Math.random() * 50) + 1;

if(level === 1){
    var num = 3;    
} else if(level === 2){
    var num = 6;
} else {
    var num = 10;
}
var n = +prompt(`[ 1 ~ 50 사이의 무작위 숫자를 ${num}번안에 맞춰보세요 !!! ]`);

for(var i=1; i<= num; i++){
    if(n < rn){
        if(i === 5) {
            alert(`UP!!\n기회가 0번 남았습니다.\n기회를 모두 소진했습니다. GAME OVER!!!`)
        } else{           
            var n2 = +prompt(`UP!!\n기회가 ${5-i}번 남았습니다.`);
            n = n2;
        }
    } else if(n > rn) {
        if(i === 5) {
            alert(`DOWN!!\n기회가 0번 남았습니다.\n기회를 모두 소진했습니다. GAME OVER!!!`)
        } else{
            var n3 = +prompt(`DOWN!!\n기회가 ${5-i}번 남았습니다.`);
            n = n3;
        }
    } else if(n === rn){
        alert('딩동댕~');
        break;
    }

    
}


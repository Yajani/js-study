

alert('~~~~~~~ 재미있는 UP&DOWN 게임 ~~~~~~');
//  alert('\t[ 1 ~ 50 사이의 무작위 숫자를 맞춰보세요 !!! ]');

var rn = Math.floor(Math.random() * 50) + 1;
var n = +prompt('[ 1 ~ 50 사이의 무작위 숫자를 5번안에 맞춰보세요 !!! ]');

for(var i=1; i<=5; i++){
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


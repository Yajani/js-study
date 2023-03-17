
var playernum = +prompt('게임 인원(2 ~ 4명) ==> ');

var player = [];
alert('플레이어 이름을을 등록합니다.');
for(var i=0; i<playernum; i++){
    player[i] = prompt(`${i}번 플레이어 이름: `);        
}
alert(`[${player}] 참가!`);

var rn = Math.floor(Math.random() * playernum) + 1;
var gunSeed = +prompt('실탄 개수 (1~5개)');


alert(`총을 받았습니다. ${player[rn-1]}부터 시작합니다.`);
while(true){
    var dead = Math.floor(Math.random() * 1) + 0;    
    if(gunSeed === 0 || player.length === 1) {
        break;
    }
    alert(`[${player[rn-1]}님의 턴!] 탄창을 회전합니다.\n#엔터를 누르면 격발합니다.`);

    if(dead === 0) {
        alert(`# 빵!! [${player[]}]`);
    }
}
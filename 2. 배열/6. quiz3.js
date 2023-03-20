
var playernum = +prompt('게임 인원(2 ~ 4명) ==> ');

var player = [];
alert('플레이어 이름을을 등록합니다.');
for(var i=0; i<playernum; i++){
    player[i] = prompt(`${i}번 플레이어 이름: `);        
}
alert(`[${player}] 참가!`);

var rn = Math.floor(Math.random() * playernum) + 1;
var gunSeed = +prompt('실탄 개수 (1~5개)');

var dead1 = Math.floor(Math.random() * 1) + 0; 
alert(`총을 받았습니다. ${player[rn-1]}부터 시작합니다.`);
alert(`[${player[rn-1]}님의 턴!] 탄창을 회전합니다.\n#엔터를 누르면 격발합니다.`);
if(dead1 === 0 ){
    alert(`# 빵!! [${player[rn-1]}]님 사망...RIP`);
    gunSeed--;
    player.splice(rn-1,1);    
} else{
    alert(`...휴~~ 살았습니다.`);   
}

while(true){
    var target = Math.floor(Math.random() * player.length) + 1;
    var dead2 = Math.floor(Math.random() * 1) + 0;    
    
    alert(`[${player[target-1]}님의 턴!] 탄창을 회전합니다.\n#엔터를 누르면 격발합니다.`);

    if(dead2 === 0) {
        alert(`# 빵!! [${player[target-1]}]님 사망...RIP`);
        gunSeed--;
        player.splice(target-1,1);
    }else{
        alert(`...휴~~ 살았습니다.`);
        continue;
    }


    if(gunSeed === 0 ){
        alert(`# 총알이 모두 소진되었습니다. 게임을 종료합니다.\n# 생존한 인원 : [${player}]`);
        break;
    } else if(player.length === 1){
        alert(`# 단 한명만 살아남았습니다. 게임을 종료합니다./n# 최후 생존자: ${player}`);
        break;
    }


}
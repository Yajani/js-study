alert('~~~~~재미있는 사칙연산 게임 ~~~~~~\n[즐겁게 문제를 푸시다가 지겨우면0을 누르세요~]\n======================================');

while(true) {
    var right = 0, wrong = 0;
    var range = 0;
    var count =1;
    while(true){
        alert('~~~~난이도를 설정합니다.~~~~~');
        var level =  +prompt('[1. 상 (1~100) | 2. 중 (1~50) | 3. 하 (1~20)]');
    
        if(level === 1) {
            range = 100;
        } else if(level === 2){
            range = 50;
        } else if(level === 3) {
            range = 20;
        } else {
            alert('난이도를 숫자로 다시 입력하세요 !');
            continue;
        }
        break;
    }
    
    //게임 종료 플래그
    var gameEndFlag = false;
    
    while(true){
    
        var front = Math.floor(Math.random() * range) + 1
        var back = Math.floor(Math.random() * range) + 1
        var n1 = front>back ? front:back;
        var n2 = front>back ? back:front;
    
        var option = Math.floor(Math.random() * 4) + 1
        var result =0; 
    
    
        var cal = '';
        if(option === 1){
            cal = '+';
            result = n1 + n2;  
        } else if(option === 2){
            cal = '-';
            result = n1 - n2;  
        }
        else if(option === 3){
            cal = 'x';
            result = n1 * n2;  
        } else if(option === 4){
            cal = '/';
            result = n1 / n2;  
        }
    
        var answer = +prompt(`Q${count}. ${n1} ${cal} ${n2} = ??`);
        count++;
    
        if(answer === result){
            alert('정답입니다 !');
            right++; 
        } else if(answer === 0) {
            gameEndFlag = true;     
            break;
        }  
        else {
            alert('틀렸어요~');
            wrong++;  
        }         
    }//end game loop
                                                            
    alert(`게임을 종료합니다!\n-------------------\n정답횟수 : ${right}회, 틀린횟수 : ${wrong}회`);

    if(gameEndFlag){
        var exitFlag = confirm('한판 더 ?');
        if(!exitFlag){ //(exitFlag === false)
            alert('수고하셨습니다!');
            break;
        }
    }
}//end all game loop
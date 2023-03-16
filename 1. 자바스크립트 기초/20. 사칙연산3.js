alert('~~~~~재미있는 사칙연산 게임 ~~~~~~\n[즐겁게 문제를 푸시다가 지겨우면0을 누르세요~]\n======================================');

var right = 0, wrong = 0;
while(true){
    var front = Math.floor(Math.random() * 50) + 1
    var back = Math.floor(Math.random() * 50) + 1
    var n1 = front>back ? front:back;
    var n2 = front>back ? back:front;

    var op = Math.floor(Math.random() * 4) + 1
    var result =0; 
    var answer = '';
    if(op === 1){
        answer = +prompt(`Q${count}. ${n1} + ${n2} = ??`);
        result = n1 + n2;  
    } else if(op === 2){
        var answer = +prompt(`Q${count}. ${n1} - ${n2} = ??`);
        result = n1 - n2;  
    }
    else if(op === 3){
        var answer = +prompt(`Q${count}. ${n1} * ${n2} = ??`);
        result = n1 * n2;  
    } else if(op === 4){
        var answer = +prompt(`Q${count}. ${n1} / ${n2} = ??`);
        result = n1 / n2;  
    }

    if(answer === result){
        alert('정답입니다 !');
        right++; 
    } else if(answer !== result) {
        alert('틀렸어요~');
        wrong++;  
    } else {
        break;     
    }

    // switch(op){
    //     case 1:
    //         var answer = +prompt(`Q${count}. ${n1} + ${n2} = ??`);
            
    //         if(result === (front + back)){
    //             alert('정답입니다 !');
    //             right++;
    //         }
    //         else if(result === 0){
    //             alert(`게임을 종료합니다!\n-------------------\n정답횟수 : ${right}회, 틀린횟수 : ${wrong}회`);
    //             break;
    //         } else {
    //             alert('틀렸어요~');
    //             wrong++;
    //         }
    //         break;
    //         case 2:
    //             var result = +prompt(`Q${count}. ${n1} - ${n2} = ??`);
    //             if(result === (front > back? front - back: back - front)){
    //                 alert('정답입니다 !');
    //                 right++;
    //             }else if(result === 0){
    //                 alert(`게임을 종료합니다!\n-------------------\n정답횟수 : ${right}회, 틀린횟수 : ${wrong}회`);
    //                 break;
    //             }
    //             else {
    //                 alert('틀렸어요~');
    //                 wrong++;
    //             }
    //             break;
    //             case 3:
    //                 var result = +prompt(`Q${count}. ${n1} x ${n2} = ??`);
    //                 if(result === (front*back)){
    //                     alert('정답입니다 !');
    //                     right++;
    //                 }else if(result === 0){
    //                     alert(`게임을 종료합니다!\n-------------------\n정답횟수 : ${right}회, 틀린횟수 : ${wrong}회`);
    //                     break;
    //                 }else {
    //                     alert('틀렸어요~');
    //                     wrong++;
    //         }
    //         break;
    //         case 4:
    //             var result = +prompt(`Q${count}. ${n1} / ${n2} = ??`);
    //             if(result === (front > back? front / back: back / front)){
    //                 alert('정답입니다 !');
    //                 right++;
    //             }else if(result === 0){
    //                 alert(`게임을 종료합니다!\n-------------------\n정답횟수 : ${right}회, 틀린횟수 : ${wrong}회`);
    //                 break;
    //             }
    //             else {
    //                 alert('틀렸어요~');
    //                 wrong++;
    //             }
    //             break;
    // }
            
}
                                                        
alert(`게임을 종료합니다!\n-------------------\n정답횟수 : ${right}회, 틀린횟수 : ${wrong}회`);
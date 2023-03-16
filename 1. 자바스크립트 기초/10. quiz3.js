
//1.한 변의 길이를 입력 받는다. 
var length = 5;

var star = ' ';

// 2.


var num = +prompt('정사각형을 그립니다. 높이는 얼마입니까?');
var result='';
for(var i=0; i< num ; i++){
    for(var j=0; j<num; j++){
        result += '*  ';
    }
    result += '\n';
}

alert(result);
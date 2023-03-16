

//5000번의 루프 중 1~100사이의 랜덤숫자중 30이 
//나오면 반복을 중간에 멈추고 싶다.


for(var i=0; i < 50000; i++) {
    var rn = Math.floor(Math.random() * 10) + 1;
    console.log(rn);

    if(rn === 3){
        console.log(`반복문 종료 : ${i}`);
        break;
    }
    console.log(rn);

}
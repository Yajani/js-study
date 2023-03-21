const userList = [
    {
        account: 'abc1234',
        userName: '대길이',
        job: '추노',
        address: '서울',
        hobbys: ['수영', '축구', '테니스']
    },
    {
        account: 'banana',
        userName: '빠나나',
        job: '과일',
        address: '서울',
        hobbys: ['수영', '테니스']
    },
    {
        account: 'park1234',
        userName: '주차왕',
        job: '발렛파킹',
        address: '경기',
        hobbys: ['수영', '축구', '테니스', '영화감상']
    },
    {
        account: 'fire',
        userName: '불꽃남자카리스마',
        job: '게이머',
        address: '서울',
        hobbys: ['축구', '테니스']
    },
];


function alertUserInfo(wannaSay) { //회원정보 출력
    for(const user of userList){
        wannaSay(user);
    }
}

// alertUserInfo(u => console.log(`${u.userName}`));

//배열 고차 함수 
//forEach() :배열의 요소를 반복하면서 하나씩 꺼내줌 

userList.forEach(user => {
    console.log(user.address);
});

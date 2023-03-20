
var a = 50 ;


//객체 리터럴(값)
 var dog = {
    //프로퍼티 작성
    'name':'뽀삐',
    kind:'진돗개',
    age: 3,
    //'for waiting' : 11,
    injection : true,
    favorite : ['산책', '간식'],
    hate : null,

    plaWithchild: function() {}
};

var cat = {
    //프로퍼티 작성
    'name':'콩순이',
    age: 2,
    injection : true,
    favorite : ['낮잠자기', '방 어지럽히기'],
    kind : '블랙러시안',

};

console.log(typeof dog);

//객체에 저장된 데이터 참조 
console.log(dog.name);
console.log(cat.name);
console.log(cat.favorite);

console.log(dog.favorite[0]);

dog.age - cat.age; //가능
dog.favorite.push('꼬리 흔들기'); //배열에 푸시가능
console.log(dog);

//slice한 배열에서 splice하는 것 
dog.favorite.slice(1).splice(1, 1);


// 프로퍼티 참조2
console.log('=================================');
console.log(dog.injection);
console.log(dog['injection']);

//key를 변수에 저장 
var fv = 'favorite';
console.log(cat[fv]);
// console.log(cat['fv']); //변수에 담아서 참조에는 ''을 사용하지 않는다

//프로퍼티 값 수정 
dog.age = 4;
cat.favorite[1] = '실뭉치';

dog['injection'] = false;
console.log(dog);

//프로퍼티 동적 추가 
cat.owner = '김철수'; //추가
cat.owner = '박영희'; //수정
console.log(cat);

//프로퍼티 삭제 
delete cat.owner;
console.log(cat);

//프로퍼티 존재 유무 확인 
//key를 반드시 문자열로 표기해야함.

var ageFlag = 'age123' in cat;
console.log(ageFlag);

// master라는 프로퍼티가 없으면 추가해라 
if(!('master' in cat)){
    cat['master'] = '김또또';
}
console.log(cat);

console.log('============================');
//객체를 순회하는 반복문
//key를 반복해서 추출해줌 
for(var k in dog) {
    // console.log(k);
    // value를 추출하는 방법
    console.log(dog[k]);
}
























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
















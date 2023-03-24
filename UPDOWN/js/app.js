
import gameData from './gameData.js';



// 정의부
function gameStart(iconCount) {

    const $numbers = document.getElementById('numbers');
    
    // 구슬을 iconCount개 만들어야 함.
    const makeIcon = () => {

        for (let n = 1; n <= iconCount; n++) {
            // <div class='icon'>1</div>
            const $icon = document.createElement('div');
            $icon.classList.add('icon');
            $icon.textContent = n;
            $icon.dataset.iconNumber = n;

            $numbers.appendChild($icon);
        }
    };

    makeIcon();

    // 아이콘에 클릭 이벤트 부여하기
    $numbers.onclick = e => {

        if (!e.target.matches('#numbers .icon')) return;

        // console.log(`${e.target.dataset.iconNumber}번구슬 클릭함!`);

        // 사용자가 클릭한 아이콘의 숫자를 answer에 저장
        gameData.answer = +e.target.dataset.iconNumber;
        console.log(gameData.secret);

        // 정답 검증 함수
        checkNumber(e.target);

    };

}

// 정답을 검증하는 함수
function checkNumber($target) {

    const {secret, answer} = gameData;

    // 실제정답이랑 선택값을 비교
    if (secret === answer) { // 정답인 경우
        correctAnswer($target);
    } else if (secret > answer) { // up인 경우
        caseUp($target);    
    } else {    // down인 경우
        caseDown($target);
    }
}

function caseUp($icon) {

    // 1. #begin의 숫자값이 클릭값 + 1로 변경
    document.getElementById('begin').textContent = +$icon.dataset.iconNumber + 1;

    // 2. #down .selected 제거, #up에 추가
    document.getElementById('down').classList.remove('selected');
    document.getElementById('up').classList.add('selected');

    // 3. 자기 자신 아이콘포함 이전형제들 모두 삭제
    const $numbers = document.getElementById('numbers');

    // iterator 디자인 패턴
    let $delTarget = $icon;
    while ($delTarget) {

        const $nextTarget = $delTarget.previousElementSibling;
        $numbers.removeChild($delTarget);
        $delTarget = $nextTarget;
    }
    
    

}

function caseDown($icon) {

    // 1. #end의 숫자값이 클릭값 - 1로 변경
    document.getElementById('end').textContent = +$icon.dataset.iconNumber - 1;

    // 2. #up .selected 제거, #down에 추가
    document.getElementById('up').classList.remove('selected');
    document.getElementById('down').classList.add('selected');

    // 3. 자기 자신 아이콘포함 다음형제들 모두 삭제
    const $numbers = document.getElementById('numbers');

    // iterator 디자인 패턴
    let $delTarget = $icon;
    while ($delTarget) {

        const $nextTarget = $delTarget.nextElementSibling;
        $numbers.removeChild($delTarget);
        $delTarget = $nextTarget;
    }

}

function correctAnswer($correctIcon) {
    // 1. finish아이디 박스에 class 'show'부여
    const $finish = document.getElementById('finish');
    $finish.classList.add('show');


    // 2. #numbers 클릭 이벤트 해제
    document.getElementById('numbers').onclick = null;

    // 3. 클릭한 아이콘에 id 'move' 부여
    $correctIcon.setAttribute('id', 'move');
}


//========================================//
// 실행부
(function() {
    
    gameStart(100);

})();
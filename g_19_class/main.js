/*
  constructor(생성자함수), prototype(프로토타입)을 활용한 JS에서의 객체지향 프로그래밍

  생성자함수 (es5 객체를 생성하기 위한 특별한 함수)
  - 어떤 반복적인 대량의 결과물을 뽑아내기 위한 시스템적인 틀 (붕어빵틀)

  인스턴스, 객체 (생성자함수를 통해서 뽑아낸 특별한 객체)
  - 생성자를 통해서 복사가된 결과물 (붕어빵틀을 통해서 뽑아낸 각각의 붕어빵)

  프로토타입 
  - 생성자함수 생성시 자동으로 만들어지는 공통의 저장공간
  - 동일한 생성자함수를 통해서 복사가된 인스턴스들은 같은 프로토타입 공간을 서로 공유
  - 보통 자주쓰는 함수들을 생성자안쪽의 프로토타입에 등록을 하면 각각의 인스턴스들이 해당 함수를 공유 (메서드)

  객체지향이 아닐때의 불편한점
  1. 불필요한 전역변수가 많아져서 서로 다른 스크립트 작업물에 간섭을 주는 전역변수의 오염발생
  2. 비슷한 성격의 함수들을 하나의 카테고리로 패키징해서 관리가 불가능

  객체지향으로 코드 변경 순서
  1.생성자 함수 이름은 무조건 대문자로 시작
  2.생성자 함수로 전달된 인수값을 생성자 내부에서 this객체에 옮겨담음 (불필요한 전역변수 불필요)
  3.생성자 함수에 prototype에 함수를 등록
  4.생성자 함수를 new 연산자로 호출해서 복사본인 인스턴스 생성

  중요 - 생성자 함수 안쪽에서 this ---> 해당 생성자를 통해서 앞으로 복사가 될 인스턴스 객체를 의미
*/

/*
const tit1 = document.querySelector('#title1');
const tit2 = document.querySelector('#title2');

changeSize(tit1, '100px');
changeSize(tit2, '50px');

changeColor(tit1, 'hotpink');
changeColor(tit2, 'aqua');

function changeSize(el, size) {
	el.style.fontSize = size;
}
function changeColor(el, color) {
	el.style.color = color;
}
*/

function FontStyle(el) {
	this.el = document.querySelector(el);
	console.log(this);
}
FontStyle.prototype.changeSize = function (size) {
	this.el.style.fontSize = size;
};
FontStyle.prototype.changeColor = function (color) {
	this.el.style.color = color;
};

//생성자 함수를 이용하면 특정값을 this객체에 담아서 전달 가능 (전연변수 x)
//this객체는 생성자함수를 통해서 앞으로 복사될 인스턴스 객체 지칭
const copy1 = new FontStyle('#title1');
const copy2 = new FontStyle('#title2');

copy1.changeSize('50px');
copy2.changeSize('100px');
copy1.changeColor('aqua');

console.log(copy1);
console.log(copy2);
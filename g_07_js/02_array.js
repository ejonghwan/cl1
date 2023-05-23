//배열(array) 규칙성이 있는 여러개의 자료들을 그룹화할때
let colors = ['red', 'green', 'blue'];
//배열의 갯수 반환
console.log(colors.length);
//배열의 값을 반복도는 배열전용 내장함수(메서드)
colors.forEach((data) => console.log(data))

//배열 값 변경
colors[0] = 'hotpink';
console.log(colors);

//배열에 값 뒤에 추가
colors.push('aqua');
console.log(colors);

//배열에 앞에 값 추가
colors.unshift('orange');
console.log(colors);

//배열의 맨 앞의 값 삭제
colors.shift();
console.log(colors);

//배열의 맨 뒤의 값 삭제
colors.pop();
console.log(colors);

//참조형 자료는 변수값을 새로운 변수에 옮겨담아서 복사했을때 얕은 복사가됨
//원본은 그대로 있는 상태에서 해당 원본을 참조하는 참조링크만 2개로 복사가 됨
//새로 복사한 배열의 변수값을 변경을 해도 그 변수에 담겨있는 참조링크가 지칭하는 값은 동일하기 때문에 결국은 원본은 훼손 (불변성유지 안됨)
let oldArr = [1, 2, 3];
let newArr = oldArr;
newArr[0] = 0;
console.log(newArr);
console.log(oldArr);
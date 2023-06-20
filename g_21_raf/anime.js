/*
  peformance.now();
  1ms단위로 정밀한 시간계산이 가능
  브라우저가 로딩된 순간부터 해당 구문이 호출된 시점까지의 시간을 ms단위로 반환
  정밀한 시간계산이 필요할때 활용됨
*/
const btn = document.querySelector('button');
const box = document.querySelector('#box');
let num = 0;
let startTime = 0;


// 횟수를 조절할수없으니 시간을 정해줌 = speed
let speed = 1000;  
const targetValue = 500;

btn.addEventListener('click', () => {
	startTime = performance.now();
	// console.log('시작시간', startTime);
	requestAnimationFrame(move);
});

function move(time) {
	// console.log('반복사이클 마다의 누적시간', time);

	let timeLast = time - startTime;
	let progress = timeLast / speed
		
	console.log(progress)


	// 매 반복 횟수마다 현재 걸리는 누적시간값을 전체시간으로 나누면 0~1사이의 실수로 반환가능
	if(progress < 1 ) {
		progress = 1
		requestAnimationFrame(move);
	}
}

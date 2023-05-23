 /*
    조건문
    - 특정 조건마다의 분기를 생성해서 코드 흐름에 변화를 줌

    if(조건식1){
      조건식1이 참이면 해당 코드블록의 구문이 실행되고 종료
      조건식1이 거짓이면 이곳의 구문이 무시되고 다음 조건식으로 넘어감
    }
    else if(조건식2){
      조건식2가 참이면 해당 코드블록의 구문이 실행되고 종료
      조건식2가 거짓이면 이곳의 구문이 무시되고 다음 조건식으로 넘어감
    }
    else {
      위의 모든 조건이 참이 아니면
      무조건 해당 코드블록을 실행하고 종료
    }
    */

    const weekdays = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const now = new Date();
    console.log(now.getHours()); //현재 시간값 반환
    console.log(now.getMinutes()); //현재 분값 반환
    console.log(now.getSeconds()); //현재 초값 반환
    console.log(weekdays[now.getMonth()]); //현재 월 반환
    console.log(now.getFullYear()); //현재 연도 반환

    const currentTime = now.getHours();
    /*
    if (currentTime >= 0 && currentTime < 9) {
      document.body.style.backgroundColor = 'violet';
    }
    else if (currentTime >= 9 && currentTime < 15) {
      document.body.style['background-color'] = 'skyblue';
    }
    else {
      document.body.style.backgroundColor = 'orangered';
    }
    */
    if (currentTime >= 0 && currentTime < 9) document.body.style.backgroundColor = 'violet';
    else if (currentTime >= 9 && currentTime < 15) document.body.style['background-color'] = 'skyblue';
    else document.body.style.backgroundColor = 'orangered';
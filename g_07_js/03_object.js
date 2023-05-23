//객체(object) 여러개의 자료값을 그룹화할때 해당 값을 key: value형태로 구조화한 형태
    //객체의 property 키값은 따옴표를 붙이지 않아도 스크립트 엔진이 내부적으로 자동으로 변환처리
    //하지만 is-female같이 예약어를 같이 쓴 경우에는 오류 발생 : 해결방법 - 따옴표로 강제로 감싸줌
    let studentA = {
        name: 'David',
        age: 20,
        'is-Female': false
      }
  
      //특정 객체의 property key값의 value값을 가져올때는 아래 2가지 방법으로 처리
      console.log(studentA['is-Female']);
      console.log(studentA.name);
      console.log(studentA['name']);
  
      //객체의 특정 키 값의 프로퍼티 삭제
      delete studentA.age;
      delete studentA['is-Female'];
      console.log(studentA);
      
      //객체 값 변경
      studentA.name = 'Peter';
      console.log(studentA);
      
      //객체 값 추가
      studentA.address = 'Seoul';
      console.log(studentA);
/*
      자료형 (Data type) : 변수에 저장되는 값의 종류

      원시형 자료 (primitive type) 해당 변수에 바로 값이 대입되어 있는 형태 (callstack에 저장)
      변수에 원시형 자료가 담겨있을떄 해당 변수값을 복사하면 값 자체가 복사됨 (deep copy) 깊은 복사
      - 문자열 (string)
      - 숫자 (number)
      - 불리언 (boolean)
      - undefined (undefined)

      참조형 자료 (reference type) 해당 변수에 바로 값이 대입되는게 아닌 원래 값이 있는 위치의 참조 주소가 대입되어 있는 형태 
      참조형 자료의 값을 head 메모리에 저장되어 있고 heap메모리에 있는 위치링크 (참조값)이 변수에 저장되는 형태
      변수에 참조형 자료가 담겨있을떄 해당 변수값을 복사하면 값 자체가 복사되는 것이 아닌 참조링크만 복사됨 (shallow copy) 얕은복스
      - 배열 (array)
      - 객체 (object)
      - null (object)
    */

      let txt = 'hello'; //문자형
      let num = 3; //숫자
      let isFemale = true; //boolean
      let err; //변수를 선언 뒤, 값을 할당하지 않았을때 자동으로 들어가는 자료형 
  
      //배열(array) 규칙성이 있는 여러개의 자료들을 그룹화할때
      let colors = ['red', 'green', 'blue']; 
  
      //객체(object) 여러개의 자료값을 그룹화할때 해당 값을 key: value형태로 구조화한 형태
      let studentA = {
        name: 'David',
        age: 20,
        isFemale: false
      }
  
      let empty = null; //undefined와는 의도치 않게 값이 비어있는 것이 아닌 일부러 값을 비워둘때 사용
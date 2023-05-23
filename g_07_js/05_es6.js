
    /*
      false로 인식되는 사례 값들
      undefined, null, 0, ''

      es6이후 객체관련 추가된 편의 기능들
      - 객체의 property key값을 대괄호로 감싸면 변수로 치환가능

      false로 인식되는 값이 들어올떄 || 뒤에 디폴트값 입력가능
      false값이 들어올때만 ?? 뒤에 디폴트값 입력가능

      자바스크립트 구문이 실행도중에 코드 중간에 비어있는 객체의 값을 호출하면 런타임에러가 발생하면서 코드가 중간에 멈춤
      이때 옵셔널 체이닝을 이용해서 해당 객체값이 있을때에만 구문 실행
    */
    const name = 'sirName';

    let obj = {
      [name]: 'David',
      age: 20,
      address: 'seoul'
    }
    console.log(obj);

    let productName = 0;
    //productName = 'laptop';

    console.log(productName || 'nothing');
    console.log(productName ?? 'nothing');

    let test = null;
    //비어있는 객체의 값을 호출하려고 할떄
    //(Optional Chaining)을 설정하지 않으면 에러가 발생하면서 코드 중지됨
    //비어있는 객체뒤에 ?를 붙여서 Optional Chaining 설정을 하면 설사 객체값이 비어있더라도 일단은 넘어가고
    //만약 객체값이 있으면 실행하는 식으로 객체값의 유무에 따라서 선택적 실행가능
    console.log(test?.name);

    test = {
      name: 'Paul',
      age: 10
    }
    console.log(test.name);

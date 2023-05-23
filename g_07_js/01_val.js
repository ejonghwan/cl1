/*
        변수: 
        - 특정 데이터값을 임시로 저장하는 공간
        - 자주쓰는 데이터값을 효율적으로 관리하기 위함
        - 한번 찾은 데이터를 재활용하기 위함 (성능)
    
        const 변수명 = 대입할 값;
        let 변수명 = 대입할 값;
    
        es5 vs es6
        ECMAScript 2015 버전을 기점으로 문법이 많이 변경됨
    
        let, const차이점
        let - 재할당 가능 (값을 추후에 변경 가능)
        const - 재발항 불가 (한번 저장한 값을 추후 덮어쓰기 불가, 보통 변경되면 안되는 중요한 값 저장시 const 사용)
        */
    
        let num; //변수 선언 : 메모리 생성
        num = 5; //변수에 값 할당, 대입 : 해당 메모리에 값을 저장
        let num1 = 6; //변수 초기화 : 변수를 선언과 동시에 값 할당
    
        console.log(num);
        num = 7;
        console.log(num);
        //let으로 선언된 변수는 값을 재할당 가능
    
        const num2 = 0;
        console.log(num2);
        num2 = 1;
        console.log(num2);
        //const로 지정된 변수는 값 재할당 불가
    
        /*
        변수명 작성시 주의점
        1. 숫자로 시작불가
        2. 특수문자 삽입 불가 (_, $는 사용가능)
        3. 대소문자 구분 (apple, APPLE)
        4. 예약어 (let, const, function, for, if)
        5. 한글 사용 불가
        */


        // let const 도 호이스팅하지만 만나기전까진 액세스하지않음
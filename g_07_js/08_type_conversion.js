 /*
      형변환
    */
      let num1 = 1;
      let num2 = 2;
      let num3 = '3';
      console.log(num3 + num2 + num1); //'321'
      //console.log(num1 + num2 + num3); //'33'
  
      let name = 'David';
      console.log('안녕 name');
      //변수를 따옴표 안쪽에 집어넣으면 문자화 되기 때문에 문자열과 변수를 분리시킨다음 + 연산자로 결합
      console.log('안녕 ' + name);
  
      let name2 = '홍길동';
      console.log('저의 이름은 ' + name2 + ' 입니다.');
      console.log(`저의 이름은 ${name2} 입니다.`);
  
      console.log(2 + false);
      console.log(2 + true);
      console.log(2 + null);
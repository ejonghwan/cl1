const name = 'David';
    const age = 20;
    const isFemale = false;
    const errors = undefined;

    const colors = ['red', 'green', 'blue'];
    const obj = {
      name: 'Emily',
      age: 20
    }
    const empty = null;

    console.log(typeof name);
    console.log(typeof age);
    console.log(typeof isFemale);
    console.log(typeof errors);

    console.log(typeof colors); //자바스크립트의 배열의 자료형은 객체
    console.log(typeof obj);
    console.log(typeof null); //실제 null의 자료형은 null인데 object로 찍히는 것은 자바스크립트 버그
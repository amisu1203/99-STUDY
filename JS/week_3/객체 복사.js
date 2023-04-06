// 단순히 객체를 프로퍼티에 접근하여 복사하면 복사된 객체의 값 변경시 원본도 변경됨
// 참조형 타입의 경우 obj의 데이터 주소를 가져가고 데이터 자체는 변경하지 않지만(새로운 데이터를 만들지만)
// 참조하는 데이터의 주소가 변경되면 그 바뀐 주소를 가리키는 주소를 원본과 복사본 모두 가지게됨

// 그리하여 얕은 복사를 이용함

var copyObject = function (target) {
  var result = {};
  for (let prop in target) {
    result[prop] = target[prop];
  }
  return result;
};

var user = {
  name: "jisu",
  gender: "female",
};

var user2 = copyObject(user);
user2.name = "star";

if (user !== user2) {
  console.log("유저 정보가 변경되었습니다.");
}

console.log(user.name, user2.name);
console.log(user === user2);

// 하지만 중첩객체의 경우 얕은 복사를 사용하면 여전히 dept 안의 객체들은 주소값을 복사한다.
// 복사한 중첩 객체의 프로퍼티 변경 시 원본의 중첩객체도 변경된다 -> 가변
// 따라서 객체를 불변하게 하기위해 깊은 복사를 수행한다.

// 깊은 복사

var copyObjectDeep = function (target) {
  var result = {};
  if (typeof target === "object" && target !== null) {
    for (var prop in target) {
      result[prop] = copyObjectDeep(target[prop]);
    }
  } else {
    result = target;
  }
  return result;
};

//결과 확인
var obj = {
  a: 1,
  b: {
    c: null,
    d: [1, 2],
  },
};
var obj2 = copyObjectDeep(obj);

obj2.a = 3;
obj2.b.c = 4;
obj2.b.d[1] = 3;

console.log(obj);
console.log(obj2);

// 어려우신 분들은 강의를 한번 더 돌려보시기를 권장드려요 :)
var a = 1;
var outer = function () {
  var inner = function () {
    console.log(a); // 이 값은 뭐가 나올지 예상해보세요! 이유는 뭐죠? scope 관점에서!
    var a = 3;
  };
  inner();
  console.log(a); // 이 값은 또 뭐가 나올까요? 이유는요? scope 관점에서!
};
outer();
console.log(a); // 이 값은 뭐가 나올까요? 마찬가지로 이유도!

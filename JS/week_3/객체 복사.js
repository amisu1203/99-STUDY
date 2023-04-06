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

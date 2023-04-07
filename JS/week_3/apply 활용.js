// TO-BE
function Person(name, gender) {
  this.name = name;
  this.gender = gender;
}
function Student(name, gender, school) {
  Person.call(this, name, gender);
  this.school = school;
}

function Employee(name, gender, company) {
  Person.apply(this, [name, gender]);
  this.company = company;
}
var kd = new Student("차은우", "male", "서울대");
var ks = new Employee("공유", "female", "삼성");

// TO - BE
var numbers = [10, 20, 3, 16, 45];
max = Math.max.apply(null, numbers);
min = Math.min.apply(null, numbers);
console.log(max, min);
// 근데 이건 그냥 스프레드 연산자로 해도 될듯
max = Math.max(...numbers);
console.log(max);

// 숙제
// 나이든 유저
// getAged 함수를 사용해서 Passed! 문장이 나오게 해라
var user = {
  name: "john",
  age: 20,
};

var getAged = function (user, passedTime) {
  let agedUser = {};
  for (let prop in user) {
    agedUser[prop] = user[prop];
  }
  agedUser.age += passedTime;
  return agedUser;
};

console.log(getAged(user, 6));
var agedUser = getAged(user, 6);

var agedUserMustBeDifferentFromUser = function (user1, user2) {
  if (!user2) {
    console.log("Failed! user2 doesn't exist!");
  } else if (user1 !== user2) {
    console.log("Passed! If you become older, you will be different from you in the past!");
  } else {
    console.log("Failed! User same with past one");
  }
};

agedUserMustBeDifferentFromUser(user, agedUser);

var fullname = "Ciryl Gane";

var fighter = {
  fullname: "John Jones",
  opponent: {
    fullname: "Francis Ngannou",
    getFullname: function () {
      // 1. 객체 this 바인딩 : 프란시스 은가누
      return this.fullname;
    },
  },

  getName: function () {
    // 2. 객체 this 바인딩 : 존 존스
    return this.fullname;
  },

  getFirstName: () => {
    // 3. 함수 this 바인딩 : 시릴
    return this.fullname.split(" ")[0];
  },

  getLastName: (function () {
    // 3. 함수 this 바인딩 : 시릴
    return this.fullname.split(" ")[1];
  })(),
};

console.log("Not", fighter.opponent.getFullname(), "VS", fighter.getName());
console.log("It is", fighter.getName(), "VS", fighter.getFirstName(), fighter.getLastName);

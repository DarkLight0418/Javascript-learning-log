let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 70,
  }
};

let clone = Object.assign({}, user);  // 객체 복사하는 메소드 Object.assign(목표 객체, 출처 객체)

console.log(user.sizes === clone.sizes);  // true, 같은 객체

user.sizes.width++;  // 한 객체에서 프로퍼티 변경
console.log(clone.sizes.width);  // 71, 다른 객체에서의 변경 사항 확인

/* Object.assign() 메소드 리액트에서 어떻게 사용할 수 있을지 고민해보기 */
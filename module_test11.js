//사용패턴: exports의 속성 이름을 주면서 추가하되 프로토 타입 객체를 정의한 후 할당함

var User = require('./user11.js').User;
var user = new User ('test01', '소녀시대');

user.printUser();
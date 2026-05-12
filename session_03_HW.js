const person = {
    name : '아기사자',
    age : 20,

    introduce: function () {
        console.log('제 이름은 ${this.name}이고, 나이는 ${this.age}살입니다.');
    }
};

const horse = {
    name = '적토마',
    age = 3,
    rider = person,

    introduce: function (){
        console.log('이 말의 이름은 ${this.name}이고, 나이는 ${this.age}살입니다.');
    }
};

horse.introduce();
person.introduce();
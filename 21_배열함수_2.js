class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student("A", 29, true, 45),
    new Student("B", 28, false, 80),
    new Student("C", 30, true, 90),
    new Student("D", 40, false, 66),
    new Student("E", 18, true, 88),
];

// 05. find a student with the score 90
// find는 가장 먼저 조건에 맞는 값 하나만 찾고 즉시 함수를 종료한다.

const result = students.find((student) => {
    return student.score === 90;
});

console.log(result);

// 06. make an array of enrolled students

const enrolled = students.filter((student) => {
    return student.enrolled === true;
});

console.log(enrolled);

// 07. make an array containing only the students' scores
// result should be : [45, 80, 90, 66, 88]
// map은 배열 안의 요소 하나하나를 다른 것으로 변환해준다.

const score = students.map((student) => {
    return student.score;
});

console.log(score);

// 08. check if there is a student with the score lower than 50

const lower50 = students.some((studends) => {
    console.log(studends.score);
    return studends.score < 50;
});

console.log(lower50);

// constranits: means strict rules set

type StudentType = {
  id: string,
  name: string,
  birthdate: string,
  roll: number
};

const addStudentsToCourse = <T extends StudentType>(studentInfo: T) => {
  return {
    course: "Next Level",
    ...studentInfo
  }
}

const student1 = {
  id: '101',
  name: "abc",
  subject: 'CSE',
  birthdate: '04-12-2000',
  roll: 101,

}

const student2 = {
  id: "102",
  name: "xyz",
  subject: "Botany"
}

const result = addStudentsToCourse(student1);
// const result = addStudentsToCourse(student2);
console.log(result);

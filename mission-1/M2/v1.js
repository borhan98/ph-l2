const course1 = {name: "Full stack web development"};
const course2 = {name: "Next level web development"};

const map = new Map();

map.set(course1, {courseId: "level1"});
map.set(course2, {courseId: "level2"})

map.forEach((val, key) => key.name = "sohoj sorol simple " + key.name)

console.log([...map.values()]);
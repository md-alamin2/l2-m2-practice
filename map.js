const course1 = {name: 'level1'};
const course2 = {name: 'level2'};

const map = new Map();
map.set('courseId', 'level1');
map.set(course1, 'level2')
// map.delete(course1)
// map.clear()
// console.log(map.has(course1))

map.forEach((value, key)=>{console.log(value, key)})
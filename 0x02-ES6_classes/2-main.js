import ALXCourse from './2-hbtn_course';

const c1 = new ALXCourse('ES6', 1, ['Bob', 'Jane']);
console.log(c1.name);
c1.name = 'Python 101';
console.log(c1);

try {
  c1.name = 12;
} catch (err) {
  console.log(err);
}

try {
  // TODO: implement later
} catch (err) {
  console.log(err);
}

const {v4: uuidv4 } = require('uuid');

class Student {

  id = '';
  name = '';
  surname = '';
  age = 0;
  createdAt = null;

  constructor( name, surname, age, createdAt) {
    this.id         = uuidv4();
    this.name       = name;
    this.surname    = surname;
    this.age        = age;
    this.createdAt  = createdAt;
  }

}

module.exports = Student;

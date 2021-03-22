const { v4: uuidv4  } = require('uuid');

class Course {
  id = '';
  name = '';
  hours = 0;
  teacher = {};
  students = [];
  createdAt = new Date();

  constructor( name, hours, createdAt) {
    this.id        = uuidv4(),
    this.name      = name;
    this.hours     = hours;
    this.courses   = [];
    this.createdAt = createdAt;
  }

}

module.exports = Course;

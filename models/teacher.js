const { v4: uuidv4  } = require('uuid');

class Teacher {
  
  id = '';
  name = '';
  surname = '';
  createdAt = null;

  constructor( name, surname, createdAt ) {
    this.id         = uuidv4(),
    this.name       = name;
    this.surname    = surname;
    this.createdAt  = createdAt;
  }
}

module.exports = Teacher;

const fs = require('fs');
const Student = require('../models/student');
const { readInput } = require('../helpers/inquirer');
const { readDB, saveDB } = require('../helpers/db');

const controller = {
  
  /* Inseertar estudiantes en la base de datos  */
  createStudent: async () => {
    const { name }    = await readInput('name');
    const { surname }    = await readInput('surname');
    const { age }    = await readInput('age');

    const student = new Student(name, surname, age, new Date());
    const obj = {
	id: student.id,
      	name: student.name,
      	surname: student.surname,
      	age: student.age,
      	createdAt: student.createdAt
    };

    const students = readDB(process.env.DBURL_STUDENTS);
    students.push(obj);

    saveDB(process.env.DBURL_STUDENTS, JSON.stringify(students));
    console.log('The student was created !');
  }
  

};




module.exports = controller;

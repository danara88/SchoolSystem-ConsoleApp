const Teacher = require('../models/teacher');
const { readInput } = require('../helpers/inquirer');
const { readDB, saveDB } = require('../helpers/db');

const controller = { 

  /** Crear un profesor nuevo */
  createTeacher: async () => {
    const { name }    = await readInput('name');
    const { surname } = await readInput('surname');

    // Preparar el obejto para ser guardado
    const teacher = new Teacher(name, surname, new Date());
    const obj = {
      id: teacher.id,
      name: teacher.name,
      surname: teacher.surname,
      cratedAt: teacher.createdAt
    };
	
    // Obtener los datos como un arreglo para agregar el nuevo objeto
    const teachers = readDB(process.env.DBURL_TEACHERS);
    teachers.push(obj);

    // Guardar en la base de datos
    saveDB(process.env.DBURL_TEACHERS, JSON.stringify(teachers));
    console.log('Teacher created !'.green);
  }


}


module.exports = controller;

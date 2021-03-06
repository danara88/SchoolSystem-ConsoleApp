const inquirer = require('inquirer');
const colors = require('colors');

const optionsMenu = [
  {
    type: 'list',
    name: 'option',
    message: 'Select an option: ',
    choices: [
      {
        value: 1,
        name: `${'1.'.yellow} Register student`
      },
      {
        value: 2,
        name: `${'2.'.yellow} Register a course`
      },
      {
        value: 3,
        name: `${'3.'.yellow} Register teacher`
      },
      {
        value: 4,
        name: `${'4.'.yellow} Add students to a course`
      },
      {
        value: 5,
        name: `${'5.'.yellow} Add teacher to a course`
      },
      {
	value: 6,
	name: `${'6.'.yellow} List courses`
      },
      {
	value: 7,
	name: `${'7.'.yellow} Remove courses`
      },
      {
	value: 8,
	name: `${'8.'.yellow} Update course`
      },
      {
        value: 0,
	name: `${'0.'.yellow} Exit`
      }
    ]
  }
];

// Imprime el menu y optiene el valor seleccionado
const printMenu = async () => {
  console.clear();
  console.log('*                  *');
  console.log(`${'------- Menu -------'.green}`);
  console.log('*                  *');
  const { option } = await inquirer.prompt(optionsMenu);
  return option;
}

// Hace una espera después de completar acciones
const waitMessage = async () => {
  const questionInput = [
    {
      type: 'input',
      name: 'continue',
      message: 'Press ENTER to continue'
    }
  ];
  await inquirer.prompt(questionInput);
}

// Leer un input para registro de nuevo estudiante
const readInput = async ( field = '' , dataDefault = null) => {
  const questionOpts = [
    {
      type: 'input',
      name: `${ field }`,
      message: `${ field }: `,
      validate( value ) {
        if (value.length === 0) {
          return 'Please insert a value';
        }
        return true;
      }
    }
  ];
  
  if ( dataDefault !== null ) questionOpts[0].default = dataDefault;

  const data = await inquirer.prompt(questionOpts);
  return data;
}

// Listar todos los estudiantes para agregarlos a un curso
const listStudents = async ( students = []  ) => {
  // Opciones
  const choices = students.map((student, i) => {
    const sentence = `${ i + 1 }. ${ student.name } ${ student.surname } `;
    return {
	value: student,
      	name: sentence
    };
  });

  // Configuración de inquirer
  const configList = [{
    type: 'checkbox',
    name: 'studentsSelected',
    message: 'Select students',
    choices
  }];
  const { studentsSelected } = await inquirer.prompt(configList);
  return studentsSelected;

}

// Listar los cursos
const listCourses = async( courses = [] ) => {
  const choices = courses.map( (course, i) => {
    const sentence = `${ i + 1 }. ${ course.name } `;
    return {
	value: course,
      	name: sentence
    }
  } );
  
  const configList = [{
    type: 'rawlist',
    name: 'course',
    message: 'Select the course',
    choices
  }];
  const { course  } = await inquirer.prompt(configList);
  return course;

}

// Listar los cursos en formato de checkbox
const listCoursesCheck = async( courses = [] ) => {
  const choices = courses.map((course, i) => {
    const sentence = `${ i + 1 }. ${ course.name } `;
    return {
	value: course,
        name: sentence
    }
  } );
  
  const configList = [{
    type: 'checkbox',
    name: 'coursesSelected',
    message: 'Select courses to remove',
    choices
  }];

  const { coursesSelected } = await inquirer.prompt(configList);
  return coursesSelected;
}

// Listar los maestros
const listTeachers = async ( teachers = []  ) => {
  const choices = teachers.map( (teacher, i) => {
    const sentence = `${ i + 1 }. ${ teacher.name } ${ teacher.surname }`;
    return {
	value: teacher,
      	name: sentence
    }

  } );

  const configList = [{
    type: 'rawlist',
    name: 'teacher',
    message: 'Select the teacher',
    choices
  }];

  const { teacher } = await inquirer.prompt(configList);
  return teacher;

};

module.exports = {
  printMenu,
  waitMessage, 
  readInput,
  listStudents,
  listCourses,
  listTeachers,
  listCoursesCheck
}











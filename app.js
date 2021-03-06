require('dotenv').config();
const { printMenu, waitMessage } = require('./helpers/inquirer');

const StudentController = require('./controllers/student');
const TeacherController = require('./controllers/teacher');
const CourseController  = require('./controllers/course');

const main = async() => {

  let opt;
  do {
    // Pedir la opción del menu seleccionado
    opt = await printMenu();

    // Verificar que opción seleccionó
    switch( opt ) {

      case 1 :
        await StudentController.createStudent();
        break;

      case 2 :
        await CourseController.createCourse();
        break;

      case 3:
        await TeacherController.createTeacher();
        break;

      case 4:
	await CourseController.addStudents();
	break;

      case 5:
	await CourseController.addTeacher();
	break;

      case 6:
	await CourseController.getCourses();
	break;

      case 7:
	await CourseController.removeCourses();
	break;

      case 8:
	await CourseController.updateCourse();
	break;
    }

    // Lanza el mensaje de precionar ENTER para continuar
    if (opt !== 0) await waitMessage();

  } while (opt !== 0);

}


main();

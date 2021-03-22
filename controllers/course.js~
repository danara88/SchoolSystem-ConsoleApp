require('colors');
const Course = require('../models/course');
const { readInput, listStudents, listCourses, listTeachers, listCoursesCheck } = require('../helpers/inquirer');
const { saveDB, readDB } = require('../helpers/db');

const controller = {

  /** Crear un curso nuevo */
  createCourse: async () => {
    const { name }    = await readInput('name');
    const { hours }   = await readInput('hours');
	
    const course = new Course(name, hours, new Date());
    const obj = {
        id: course.id,
	name: course.name,
	hours: course.hours,
	createdAt: course.createdAt
    };

    const courses = readDB(process.env.DBURL_COURSES);
    courses.push(obj);
    
    saveDB(process.env.DBURL_COURSES, JSON.stringify(courses));
    console.log('The course was created !');
  },


  /** Añadir estudiantes a un curso */
  addStudents: async () => {
    // Seleccioinar los estudiantes
    const students = readDB(process.env.DBURL_STUDENTS);
    const studentsSelected = await listStudents( students );
   
    // Seleccionar el curso
    const courses = readDB(process.env.DBURL_COURSES);
    const course = await listCourses( courses );

    // Encontrar el index del objeto
    const courseIdx = courses.indexOf(course);
    
    // Eliminarlo de la base de datos
    if ( courseIdx !== -1  ) {
       courses[courseIdx] = {
	...course,
	 students: studentsSelected
       }
    }
   
    // Guardar en la base de datos
    saveDB(process.env.DBURL_COURSES, JSON.stringify(courses));
    console.log(`You have added students to the course ${ course.name } `);
	
  },


  /** Añadir un profesor a un curso */
  addTeacher: async () => {
    // Seleccionar al profesor
    const teachers = readDB(process.env.DBURL_TEACHERS);
    const teacher = await listTeachers(teachers);

    // Seleccionar el curso
    const courses = readDB(process.env.DBURL_COURSES);
    const course = await listCourses( courses );

    const courseIdx = courses.indexOf(course);
    if ( courseIdx !== -1 ) {
	courses[courseIdx] = {
	  ...course,
	  teacher
	};
    }

    saveDB(process.env.DBURL_COURSES, JSON.stringify(courses));
    console.log(`You have added the teacher ${ teacher.name } to the course ${ course.name }`);
  },

  /** Listar todos los cursos con sus profesores y alumnos  */
  getCourses: async () => {
    const courses = readDB(process.env.DBURL_COURSES);
    console.log('\n');
    if ( courses.length > 0 ) {
      courses.forEach((course, i) => {
	let idx = `${i + 1}`.yellow;
	let courseName = course.name;
	let sentence = `${ idx } ${ courseName } - ${ course.hours } hours`;
	console.log( sentence );
	if ( course.teacher  ) {
	  console.log(`   Teacher: ${ course.teacher.name } ${ course.teacher.surname} `.green);
	}
	if ( course.students && course.students.length > 0  ) {
	  console.log('   Students'.green);
	  course.students.forEach((student) => {
            console.log(`    -> ${ student.name } ${ student.surname }`);
	  });
	} else {
	  console.log('There is not students'.red);
	}
	
        console.log('\n');
      });
    } else {
	console.log('There is not courses'.red);
    }
	
  },

  removeCourses: async () => {
    const courses = readDB(process.env.DBURL_COURSES);
    console.log('\n');
    if( courses.length > 0) {
	const coursesSelected = await listCoursesCheck(courses);
      	coursesSelected.forEach(course => {
	  const idx = courses.indexOf(course);
	  if ( idx !== -1 ) {
	    courses.splice(idx, 1);
	  }
	});

       // Guardar cambios en base de datos
       saveDB(process.env.DBURL_COURSES, JSON.stringify(courses));

       console.log('Courses removed !'.green);
    } else {
	console.log('There is not courses'.red);
    }
  },

  updateCourse: async () => {
    const courses = readDB(process.env.DBURL_COURSES);
    if ( courses.length > 0 ) {
	const courseSelected = await listCourses(courses);
        
      	const { name  } = await readInput('name', courseSelected.name);
        const { hours } = await readInput('hours', courseSelected.hours);

       const courseIdx = courses.indexOf(courseSelected);
       courses[courseIdx].name = name;
       courses[courseIdx].hours = hours;

       // Actualizar en la base de datos	
       saveDB(process.env.DBURL_COURSES, JSON.stringify(courses));

       console.log('Course updated !'.green);
    } else {
	console.log('There is not courses'.red);
    }
  }

}



module.exports = controller; 

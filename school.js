function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
    info() {
      console.log(`${this.name} is a ${this.year} year student`)
    },
    addCourse(course) {
      this.courses.push(course)
    },
    listCourses() {
      return this.courses
    },
    addNote(code, note) {
      const course = this.courses.find(obj => obj.code === code);
      if (!course) return;
      course.note = course.note? `${course.note}; ${note}` : `${note}`;
    },
    updateNote(code, note) {
      const course = this.courses.find(obj => obj.code === code);
      if (!course) return;
      course.note = note;
    },
    viewNotes() {
      this.courses.forEach((course) => {
        if (course.note) console.log(`${course.name}: ${course.note}`)
      })
    },
    addGrade(courseName, grade) {
      const course = this.courses.find(c => c.name === courseName);
      if (course) course.grade = grade;
    }
  }
}

let school = {
  students: [],
  addStudent(name, year) {
    if (['1st', '2nd', '3rd', '4th', '5th'].includes(year)) {
      const student = createStudent(name, year)
      this.students.push(student)
      return student
    } else {
      console.log('Invalid Year')
    }
  },
  enrollStudent(student, courseName, courseCode) {
    student.addCourse({name: courseName, code: courseCode})
  },
  addGrade(student, course, grade) {
    student.addGrade(course, grade)
  },
  getReportCard(student) {
    student.courses.forEach((course) => {
      let grade = course.grade ? course.grade : 'In progress';
      console.log(`${course.name}: ${grade}`);
    })
  },
  courseReport(courseName) {
    let result = []
    this.students.forEach((student) => {
      const course = student.courses.find(c => c.name === courseName)
      if (course && course.grade !== undefined) {
        result.push({name: student.name, grade: course.grade})
      }
    })
    if (result.length === 0) return;
    const average = result.reduce((sum, { grade }) => sum + grade, 0) / result.length;
    console.log(`=${courseName} Grades`)
    result.forEach(({name, grade}) => console.log(`${name}: ${grade}`))
    console.log('---')
    console.log(`Course Average: ${average}`)
  }
}


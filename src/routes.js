import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

//REGISTRATION FORM
const RegistrationForm = React.lazy(() => import('./views/RegistrationForm/RegistrationForm'))


//Student
const AllStudents = React.lazy(() => import('./views/AllStudents/AllStudent'))
const Class_I = React.lazy(() => import ('./views/AllStudents/Class_I'))
const StudentDetails = React.lazy(() => import ('./views/Students/StudentDetails'))

//Attendence
const Attendance = React.lazy(() => import ('./views/Attendance/Attendance'))


//Teachers
const TeacherForm = React.lazy(() => import('./views/Teachers/TeacherForm'))
const AllTeacher = React.lazy(() => import ("./views/Teachers/AllTeacher"))

//Accounts
const FeeDetails = React.lazy(() => import("./views/FeeDetails/FeeDetails"))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },

  ///REGISTRATION FORMS
  { path: '/register/students', name: 'Students', element: RegistrationForm, exact: true },
  

  //student
  { path: '/students', name: 'Students', element: AllStudents, exact: true },
  { path: '/students/allstudents', name: 'Students', element: AllStudents },
  { path: '/students/class1', name: 'Class I', element: Class_I },
  { path: '/students/:studentId', name: 'studentDetails', element: StudentDetails },

  //Teacher
  { path: "teachers/allteachers", name:"AllTeacher", element: AllTeacher, exact: true},
  { path: "teachers/addteacher", name:"AllTeacher", element: TeacherForm, exact: true},

  //Attendence
  {path: "/attendance", name: "Attendance", element: Attendance, exact: true},

  //FeeDetails
  {path:"accounts/fees", name:"FeeDetails", element: FeeDetails, exact: true},

]

export default routes

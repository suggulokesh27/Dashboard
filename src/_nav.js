import React from 'react'
import CIcon from '@coreui/icons-react'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
import {
  cibHackhands,
  cilBook,
  cilColumns,
  cilContrast,
  cilDescription,
  cilGroup,
  cilMoney,
  cilNewspaper,
  cilNotes,
  cilSpeedometer,
  cilWc,
} from '@coreui/icons'

const _nav = [
  // {
  //   component: CNavItem,
  //   name: 'Overview',
  //   to: '/dashboard',
  //   icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  // },
  {
    component: CNavItem,
    name: 'Admission',
    to: '/dashboard',
    icon:<CIcon icon={cibHackhands} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Students',
    to: '/sudents',
    icon: <CIcon icon={cilWc} customClassName="nav-icon" />,
    items: [
          {
            component: CNavItem,
            name: 'Class I',
            to: '/students/class1',
          },
          {
            component: CNavItem,
            name: 'Class II',
            to: '/students/class2',
          },
        ]
  },
  {
    component: CNavGroup,
    name: 'Teachers',
    to: '/teachers',
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Teacher',
        to: '/teachers/allteachers',
      },
      {
        component: CNavItem,
        name: 'Add Teacher',
        to: '/teachers/addteacher',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Subjects',
    to: '/subjects',
    icon: <CIcon icon={cilBook} customClassName="nav-icon" />,
    // items: [
    //   {
    //     component: CNavItem,
    //     name: 'All Fees Collection',
    //     to: '/accounts/fees',
    //   },
    // ],
  },
  {
    component: CNavGroup,
    name: 'Accounts',
    to: '/accounts',
    icon: <CIcon icon={cilMoney} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Fees Collection',
        to: '/accounts/fees',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Attendance',
    to: '/attendance',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Schedule',
    to: '/schedule',
    icon: <CIcon icon={cilColumns} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Exam',
    to: '/exam',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Exam Schedule',
        to: '/exam/examschedule',
      },
    ],
    items: [
      {
        component: CNavItem,
        name: 'Exam Grades',
        to: '/exam/examgrades',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Message & Alerts',
    to: '/message&alerts',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Tracking & Analytic',
    to: '/tracking&analytic',
    icon: <CIcon icon={cilContrast} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Notice',
    to: '/notice',
    icon: <CIcon icon={cilNewspaper} customClassName="nav-icon" />,
  },
]

export default _nav

import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav = [
  {
    _tag: 'CSidebarNavItem',
    name: 'Overview',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // }
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Interviews',
    route: '/interviews',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'All Interviews',
        to: '/all-int',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Schedule New',
        to: '/schedule-int',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Set availability',
        to: '/availability',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Interview Questions',
        to: '/int-quest',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Interview Page',
        to: '/int-page',
        badge: {
          color: 'info',
          text: 'Testing',
        }
      },

    ],
  },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Schedule Interview',
  //   to: '/schedule-interview',
  //   icon: 'cil-drop',
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Add Questions',
  //   to: '/add-int-questions',
  //   icon: 'cil-pencil',
  // },

  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Admin']
  // },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Candidates',
    route: '/buttons',
    icon: 'cil-user',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'All Candidates',
        to: '/all-candid',
      },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Condidate Appointment',
      //   to: '/candid-appoint',
      // },
    ],
  },

  {
    _tag: 'CSidebarNavTitle',
    _children: ['Interview Management']
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Admin VMS ',
    route: '/admin-vms',
    icon: 'cil-cursor',
    _children: [

      {
        _tag: 'CSidebarNavItem',
        name: 'All Interviews',
        to: '/all-int',
      },
    ],
  },
 
  {
    _tag: 'CSidebarNavItem',
    name: 'All Questions',
    to: '/all-quest',
    icon: 'cil-file',

  },
 
  {
    _tag: 'CSidebarNavItem',
    name: 'Calendar Management ',
    to: '/calendar-management',
    icon: 'cil-calendar',

  },
 
  {
    _tag: 'CSidebarNavDivider'
  },

  {
    _tag: 'CSidebarNavTitle',
    _children: ['Settings'],
  },
  
  {
    _tag: 'CSidebarNavItem',
    name: 'Profile Settings ',
    to: '/setting',
    icon: 'cil-settings',
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Pages',
    badge: {
      color: 'warning',
      text: 'Testing',
    }, 
    route: '/pagees',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Login',
        to: '/login',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Sign Up',
        to: '/register',
      },
      {
        _tag: 'CSidebarNavItem',
        name: '404 Error',
        to: '/404',
      },
    ]
  }
]

export default _nav

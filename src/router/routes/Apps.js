// ** React Imports
import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const AppRoutes = [  
  {
    path: '/apps/wanted/seeking',
    exact: true,
    className: 'wanted-application',
    component: lazy(() => import('../../views/apps/wanted/seeking-info'))
  },
  {
    path: '/apps/wanted/seeking/:uid/details',
    exact: true,
    className: 'wanted-application',
    component: lazy(() => import('../../views/apps/wanted/seeking-details'))
  }
]

export default AppRoutes

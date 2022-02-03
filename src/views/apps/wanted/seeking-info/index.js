// ** React Imports
import { Fragment, useState, useEffect } from 'react'

// ** Wanted Components
import Sidebar from './Sidebar'
import Fugitives from './Fugitives'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
import { getFugitives } from '@src/redux/wanted'

// ** Styles
import '@styles/react/apps/app-wanted.scss'

const SeekingInfo = () => {
  // ** States
  const [activeView, setActiveView] = useState('grid')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // ** Vars
  const dispatch = useDispatch()
  const store = useSelector(state => state.wanted)

  // ** Get fugitives
  useEffect(() => {
    dispatch(
      getFugitives({
        q: '',
        sortBy: 'publication',
        pageSize: 9,
        perPage: 9,
        page: 1
      })
    )
  }, [dispatch])
  
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Most Wanted' breadCrumbParent='Wanted' breadCrumbActive='Seeking Information' />
      <Fugitives
        store={store}
        dispatch={dispatch}        
        activeView={activeView}
        getFugitives={getFugitives}
        sidebarOpen={sidebarOpen}        
        setActiveView={setActiveView}        
        setSidebarOpen={setSidebarOpen}        
      />
      <Sidebar 
        sidebarOpen={sidebarOpen}
        store={store}
        dispatch={dispatch}
        getFugitives={getFugitives}
      />
    </Fragment>
  )
}
export default SeekingInfo

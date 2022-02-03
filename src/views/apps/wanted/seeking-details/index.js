// ** React Imports
import { useEffect, Fragment } from 'react'
import { useParams } from 'react-router-dom'

// ** Fugitive detail components
import ItemFeatures from './ItemFeatures'
import Details from './Details'

// ** Custom Components
import BreadCrumbs from '@components/breadcrumbs'

// ** Reactstrap Imports
import { Card, CardBody } from 'reactstrap'

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
import { getFugitive } from '@src/redux/wanted'

import '@styles/base/pages/app-wanted-details.scss'

const SeekingDetails = () => {
  // ** Vars
  const { uid } = useParams()  
  
  // ** Store Vars
  const dispatch = useDispatch()
  const store = useSelector(state => state.wanted)

  // ** ComponentDidMount : Get fugitive
  useEffect(() => {
    console.log('uid', uid)
    dispatch(getFugitive(uid))
  }, [])

  return (
    <Fragment>
      <BreadCrumbs 
        breadCrumbTitle='Most Wanted'
        breadCrumbParent='Seeking'
        breadCrumbParentLink='/apps/wanted/seeking'
        breadCrumbActive={store.fugitiveDetail.title ? store.fugitiveDetail.title : ''} />
      <div className='app-wanted-details'>
        {store.fugitiveDetail ? (
          <Card>
            <CardBody>
              <Details
                dispatch={dispatch}
                uid={uid}
                getFugitive={getFugitive}
                data={store.fugitiveDetail}
              />
            </CardBody>
            <ItemFeatures data={store.fugitiveDetail} />           
          </Card>
        ) : null}
      </div>
    </Fragment>
  )
}

export default SeekingDetails

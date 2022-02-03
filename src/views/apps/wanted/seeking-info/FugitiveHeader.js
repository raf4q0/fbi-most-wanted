// ** Third Party Components
import { Menu } from 'react-feather'

// ** Reactstrap Imports
import {
  Row,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledButtonDropdown
} from 'reactstrap'

const FugitiveHeader = props => {
  // ** Props
  const { dispatch, getFugitives, store, setSidebarOpen } = props

  // ** Sorting obj
  const sortToggleText = {
    publication: 'Publication',
    modified: 'Modified'
  }

  return (
    <div className='wanted-header'>
      <Row>
        <Col sm='12'>
          <div className='wanted-header-items'>
            <div className='result-toggler'>
              <button className='navbar-toggler shop-sidebar-toggler' onClick={() => setSidebarOpen(true)}>
                <span className='navbar-toggler-icon d-block d-lg-none'>
                  <Menu size={14} />
                </span>
              </button>
              <span className='search-results'>{store.totalFugitives} Results Found</span>
            </div>
            <div className='view-options d-flex'>
              <UncontrolledButtonDropdown className='dropdown-sort'>
                <DropdownToggle className='text-capitalize me-0' color='primary' outline caret>
                  {sortToggleText[store.params.sortBy]}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                    className='w-100'
                    onClick={() => dispatch(getFugitives({ ...store.params, sortBy: 'publication' }))}
                  >
                    Publication
                  </DropdownItem>
                  <DropdownItem
                    className='w-100'
                    onClick={() => dispatch(getFugitives({ ...store.params, sortBy: 'modified' }))}
                  >
                    Modified
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledButtonDropdown>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default FugitiveHeader

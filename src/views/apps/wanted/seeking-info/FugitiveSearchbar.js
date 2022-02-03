// ** Icons Imports
import { Search } from 'react-feather'

// ** Reactstrap Imports
import { Row, Col, InputGroup, Input, InputGroupText } from 'reactstrap'
// import { getFugitive } from '../store'

const FugitiveSearchbar = props => {
  // ** Props
  const { dispatch, getFugitives, store } = props

  return (
    <div id='wanted-searchbar' className='wanted-searchbar'>
      <Row className='mt-1'>
        <Col sm='12'>
          <InputGroup className='input-group-merge'>
            <Input
              className='search-product'
              placeholder='Search By Name'
              onChange={e => dispatch(getFugitives({ ...store.params, q: e.target.value }))}
            />
            <InputGroupText>
              <Search className='text-muted' size={14} />
            </InputGroupText>
          </InputGroup>
        </Col>
      </Row>
    </div>
  )
}

export default FugitiveSearchbar

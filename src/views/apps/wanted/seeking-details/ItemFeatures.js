// ** Icon Imports
import { PhoneCall, DollarSign, AlertCircle } from 'react-feather'
// ** Reactstrap Imports
import { Row, Col, CardText } from 'reactstrap'

const ItemFeatures = props => {
  const { data } = props
  return (
    <div className='item-features'>
      <Row className='text-center'>
        <Col className='mb-4 mb-md-0' md='4' xs='12'>
          <div className='w-75 mx-auto'>
            <AlertCircle />
            <h4 className='mt-2 mb-1'>Caution</h4>
            <CardText>{data.caution ? data.caution.replace(/(<p[^>]+?>|<p>|<\/p>)/img, "") : 'N/A'}</CardText>
          </div>
        </Col>
        <Col className='mb-4 mb-md-0' md='4' xs='12'>
          <div className='w-75 mx-auto'>
            <DollarSign />
            <h4 className='mt-2 mb-1'>Reward</h4>
            <CardText>{data.reward_max ? data.reward_max : 'N/A'}</CardText>
          </div>
        </Col>
        <Col className='mb-4 mb-md-0' md='4' xs='12'>
          <div className='w-75 mx-auto'>
            <PhoneCall />
            <h4 className='mt-2 mb-1'>Submit a Tip</h4>
            <CardText>Send an anonymous Tip online</CardText>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default ItemFeatures

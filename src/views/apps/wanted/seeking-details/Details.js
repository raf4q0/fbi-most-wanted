// ** Reactstrap Imports
import { Row, Col, CardText } from 'reactstrap'

const Detail = props => {
  // ** Props  
  const { data } = props

  return (
    <Row className='my-2'>
      { data && Object.keys(data).length ? (
        <>
          <Col className='d-flex align-items-center justify-content-center mb-2 mb-md-0' md='5' xs='12'>
            <div className='d-flex align-items-center justify-content-center'>
              <img className='img-fluid product-img' src={data.images[0].original} alt={data.images[0].original} />
            </div>
          </Col>
          <Col md='7' xs='12'>
            <h4>{data.title}</h4>
            <CardText>{ data.details ? data.details.replace(/(<p[^>]+?>|<p>|<\/p>)/img, "") : data.description }</CardText>
            <hr />
            <div className='d-flex flex-column flex-sm-row pt-1'>
              <ul className='list-unstyled mb-0'>
                <li><CardText>Sex: {data.sex ? data.sex : '-'}</CardText></li>
                <li><CardText>Eyes: {data.eyes ? data.eyes : '-'}</CardText></li>
                <li><CardText>Hair: {data.hair ? data.hair : '-'}</CardText></li>
                <li><CardText>Nacionality: {data.nacionality ? data.nacionality : '-'}</CardText></li>
                <li><CardText>Status: {data.status ? data.status : '-'}</CardText></li>
              </ul>
            </div>
          </Col>
        </>
      ) : (
        <Col>
          <CardText>Loading...</CardText>
        </Col>
      )}
    </Row>
  )
}

export default Detail

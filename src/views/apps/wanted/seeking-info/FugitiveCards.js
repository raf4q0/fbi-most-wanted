// ** React Imports
import { Link } from 'react-router-dom'

// ** Third Party Components
import classnames from 'classnames'

// ** Reactstrap Imports
import { Card, CardBody, CardText } from 'reactstrap'

const FugitiveCards = props => {
  // ** Props
  const { fugitives, activeView } = props
  
  // ** Renders fugitives
  const renderFugitives = () => {
    if (fugitives.length) {
      return fugitives.map(item => {        
        return (
          <Card className='wanted-card' key={item.uid}>
            <div className='item-img text-center mx-auto'>
              <Link to={`/apps/wanted/seeking/${item.uid}/details`}>
                <img className='img-fluid card-img-top' src={item.images[0].thumb} alt={item.images[0].thumb} />
              </Link>
            </div>
            <CardBody>              
              <h6 className='item-name'>
                <Link className='text-body' to={`/apps/wanted/seeking/${item.uid}/details`}>
                  {item.title}
                </Link>                
              </h6>
              <CardText className='item-description'>{item.description}</CardText>
            </CardBody>
          </Card>
        )
      })
    }
  }

  return (
    <div
      className={classnames({
        'grid-view': activeView === 'grid',
        'list-view': activeView === 'list'
      })}
    >
      {renderFugitives()}
    </div>
  )
}

export default FugitiveCards

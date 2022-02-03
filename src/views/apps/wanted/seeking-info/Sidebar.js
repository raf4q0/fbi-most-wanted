import { useState } from 'react'

// ** Third Party Components
import classnames from 'classnames'

// ** Reactstrap Imports
import { 
  Card,
  CardBody,
  Row,
  Col,
  Input,
  Button,
  Label
} from 'reactstrap'

const Sidebar = props => {
  // ** Props
  const { 
    sidebarOpen,
    store,
    dispatch,
    getFugitives
  } = props

  // ** Hooks
  const [selectedSex, setSelectedSex] = useState(null)
  const [selectedFieldOffice, setSelectedFieldOffice] = useState(null)
  const [selectedClassification, setSelectedClassification] = useState(null)
  const [sexOptions, setSexOptions] = useState([
    {
      id: 'female',
      title: 'Female',
      defaultChecked: false
    },
    {
      id: 'male',
      title: 'Male',
      defaultChecked: false
    }
  ])

  const [classifications, setClassifications] = useState([
    {
      id: 'main',
      title: 'Main',
      defaultChecked: false
    },
    {
      id: 'victim',
      title: 'Victim',
      defaultChecked: false
    },
    {
      id: 'accomplice',
      title: 'Accomplice',
      defaultChecked: false
    }
  ])

  const [fieldOffices, setFieldOffices] = useState([
    {
      id: 'atlanta',
      title: 'Atlanta',
      defaultChecked: false
    },
    {
      id: 'boston',
      title: 'Boston',
      defaultChecked: false
    },
    {
      id: 'elpaso',
      title: 'El Paso',
      defaultChecked: false
    },
    {
      id: 'miami',
      title: 'Miami',
      defaultChecked: false
    },
    {
      id: 'whashingtondc',
      title: 'Washington',
      defaultChecked: false
    }
  ])
 
  const handleSexChange = (e, type) => {
    e.preventDefault()        
    
    const selectedOptions = sexOptions.map(option => { 
      option.id === type ? option.defaultChecked = true : option.defaultChecked = false
      return option
    })

    setSelectedSex(type)
    setSexOptions(selectedOptions)    
  }

  const handleClassificationClick = (e, type) => {
    e.preventDefault()
    
    const selectedClassifications = classifications.map(option => { 
      option.id === type ? option.defaultChecked = true : option.defaultChecked = false
      return option
    })

    setSelectedClassification(type)
    setClassifications(selectedClassifications)    
  }

  const handleFieldOfficeClick = (e, type) => {
    e.preventDefault()
    
    const selectedFieldOffices = fieldOffices.map(option => { 
      option.id === type ? option.defaultChecked = true : option.defaultChecked = false
      return option
    })

    setSelectedFieldOffice(type)
    setFieldOffices(selectedFieldOffices)    
  }

  const handleApplyFilters = () => {
    dispatch(getFugitives({ 
      ...store.params, 
      sex: selectedSex,
      field_offices: selectedFieldOffice,
      person_classification: selectedClassification
    }))
  }

  const handleClearFilters = () => {
    setSexOptions([
      {
        id: 'female',
        title: 'Female',
        defaultChecked: false
      },
      {
        id: 'male',
        title: 'Male',
        defaultChecked: false
      }
    ])
    
    setClassifications([
      {
        id: 'main',
        title: 'Main',
        defaultChecked: false
      },
      {
        id: 'victim',
        title: 'Victim',
        defaultChecked: false
      },
      {
        id: 'accomplice',
        title: 'Accomplice',
        defaultChecked: false
      }
    ])

    setFieldOffices([
      {
        id: 'atlanta',
        title: 'Atlanta',
        defaultChecked: false
      },
      {
        id: 'boston',
        title: 'Boston',
        defaultChecked: false
      },
      {
        id: 'elpaso',
        title: 'El Paso',
        defaultChecked: false
      },
      {
        id: 'miami',
        title: 'Miami',
        defaultChecked: false
      },
      {
        id: 'whashingtondc',
        title: 'Washington',
        defaultChecked: false
      }
    ])

    setSelectedSex(null)
    setSelectedClassification(null)
    setSelectedFieldOffice(null)

    dispatch(getFugitives({ 
      ...store.params, 
      sex: null,
      field_offices: null,
      person_classification: null
    }))
  }

  return (
    <div className='sidebar-detached sidebar-left'>
      <div className='sidebar'>
        <div
          className={classnames('sidebar-shop', {
            show: sidebarOpen
          })}
        >
          <Row>
            <Col sm='12'>
              <h6 className='filter-heading d-none d-lg-block'>Filters</h6>
            </Col>
          </Row>
          <Card>
            <CardBody>
              <div className='multi-range-price'>
                <h6 className='filter-title mt-0'>Sex</h6>
                <ul className='list-unstyled price-range'>                 
                {sexOptions.map(sexOption => {
                    return (
                      <li key={sexOption.id}>
                        <div className='form-check'>
                          <Input
                            key={sexOption.defaultChecked}
                            type='radio'
                            id={sexOption.id}
                            name={sexOption.id}
                            defaultChecked={sexOption.defaultChecked}                           
                            onClick={e => handleSexChange(e, sexOption.id)}
                          />
                          <Label className='form-check-label' for={sexOption.id}>
                            {sexOption.title}
                          </Label>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>              
              <div id='product-categories'>
                <h6 className='filter-title'>Field Offices</h6>
                <ul className='list-unstyled categories-list'>
                  {fieldOffices.map(fieldOffice => {
                    return (
                      <li key={fieldOffice.id}>
                        <div className='form-check'>
                          <Input
                            key={fieldOffice.defaultChecked}
                            type='radio'
                            id={fieldOffice.id}
                            name={fieldOffice.id}
                            defaultChecked={fieldOffice.defaultChecked}
                            onClick={e => handleFieldOfficeClick(e, fieldOffice.id)}                          
                          />
                          <Label className='form-check-label' for={fieldOffice.id}>
                            {fieldOffice.title}
                          </Label>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div id='clasifications'>
                <h6 className='filter-title'>Person Classification</h6>
                <ul className='list-unstyled categories-list'>
                  {classifications.map(classification => {
                    return (
                      <li key={classification.id}>
                        <div className='form-check'>
                          <Input
                            key={classification.defaultChecked}
                            type='radio'
                            id={classification.id}
                            name={classification.id}
                            defaultChecked={classification.defaultChecked}
                            onChange={(event) => handleClassificationClick(event, classification.id)}
                          />
                          <Label className='form-check-label' for={classification.id}>
                            {classification.title}
                          </Label>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div id='clear-filters' className='mt-3'>
                <Button color='primary' block onClick={handleApplyFilters}>
                  Apply
                </Button>
              </div>
              <div id='clear-filters' className='mt-1'>
                <Button color='danger' block onClick={handleClearFilters}>
                  Reset All Filters
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

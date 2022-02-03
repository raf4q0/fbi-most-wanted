// ** Dropdowns Imports
import IntlDropdown from './IntlDropdown'

// ** Reactstrap Imports
import { NavItem, NavLink } from 'reactstrap'

const NavbarUser = props => {  
  return (
    <ul className='nav navbar-nav align-items-center ms-auto'>      
      <IntlDropdown />      
    </ul>
  )
}
export default NavbarUser

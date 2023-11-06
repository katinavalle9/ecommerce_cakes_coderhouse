// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import Logo from '../../assets/images/logo.png';
import CartWidget from '../CartWidget/CartWidget';

export default function App() {
  const [openBasic, setOpenBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'><img
              src={Logo}
              className="img-fluid ms-5"
              width='60'
              alt='logo'
              loading='lazy'
            /></MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 d-flex justify-content-around align-items-center'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                Inicio
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  Productos
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Todos</MDBDropdownItem>
                  <MDBDropdownItem link>Galletas</MDBDropdownItem>
                  <MDBDropdownItem link>Panes</MDBDropdownItem>
                  <MDBDropdownItem link>Brownies</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Contacto</MDBNavbarLink>
            </MDBNavbarItem>

          </MDBNavbarNav>

          <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Buscar producto' aria-label='Search' />
            <MDBBtn color='primary'>Buscar</MDBBtn>

            <CartWidget/>

          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
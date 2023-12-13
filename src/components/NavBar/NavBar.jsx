// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";
import Logo from "../../assets/images/logo.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { getCategory } from "../../AsyncMock";

export default function Navbar() {
  const [openBasic, setOpenBasic] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const result = await getCategory();
        setCategories(result);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">
          <img
            src={Logo}
            className="img-fluid ms-5"
            width="60"
            alt="logo"
            loading="lazy"
          />
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0 d-flex justify-content-around align-items-center">
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" tag="div">
              <Link to={`/`}>Inicio</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link" role="button">
                  Productos
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem key={"Todos"}>
                    <Link to="/">Todos</Link>
                  </MDBDropdownItem>
                  {categories.map((category) => (
                    <MDBDropdownItem key={category}>
                      <Link to={`/?categoria=${category}`}>{category}</Link>
                    </MDBDropdownItem>
                  ))}
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink tag="div">
                <Link to={`contact`}>Contacto</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <CartWidget />
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

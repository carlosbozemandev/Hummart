import React, { useEffect, useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import style from "./Navbar.module.scss";
import logo from "../../assets/images/logo.png";
import { Input } from "antd";
import { IoCartOutline } from "react-icons/io5";
import { headerData } from "../../Helper/dummyData";
import { useDispatch, useSelector } from "react-redux";
import AsyncSelect from "react-select/async";
import {
  resetProduct,
  searchProduct,
} from "../../store/Reducers/searchReducer";
import Select from "react-select/";

const { Search } = Input;

const MainNavbar = ({ setVisible }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const { searchResult } = useSelector((state) => state.search);
  const [searchResultArr, setSearchResultArr] = useState([]);
  // debugger;

  const onSearch = (e) => {
    console.log(e, "e");
  };
  const onInput = () => {
    console.log("abc");
  };

  const customStyles = {
    control: (styles, { isFocused, isDisabled }) => ({
      ...styles,
      height: "100%",
      borderColor: "black",
      borderRadius: 0,
      boxShadow: "none",
      width: "700px",
    }),
  };

  const onSearchInput = (e) => {
    console.log(e.target.value);
    dispatch(searchProduct());
  };
  const input = (e) => {
    console.log(e);
  };
  const options = [
    { value: "OPPOF19", label: "OPPOF19" },
    { value: "IPhone X", label: "IPhone X" },
    { value: "Samsung Universe", label: "Samsung Universe" },
  ];
  return (
    <>
      <div className={style.mainCOntainer}>
        <section className={style.firstSection}>
          <p>Delivering Only In Karachi</p>
        </section>
        <section className={style.secondSection}>
          <p>Customer Care</p>
          <p>0900 78601</p>
        </section>
        <section>
          <Navbar
            collapseOnSelect
            expand="lg"
            bg="light"
            variant="light"
            className={style.navbarMainContainer}
          >
            <Container>
              <Navbar.Brand href="">
                <img src={logo} alt="Hum Mart Logo" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto"></Nav>
                <Nav className={`me-auto ${style.searchContainer}`}>
                  {/* <Search
                    placeholder="Search Products"
                    enterButton="Search"
                    size="large"
                    onSearch={onSearch}
                    onInput={onInput}
                    allowClear={true}
                  /> */}
                  {/* <AsyncSelect
                    cacheOptions
                    // defaultOptions={options}
                    styles={customStyles}
                    loadOptions={promiseOptions}
                    placeholder="Search"
                    // options={options}
                  /> */}
                  <Select
                    options={options}
                    styles={customStyles}
                    onChange={onSearchInput}
                    placeholder="Search"
                  />
                  {/* <Nav.Link href="#features">Features</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                </Nav>
                <Nav>
                  <Nav.Link>
                    <div
                      className={style.cartContianer}
                      onClick={() => setVisible(true)}
                    >
                      <IoCartOutline className={style.cartIcon} />
                      <p className={style.cartCount}>
                        {Object.values(cart).length}
                      </p>
                    </div>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </section>
        <Container>
          <section className={style.thirdContainer}>
            <ul>
              {headerData?.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      href={item?.link}
                      className={
                        headerData?.length - 1 !== index
                          ? style.borderRight
                          : ""
                      }
                    >
                      {item?.link}
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>
        </Container>
      </div>
    </>
  );
};

export default MainNavbar;

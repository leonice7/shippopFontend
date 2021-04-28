import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsSearch } from 'react-icons/bs';
import { FiShoppingCart } from  'react-icons/fi';
import { FaBars } from 'react-icons/fa';
import './nav.css';

function Navbars() {
    return (
        <>
            <Navbar fixed="top" className="header" >
                <Navbar.Brand href="#home"><h3 className="allnav ml-5">Book</h3></Navbar.Brand>
                <Nav className="menu mr-auto ml-5" Or right-aligned>
                    <a href="#">สินค้าใหม่</a>
                    <a href="#">สินค้าขายดี</a>
                    <a href="#">สินค้าลดราคา</a>
                    <a href="#">สินค้าแนะนำ</a>
                </Nav>
                <Nav className="searchandshop ml-5 mr-5">
                    <a href="#"><BsSearch className="ml-5 mr-5"/></a>
                    <a href="#"><FiShoppingCart /></a>
                </Nav>
                <Nav className="user">
                    <img src={"user.jpg"}  alt="" width="40" height="40" />
                </Nav>
                <Nav className="bars ml-5">
                    <FaBars />
                </Nav>
            </Navbar>
        </>
    );
}

export default Navbars;

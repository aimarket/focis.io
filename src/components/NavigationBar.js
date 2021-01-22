import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import NavDropdown from 'react-bootstrap/NavDropdown'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

const NavigationBar = () => (
    <nav class="navbar navbar-expand navbar-dark bg-transparent flex-column flex-md-row bd-navbar">
    
    <div class="navbar-nav-scroll">
      <ul class="navbar-nav bd-navbar-nav flex-row">
      <a class="navbar-brand" href="/">
        
        focis</a>
      <li class="nav-item dropdown">
        <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle id="dropdown-custom-1">Projects</Dropdown.Toggle>

            <Dropdown.Menu id='dropdownmenu'>
                <Dropdown.Item id='project-item' href="/pages/pomotech">Pomotech</Dropdown.Item>
                <Dropdown.Item id='project-item' href="/pages/dodecahedron">Dodecahedron</Dropdown.Item>
                <Dropdown.Item id='project-item' href="/pages/airsoft_turret">Airsoft Turret</Dropdown.Item>
            </Dropdown.Menu>
            
        </Dropdown>{' '}
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/pages/about">About</a>
      </li>
    </ul>
    </div>
    <ul class="navbar-nav ml-md-auto">
      <a type="button" class="btn btn-outline-success" href="/pages/donate">Donate</a>
    </ul>
  </nav>
    );


export default NavigationBar;

import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
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
                <Dropdown.Item id='project-item' href="/pomotech">Pomotech</Dropdown.Item>
                <Dropdown.Item id='project-item' href="/dodecahedron">Dodecahedron</Dropdown.Item>
                <Dropdown.Item id='project-item' href="/airsoft_turret">Airsoft Turret</Dropdown.Item>
            </Dropdown.Menu>
            
        </Dropdown>{' '}
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/about">About</a>
      </li>
    </ul>
    </div>
    <ul class="navbar-nav ml-md-auto">
      <a type="button" class="btn btn-outline-success" href="/donate">Donate</a>
    </ul>
  </nav>
    );


export default NavigationBar;

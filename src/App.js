import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Home'
import about from './pages/about'
import airsoft_turret from './pages/airsoft_turret'
import dodecahedron from './pages/dodecahedron'
import donate from './pages/donate'
import pomotech from './pages/pomotech'
import NoMatch from './pages/NoMatch'
import Layout from './components/Layout'
import NavigationBar from './components/NavigationBar'

import Particles from "react-tsparticles";

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Layout>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/pages/about" component={about} />
          <Route path="/pages/pomotech" component={pomotech} />
          <Route path="/pages/airsoft_turret" component={airsoft_turret} />
          <Route path="/pages/dodecahedron" component={dodecahedron} />
          <Route path="/pages/donate" component={donate} />
          <Route component={NoMatch} />

          

        </Switch>
      </Router>
      
      </Layout>
      <Particles
        id="tsparticles"
        
        options={{
          fps_limit: 45,
          
          interactivity: {
            detect_on: "canvas",
            events: {
              ondiv: {
                enable: true,
                elementId: "login",
                mode: "bubble",
                type: "rectangle"
              },
              resize: true
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 5,
                speed: 5,
                color: ["#ff0000", "#ff7700"]
              }
            }
          },
          particles: {
            color: {
              value: ["#DA0463", "#404B69","#00C9B1"]
            },
            links: {
              color: "random",
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1
            },
            move: {
              collisions: true,
              direction: "none",
              enable: true,
              out_mode: "bounce",
              random: false,
              speed: .5,
              straight: false
            },
            number: { density: { enable: true, value_area: 800 }, value: 80 },
            opacity: {
              animation: { enable: true, minimumValue: 0.1, speed: 1, sync: false },
              random: true,
              value: 0.5
            },
            shape: {
              type: "circle"
            },
            size: {
              animation: {
                enable: true,
                minimumValue: 2,
                speed: 5,
                sync: false
              },
              random: {
                enable: true,
                minimumValue: 2
              },
              value: 4
            }
          },
          retina_detect: true
        }}
      />
    </React.Fragment>
    
  );
}

export default App;

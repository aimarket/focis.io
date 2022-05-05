import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Home'
import About from './pages/About'
import AirsoftTurret from './pages/AirsoftTurret'
import Dodecahedron from './pages/Dodecahedron'
import Donate from './pages/Donate'
import Pomotech from './pages/Pomotech'
import NoMatch from './pages/NoMatch'
import Layout from './components/Layout'
import NavigationBar from './components/NavigationBar'

import ParticleTheme from './components/ParticleTheme'

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Layout>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/pomotech" component={Pomotech} /> 
          <Route path="/airsoft_turret" component={AirsoftTurret} />
          <Route path="/dodecahedron" component={Dodecahedron} />
          <Route path="/donate" component={Donate} />
          <Route component={NoMatch} />

          

        </Switch>
      </Router>
      
      </Layout>
      <ParticleTheme />
    </React.Fragment>
    
  );
}

export default App;

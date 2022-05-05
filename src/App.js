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

import ParticleTheme from './components/ParticleTheme'

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Layout>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={about} />
          <Route path="/pomotech" component={pomotech} />
          <Route path="/airsoft_turret" component={airsoft_turret} />
          <Route path="/dodecahedron" component={dodecahedron} />
          <Route path="/donate" component={donate} />
          <Route component={NoMatch} />

          

        </Switch>
      </Router>
      
      </Layout>
      <ParticleTheme />
    </React.Fragment>
    
  );
}

export default App;

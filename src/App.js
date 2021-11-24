import About from './component/about';
import LandingPage from './component/landingpage';
import Contact from './component/contact';
import Header from './component/header';
import Portfolio from './component/portfolio';

import './component/stylesheet.css'
import './component/mediaQuery.css'

import {Switch, Route, Redirect } from 'react-router-dom' 

const App = () => {
  return (
    <>

    <Header/>
    

      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/portfolio' component={Portfolio}/>
        <Route exact path='/contact' component={Contact}/>
        <Redirect to="/" />
      </Switch>

    </>
  )
}

export default App;

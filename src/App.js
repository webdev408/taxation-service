import { Container } from 'react-bootstrap'
import {Route, Switch} from 'react-router-dom';
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from './components/Home'
import Services from './components/Services'
import SignIn from './components/SignIn';


const App = () => {
  return (
    <>
     <Header />
     <main className='py-3'>
       <Container>
       <Switch>
         <Route exact path="/" component={Home} />
         <Route path="/services" component={Services} />
         <Route path="/login" component={SignIn} />
         </Switch>
       </Container>
    </main>
     <Footer />
    </>
  );
}

export default App;

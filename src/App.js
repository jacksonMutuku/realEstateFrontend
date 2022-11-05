import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import './App.css';
import {connect} from 'react-redux';
import {auth ,createUserProfileDocument} from './firebase/firebase.utils';
import SignUpPage from './pages/sign-in-and-sign-up/sign-up';
import SignInPage from './pages/sign-in-and-sign-up/sign-in';
import passwordResetPage from './pages/sign-in-and-sign-up/password-reset';
import HomePage from './pages/homepage';
import Layout from './components/homepage/Layout';
import Footer from './components/homepage/footer/Footer';
import {setCurrentUser} from './redux/user/user.actions';
import BuyPropertyPage from './pages/ListPropertyPage1';
import Search from './components/homepage/search';
import PropertyDetails from './components/propertyDetails/propertyDetails';
import {Home,properties} from './components/homepage/homepage.component';
import ListPage from './pages/listpage';
import About from './components/homepage/footer/About/About';
import PropertyForSale from './components/propertyDetails/PropertyForSale';
import ListPropertyPage1 from './components/listproperty.component.jsx/addContactComponent';
import PropertyForRentDetails from './components/propertyDetails/PropertyForRent';


class App extends React.Component{
  unsubscribeFromAuth= null;

  componentDidMount(){

    const {setCurrentUser} =this.props;
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>{
         setCurrentUser({
              id:snapShot.id,
            ...snapShot.data()
            
          
            
         });
        //  console.log(this.state)
        });
      
      }

      // this.setState({currentUser:userAuth});

      setCurrentUser(userAuth);
    });

      
      
    
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
          <Layout/>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/search' component={Search}/>
            <Route exact path='/listProperty'  component={ListPage}/>
            <Route exact path='/About' component={About}/>
            {/* <Route exact path='/signup' component={SignUpPage}/> */}
            <Route exact path='/listProperty1' component={ListPropertyPage1}/>
            {/* <Route exact path='/listProperty2' component={ListPropertyPage2}/> */}
            <Route path='/propertyFor-Sale/:id' component={PropertyForSale}/>
            <Route path='/propertyFor-Rent/:id' component={PropertyForRentDetails}/>
            <Route exact path='/signup' render={() => this.props.currentUser ? (<Redirect to='/' />) : ( <SignUpPage /> )}/>
            <Route path='/passwordreset' component={passwordResetPage}/>
            <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : ( <SignInPage /> )}/>
          </Switch>
          <Footer/>
      </div>

    )
  };
}
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);



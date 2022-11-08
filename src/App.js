import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome'
import Message from './components/Message'
import About from './components/About'
import Contact from './components/Contact'
 import First from './components/First'
import Example from './components/Example'
import Revision from'./components/Revision'
import Input from './components/Input'
import StyleDemo from './components/StyleDemo'
import {NewChapter} from './components/NewChapter';
import {Employe} from './components/Employe';
import {Student} from './components/Student'
import MyReducer from './components/MyReducer';
import UseReducerRevision from './components/UseReducerRevision';
import MyRefDemo from './components/MyRefDemo';
import { Form } from './components/Form';
import EffectDemo from './components/EffectDemo';
import MyClassComp from './components/MyClassComp';
import EventBinding from './components/EventBinding';
import NavBar from './components/NavBar';
import ChildComponent from './components/BaseComponent'
import TestUnmount from './components/TestUnmount';
import SubjectName from './components/SubjectName';
import MyErrorBoundry from './components/MyErrorBoundry';

function App() {
  // let myuser={
  //   username:"Manish kumar",
  //   age:12
  // }
  return ( 
    <div className="App">
      <MyErrorBoundry>
        <SubjectName sname="OS" />
      </MyErrorBoundry>
      <MyErrorBoundry>
        <SubjectName sname="Networking" />
      </MyErrorBoundry>
      <MyErrorBoundry>
        <SubjectName sname="ReactJS" />
      </MyErrorBoundry>  
      <MyErrorBoundry>
        {/* <SubjectName sname="Apple" /> */}
        </MyErrorBoundry>
      {/* <TestUnmount /> */}
      {/* <ChildComponent  /> */}
      {/* <BaseComponent userName='React JS' salary={9009.233}/> */}
      {/* <NavBar /> */}
      {/* <EventBinding /> */}
      {/* <MyClassComp user={{username:"Manish kumar Singh",age:12}}/> */}
      {/* <MyClassComp uname='K.L.Sahgal' age={18} /> */}
      {/* <EffectDemo /> */}
      {/* <Form/>
      <MyRefDemo /> */}
     {/* < UseReducerRevision/> */}
      {/* {<MyReducer />} */}
      {/* <Student/>
      <Employe/>
      <NewChapter/>
      <Example />
      <Revision/>
      <StyleDemo/> */}
      {/* <Welcome />
      <Message mymsg="Software Engg" />
      <Message mymsg="Data Analyst"/>
      <Message mymsg="Developer" /> 
      <hr/>
      <About info="This is about page" version="3.1">

      </About>
      <About info="Second information" version="3.2">
        This is my Second Information.
      </About>
      <Contact uname="R.k.Singh" address="Muzaffarpur"/>
      <hr/>
      <First Fname ="abhishek" Lname="Kumar"/>
      <First Fname ="abhishek" Lname="Kumar"/>
      <First add ="muzaffarpur" dist="muzaffarpur"/> */}
      {/* <Input/> */}
    </div>
  );
}

export default App;

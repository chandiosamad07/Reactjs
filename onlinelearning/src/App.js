import './App.css';
import Component from './components/component';
import Profile from './components/Profile';
import Gallery from './components/Gallery';
import { Import } from './components/Import';
import Jsx from './components/Jsx';
import CurlyBraces from './components/CurlyBraces';
import Prop from './components/Prop';
import List from './components/List';
import Event from './components/Event';
import API from './components/API';
import ManagingState from './components/ManagingState';
import APIinti from './components/APIinti';
import Test from './components/Datapassing/Test';
import Counter from './components/Hooks/Counter';
import CDM from './components/LifeCycle/CDM';
import CWU from './components/LifeCycle/CWU';
import CDU from './components/LifeCycle/CDU';
import Counter1 from './components/Hooks1/Counter';
import Timer from './components/Hooks1/Timer';
import TimerStop from './components/Hooks1/TimerStop';
import ThemeButton from './components/Hooks1/ThemeButton';
import ThemeContext from './components/Hooks1/ThemeContext';
import ApiIntegration from './components/Hooks1/ApiIntegration';
import React from 'react';
import ComponentC from './components/Hooks1/Context/ComponentC';
import Nav from './components/Navbar/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Navbar/Home';
import About from './components/Navbar/About';
import Contact from './components/Navbar/Contact';
import SimpleForm from './components/SimpleFrom';
import TODO from './components/TODO';

export const useContext = React.createContext()

function App() {
  return (
  <>

<TODO />
  {/* <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/about' element={<About />} />
    <Route path='/contact' element = {<Contact />} />
  </Routes> */}
{/* 
<SimpleForm /> */}
  {/* <useContext.Provider value={"Abdul"}>
  <ComponentC />
  </useContext.Provider> */}
  {/* <ApiIntegration /> */}
    {/* <ThemeContext.Provider value="dark">
            <ThemeButton />
        </ThemeContext.Provider> */}
  {/* <TimerStop /> */}
  {/* <Timer /> */}
  {/* <Counter1 /> */}
  {/* <CDU /> */}
  {/* <CWU /> */}
  {/* <CDM /> */}
  {/* <Component />
  <Profile /> */}
  {/* <Gallery />
  <Import /> */}
  {/* <Jsx /> */}
  {/* <CurlyBraces /> */}
  {/* <Prop />
  <List />
  <Event /> */}
  {/* <API /> */}
  {/* <Test /> */}
  {/* <ManagingState /> */}
  {/* <Counter /> */}
  </>
  );
}

export default App;

import React from 'react';
//import Name from './components/Name';
//import Beschreibung from './components/Beschreibung'
//import Greeting from './components/Greeting'
import Header from './components/Header';
import Main from './components/Main';
import Aside from './components/Aside';
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
     {/* <Name/>
     <Beschreibung/>
     <Greeting/>*/}
     <Header/>
     <Main/>
     <Aside/> 
     <Footer/>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './parts/Header';
import Main from './parts/Main';
import Navigation from './parts/Navigation';


function App() {
   return (
      <div className="app">
         <Header />
         <Main />
         <Navigation />
      </div>
   );
}

export default App;
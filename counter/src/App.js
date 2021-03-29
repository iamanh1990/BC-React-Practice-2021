import React from 'react';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Counter from './components/counter/counter.component';
import './App.css';

const App = () => (
  <div className='container'>
    <Header />
    <Counter />
    <Footer />
  </div>
);

export default App;

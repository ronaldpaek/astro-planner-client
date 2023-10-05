import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Signup } from '@/components/Signup';
import './App.scss';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Signup />
      </div>
    </>
  );
}
export default App;

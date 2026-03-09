import React from 'react'
import {useState,useCallback} from 'react';
import Loader from '../components/Loader.jsx';
import Navbar from '../components/Navbar.jsx';
const Index = () => {
    const [loading,setLoading] = useState(true);
    const handleLoaderComplete=useCallback(()=> setLoading(false),[]);
    if(loading) return <Loader onComplete={handleLoaderComplete} />;
  return (
    <div>
        <Navbar />
      <h1>Welcome to the portfolio</h1>
    </div>
  )
}

export default Index

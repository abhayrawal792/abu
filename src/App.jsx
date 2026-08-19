import React, { useEffect, useState } from 'react'
import './App.css'
import './LoveLetter.css'
import './BookCanvas.css'
import { createHashRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Layout from './layout/Layout'
import Home from './pages/Home'
import LoveLetter from './pages/LoveLetter'
import Test from './pages/Test'
import OpeningAnimation from './components/OpeningAnimation'

const MyRoute = createHashRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />}></Route>
    <Route path='love-letter' element={<LoveLetter />}></Route>
    <Route path='love-Letter' element={<LoveLetter />}></Route>
    <Route path='test' element={<Test />}></Route>
  </Route>
))

const App = () => {
  // ------------------Cake loader 
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    // Reset to Home page on initial load so the middle page is never skipped on reload
    if (window.location.hash && window.location.hash !== '#/' && window.location.hash !== '#') {
      window.location.hash = '#/';
    }

    // Start animation timers immediately on mount
    const timer1 = setTimeout(() => setAnimateOut(true), 8000);
    const timer2 = setTimeout(() => setShowContent(true), 8200);
    const timer3 = setTimeout(() => setLoading(false), 8600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <>
      {
        loading && <OpeningAnimation animateOut={animateOut}/>
      }
      {
        showContent && <RouterProvider router={MyRoute} />
      }
    </>
  )
}

export default App
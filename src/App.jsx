import React from 'react';
import '../public/styles/App.css'
import RootLayout from './layouts/Rootlayouts';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Porfolio';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Career from './components/Career';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

function App() { 

  const router = createBrowserRouter(

    createRoutesFromElements(

      <Route path='/' element={<RootLayout />}>

        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='blog' element={<Blog />} />
        <Route path='career' element={<Career />} />
        <Route path='contact' element={<Contact />} />

      </Route>

    )

  )

  return (

    <>
    
      <RouterProvider router={router} />
      
    </>

  );

}

export default App;


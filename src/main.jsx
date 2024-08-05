// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { ThemeProvider } from './common/ThemeContext.jsx'
// import { BrowserRouter } from 'react-router-dom'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <ThemeProvider>
//       <App />
//     </ThemeProvider>
//   </BrowserRouter>,
// )
import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import App from './App.jsx'
import  AboutMe  from "./components/AboutMe/AboutMe";
import ContactMe from "./components/ContactMe/ContactMe";
import Projects from "./components/Projects/Projects";
import Resume  from "./components/Resume/Resume";
import './index.css'
import Hero from './components/Hero/Hero.jsx';
// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Hero />,
      },
      {
        path: '/AboutMe',
        element: <AboutMe />,
    },
    {
      path: '/Projects',
      element: <Projects />,
    },
      {
        path: '/Resume',
        element: <Resume />,
      },
      {
        path: '/ContactMe',
        element: <ContactMe />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

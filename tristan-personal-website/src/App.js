// App.js - Main application component
import React, { useState, useEffect } from 'react';
import { router, routes } from './routes.js';
import Header from './components/Header.js';
import HomePage from './components/Home.js';
import AboutPage from './components/About.js';
import CvPage from './components/CV.js';

const App = () => {
  const [currentRoute, setCurrentRoute] = useState('home');
  const [routeParams, setRouteParams] = useState({});
  const [mode, setMode] = useState('light');

  // Component mapping
  const components = {
    HomePage,
    AboutPage,
    CvPage
  };

  useEffect(() => {
    // Initialize router
    router.init();
    setCurrentRoute(router.getCurrentRoute());
    setRouteParams(router.getRouteParams());

    // Listen for route changes
    const handleRouteChange = (newRoute, newParams) => {
      setCurrentRoute(newRoute);
      setRouteParams(newParams || {});
    };

    router.addListener(handleRouteChange);

    // Cleanup listener on unmount
    return () => {
      router.removeListener(handleRouteChange);
    };
  }, []);

  // Get the current component to render
  const getCurrentComponent = () => {
    const route = routes[currentRoute];
    if (route && components[route.component]) {
      const Component = components[route.component];
      // Pass route params as props to the component
      return <Component {...routeParams} />;
    }
    // Fallback to HomePage if route not found
    return <HomePage />;
  };

  return (
    <div className="App" data-theme={mode}>
      <Header currentRoute={currentRoute} mode={mode} setMode={setMode}/>
      
      <main>
        {getCurrentComponent()}
      </main>
      
    <footer className="bg-light-wisteria-100 dark:bg-light-wisteria-900 py-8">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <p className="text-s text-light-wisteria-600 dark:text-light-wisteria-400 font-sans">
          <a href="https://www.linkedin.com/in/tristancoventry/" target="_blank" rel="noopener noreferrer" className="text-light-wisteria-600 dark:text-light-wisteria-400 cursor-pointer hover:text-light-wisteria-400 dark:hover:text-light-wisteria-600 font-bold"> 
            linkedin.com/in/tristancoventry/
          </a>
          
        </p>
        <p className="text-xs text-light-wisteria-600 dark:text-light-wisteria-400 font-sans">
          built by 
          <a href="https://www.linkedin.com/in/lucyfidock/" target="_blank" rel="noopener noreferrer" className="text-light-wisteria-600 dark:text-light-wisteria-400 cursor-pointer hover:text-light-wisteria-400 dark:hover:text-light-wisteria-600 font-bold"> L Fidock </a>
        </p>
      </div>
    </footer>
    </div>
  );
};

export default App;
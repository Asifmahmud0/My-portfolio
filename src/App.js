import logo from './logo.svg';
import './App.css';
import Portfolio from './Components/Home/Home/Portfolio';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PortfolioDetails from './Components/Home/PortFolio/PortfolioDetails';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const router = createBrowserRouter([

  {
    path: '/',
    element: <Portfolio></Portfolio>
  },
  {
    path: '/details/:id',
    element: <PortfolioDetails></PortfolioDetails>,
  }

])

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

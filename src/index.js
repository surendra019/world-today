import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Components/Home';
import Trending from './Components/Trending/Trending';
import reportWebVitals from './reportWebVitals';
import CategoryMarket from './Components/CategoryMarket';



import {
  createBrowserRouter,
  RouterProvider

} from "react-router-dom";
import Category from './Components/Category';


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App/>
    ),
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "new",
        element: <Category sortBy="publishedAt"/>
      },
      {
        path: "search",
        element: <Category/>
      }
      
    ]
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<RouterProvider router={router}/>
  

);

reportWebVitals();

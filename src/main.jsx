import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './header/header.jsx';
import About from './about/about.jsx';
import Contact from './contact/contact.jsx';
import Review from './review/review.jsx';
import ErrorElement from './ErrorElement.jsx';
import Users from './users/Users.jsx';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Posts from './Posts/Posts.jsx';
import ShowDetails from './Showdetails/ShowDetails.jsx';
import UserDetails from './showUserDe/UserDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/review',
        element: <Review></Review>
      },
      {
        path: '/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: '/comments',
        loader: () => fetch('https://jsonplaceholder.typicode.com/comments'),
        element: <Posts></Posts>
      },
      {
        path: '/post/:postId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/comments/${params.postId}`),
        element: <ShowDetails></ShowDetails>
      },
      {
        path: '/user/:userId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

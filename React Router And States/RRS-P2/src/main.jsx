import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import FriendDetails from './component/Friends/FriendDetail/FriendDetails';
import Friends from './component/Friends/Friends';
import Home from './component/Home/Home';
import PostDetails from './component/Posts/PostDetail/PostDetails';
import Posts from './component/Posts/Posts';
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children: [
      {
        path: 'about',
        element: <About/>
      },
      {
        path: 'friends',
        element: <Friends/>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: 'posts',
        element: <Posts/>,
        loader: () => fetch ('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path: 'post/:postId',
        element: <PostDetails/>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
      },
      {
        path: 'friend/:friendId',
        element: <FriendDetails/>,
        loader: ({params}) => fetch (`https://jsonplaceholder.typicode.com/users/${params.friendId}`),
      },
      {
        path: 'contact',
        element: <Contact/>
      },
    ]
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
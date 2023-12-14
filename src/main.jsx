import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Main from './layouts/Main'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/Home/ErrorPage/ErrorPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
        <Main></Main>
    </RouterProvider>
  </React.StrictMode>,
)

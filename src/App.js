import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Teachers from './pages/Techers'
import Home from './pages/Home'
import Classes from './pages/Classes'
import { Fragment } from 'react'
import Root from './pages/Root'
import Blog from './pages/Blog'
import Contacts from './pages/Contacts'
import About from './pages/About'

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root />,
            children: [
                { path: '/', element: <Home /> },
                { path: '/classes', element: <Classes /> },
                { path: '/teachers', element: <Teachers /> },
                { path: '/blog', element: <Blog /> },
                { path: '/contacts', element: <Contacts /> },
                { path: '/about', element: <About /> },
            ],
        },
    ])
    return (
        <>
            <Fragment>
                <RouterProvider router={router} />
            </Fragment>
        </>
    )
}

export default App

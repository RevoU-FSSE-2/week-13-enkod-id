import AppProvider from './Provider/AppProvider'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home, Product, Profile, ProductDetail, ProductEdit, ProductNew, Login, Register, Category } from './pages'
import { PublicLayout, AnotherLayout } from './layouts'
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

function App() {

  const router = createBrowserRouter([
    {
      element: <PublicLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/product',
          element: <Product />
        },
        {
          path: '/product/:id',
          element: <ProductDetail />
        },
        {
          path: '/product/new',
          element: <ProductNew />
        },
        {
          path: '/product/edit/:id',
          element: <ProductEdit />
        },
        {
          path: '/category',
          element: <Category />
        },

        {
          path: '/profile',
          element: <Profile />
        }
      ]
    },
    {
      element: <AnotherLayout />,
      children: [
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
        }
      ]
    }
  ])

  return (
    // cara lama tapi masih di pakai
    // <BrowserRouter>
    //   <AppProvider>
    //     <Routes>
    //       <Route element={<PublicLayout />}>
    //         <Route path={'/'} element={<Home />}/>
    //         <Route path={'/product'} element={<Product />} />
    //         <Route path={'/profile'} element={<Profile />} />
    //       </Route>
    //     </Routes>
    //   </AppProvider>
    // </BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <RouterProvider router={router}/>
      </AppProvider>
    </QueryClientProvider>
  )
}

export default App

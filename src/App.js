import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/Home';
import Transfer from './pages/Transfer';

const router = createBrowserRouter([
  { 
    path: "/",
    errorElement: <ErrorPage />,
    element: <HomePage />
  },
  { 
    path: "/transfer/:merchant_id",
    errorElement: <ErrorPage />,
    element: <Transfer />
  }
])
function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;

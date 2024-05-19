import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/Home';

const router = createBrowserRouter([
  { 
    path: "/",
    errorElement: <ErrorPage />,
    element: <HomePage />
  }
])
function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;

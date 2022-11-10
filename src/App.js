import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Routes';

function App() {
  return (
    <div className="App bg-black text-black">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;

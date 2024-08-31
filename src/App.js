import './App.css';
import { NextUIProvider } from '@nextui-org/react';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <NextUIProvider>
   <Layout />
      </NextUIProvider>
    </div>
  );
}

export default App;

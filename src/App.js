import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;

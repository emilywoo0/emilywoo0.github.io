import './App.css';
import LandingPage from './components/LandingPage';
import ResponsiveAppBar from './appBar';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <LandingPage/>
    </div>
  );
}

export default App;

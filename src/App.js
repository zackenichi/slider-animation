import './App.css';
import CampaignSettings from './CampaignSettings';

function App() {
  // This can be based on the user DB call where we can only load the
  // slider animation for first time users
  // and disable this once it has been shown
  // by updating db

  const firstDemo = true;

  return (
    <div className="App">
      <CampaignSettings demo={firstDemo} />
    </div>
  );
}

export default App;

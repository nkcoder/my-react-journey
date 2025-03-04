import './App.css';
import UserProfile from './components/context/exercise/UserProfile';
import { UserProvider } from './components/context/exercise/UserProvider';
import UserUpdater from './components/context/exercise/UserUpdater';

function App() {
  return (
    <>
      <UserProvider>
        <UserProfile />
        <UserUpdater />
      </UserProvider>
    </>
  );
}

export default App;

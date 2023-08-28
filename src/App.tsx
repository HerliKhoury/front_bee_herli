import { UserProvider } from './Providers/userContext/user.context';
import { AppRoutes } from './Routes/App.routes';

function App() {
  return (
    <div>
      <UserProvider>
        <AppRoutes/>
      </UserProvider>
    </div>
  );
}

export default App;

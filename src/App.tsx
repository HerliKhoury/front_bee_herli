import { PropertyProvider } from './Providers/propertyContext/property.context';
import { UserProvider } from './Providers/userContext/user.context';
import { AppRoutes } from './Routes/App.routes';

function App() {
  return (
    <div>
      <UserProvider>
        <PropertyProvider>
          <AppRoutes/>
        </PropertyProvider>
      </UserProvider>
    </div>
  );
}

export default App;

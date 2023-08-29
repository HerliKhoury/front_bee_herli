import { PropertyProvider } from './Providers/propertyContext/property.context';
import { UserProvider } from './Providers/userContext/user.context';
import { AppRoutes } from './Routes/App.routes';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./global.style.css";
import "./Components/Forms/forms.style.css";
import "./Pages/pages.style.css";

function App() {
  return (
    <div>
      <UserProvider>
        <PropertyProvider>
          <AppRoutes/>
          <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
        </PropertyProvider>
      </UserProvider>
    </div>
  );
}

export default App;

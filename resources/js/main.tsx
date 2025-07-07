import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { storeApp } from './Redux/StoreApp';
import LoadingLayOut from './Components/LoadingLayOut';
import Notification from './Components/Notification';
import { RegisterAndLoginProvider } from './RegisterAndLoginContext';
import { HomeContextProvider } from './HomeContext';
import RegisterAndLogin from './Pages/RegisterAndLogin'; // Import your actual auth component
import Home from './Pages/Home'; // Import your actual home component

// Create main App component
function App() {
  return (
    <BrowserRouter>
      {/* Global components */}
      <LoadingLayOut />
      <Notification />

      <Routes>
        {/* Auth routes wrapped in RegisterAndLoginProvider */}
        <Route
          path="/register"
          element={
            <RegisterAndLoginProvider>
              <RegisterAndLogin />
            </RegisterAndLoginProvider>
          }
        />

        {/* All other routes wrapped in HomeContextProvider */}
        <Route
          path="/*"
          element={
            <HomeContextProvider>
              <Home />
            </HomeContextProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

// Render the application
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <Provider store={storeApp}>
      <App />
    </Provider>
  );
}
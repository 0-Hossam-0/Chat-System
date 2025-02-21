import React from 'react';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { storeApp } from './Redux/StoreApp';
import LoadingLayOut from './Components/LoadingLayOut';
import Notification from './Components/Notification';
import { RegisterAndLoginProvider } from './RegisterAndLoginContext';
import { HomeContextProvider } from './HomeContext';

createInertiaApp({
  resolve: (name) => {
    const pages = import.meta.glob('./Pages/**/*.tsx', { eager: true });
    return pages[`./Pages/${name}.tsx`].default;
  },
  setup({ el, App, props }) {
    const pageName = props.initialPage.component;
    const Component = () => {
      if (pageName === 'RegisterAndLogin') {
        return (
          <RegisterAndLoginProvider>
            <App {...props} />
          </RegisterAndLoginProvider>
        );
      } else {
        return (
          <HomeContextProvider>
            <App {...props} />
          </HomeContextProvider>
        );
      }
    };
    createRoot(el).render(
      <Provider store={storeApp}>
        <LoadingLayOut />
        <Notification />
        <Component />
      </Provider>
    );
  },
});

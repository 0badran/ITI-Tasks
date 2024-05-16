import "@components/styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import MyNavbar from "@components/components/MyNavbar";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@components/redux/store";
import Footer from '@components/components/Footer';

export default function App({ Component, pageProps }) {


  return <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider>
        <MyNavbar />
        <div className="mx-auto max-w-screen-xl px-4 py-2">
          <Component {...pageProps} />
        </div>
        <Footer />
      </ThemeProvider>
    </PersistGate>
  </Provider>
}

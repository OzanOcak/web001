"use client";
import { ThemeProvider } from "next-themes";
//import { Provider } from "react-redux";
//import store from "../redux/store";

function Providers({ children }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {/* <Provider store={store}>*/}
      {children}
      {/*</Provider>*/}
    </ThemeProvider>
  );
}

export default Providers;

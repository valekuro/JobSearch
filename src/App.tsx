import React, { useState } from "react";
import Theme from "./components/Theme";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./App.css";
import PageLayout from "./pages/pageLayout";

function App() {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <Theme>
      <Provider store={store}>
        <PageLayout toggle={toggle} setToggle={setToggle} />
      </Provider>
    </Theme>
  );
}

export default App;

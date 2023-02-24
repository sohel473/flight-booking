import Header from "./Components/Header/Header";
import "./App.css";
import Inputs from "./Components/Inputs/Inputs";
import Flights from "./Components/Flights/Flights";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <section>
          <Inputs />
          <Flights />
        </section>
      </Provider>
    </div>
  );
}

export default App;

import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;

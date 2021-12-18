import { BrowserRouter } from "react-router-dom";
import { Providers } from "./providers";
import { Router } from "./routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Providers>
          <Router />
        </Providers>
      </BrowserRouter>
    </>
  );
}

export default App;

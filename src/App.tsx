import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/header/Header";
import { ResultPage } from "./pages/ResultPage/ResultPage";
import { ResultListProvider } from "./Provider/ResulListContext";
import "./styles/index.css";

export const App = () => {
  return (
    <>
      <Header name="Compass" />
      <ResultListProvider>
        <ResultPage />
      </ResultListProvider>

      <Footer />
    </>
  );
};

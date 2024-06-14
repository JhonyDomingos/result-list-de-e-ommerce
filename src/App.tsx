import { Header } from "./components/header/Header";
import { ShopSection } from "./components/ShopSection/ShopSection";
import { ResultPage } from "./pages/ResultPage/ResultPage";
import "./styles/index.css";

export const App = () => {
  return (
    <>
      <Header name="Compass" />
      <ShopSection />
      <ResultPage />
    </>
  );
};

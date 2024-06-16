import { CustomerAssurances } from "../../components/CustomerAssurances/CustomerAssurances";
import { ResultList } from "../../components/ResultList/ResultList";
import { ShopSection } from "../../components/ShopSection/ShopSection";

export const ResultPage = () => {
  return (
    <div className="container">
      <main>
        <ShopSection />
        <ResultList />
        <CustomerAssurances />
      </main>
    </div>
  );
};

import { Content } from "../Content";
import { Header } from "../Header";

export const Inner = () => {
  return (
    <>
      <Header />
      <div className="px-4 pb-6 lg:px-6">
        <Content />
      </div>
    </>
  );
};

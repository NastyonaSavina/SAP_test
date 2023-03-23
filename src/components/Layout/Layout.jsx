import { Header } from "components/Header/Header";


export const Layout = ({ children }) => {
  return (
    <>
        <Header />
        <main
          className=""
          style={{ minHeight: '100vh' }}>
          <div className="tab-pane fade show active">{children}</div>
        </main>


    </>
  );
};
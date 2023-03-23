import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout";


const HomePage = lazy(() => import('../pages/HomePage/HomePage'));




export const App = () => {
  return (
    <>
      <Layout >
        <Suspense fallback={<p>Loading...</p>}>

          <Routes>
            <Route path="" element={<HomePage />} />

          </Routes>
        </Suspense> 
      </Layout >

    </>
  );
};

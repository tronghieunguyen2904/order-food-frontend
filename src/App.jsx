import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./router";
import DefaultLayout from "./Layout/DefaultLayout";
function App() {


  return (
    <>
      <Router>
      <div className="App">
        <Routes>
          {routes.map((route, index) => {
            const Layout = route.Layout || DefaultLayout;
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App

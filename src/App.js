import "./App.css";
import React,{ useState }  from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

function App() {
  let pageSize = 12;
  const [progress, setProgress] = useState(0);
  let apiKey = process.env.REACT_APP_NEWS_API;
  return (
    <>
      <div className="bg-dark bg-gradient">
        <Router>
          <Navbar />
          <LoadingBar
            color="#f11946"
            progress={progress}
            onLoaderFinished={() => setProgress(progress)}
          />
          <Routes>
            <Route
              path="/"
              element={
                <News
                  setProgress={setProgress}
                  key={"home"}
                  country={"in"}
                  category={"general"}
                  pageSize={pageSize}
                  apiKey={apiKey}
                />
              }
            />
            <Route
              path="/home"
              element={
                <News
                  setProgress={setProgress}
                  key={"general"}
                  country={"in"}
                  category={"general"}
                  pageSize={pageSize}
                  apiKey={apiKey}
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  setProgress={setProgress}
                  key={"entertainment"}
                  country={"in"}
                  category={"entertainment"}
                  pageSize={pageSize}
                  apiKey={apiKey}
                />
              }
            />
            <Route
              path="/business"
              element={
                <News
                  setProgress={setProgress}
                  key={"business"}
                  country={"in"}
                  category={"business"}
                  pageSize={pageSize}
                  apiKey={apiKey}
                />
              }
            />
            <Route
              path="/health"
              element={
                <News
                  setProgress={setProgress}
                  key={"health"}
                  country={"in"}
                  category={"health"}
                  pageSize={pageSize}
                  apiKey={apiKey}
                />
              }
            />
            <Route
              path="/science"
              element={
                <News
                  setProgress={setProgress}
                  key={"science"}
                  country={"in"}
                  category={"science"}
                  pageSize={pageSize}
                  apiKey={apiKey}
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News
                  setProgress={setProgress}
                  key={"sports"}
                  country={"in"}
                  category={"sports"}
                  pageSize={pageSize}
                  apiKey={apiKey}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

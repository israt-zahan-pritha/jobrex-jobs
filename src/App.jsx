import { ThemeProvider } from "./components/theme-provider";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import AllJobs from "./pages/AllJobs";
import Header from "./layouts/Header";
import MyJobs from "./pages/MyJobs";
import JobDetails from "./pages/JobDetails";
import Onboard from "./pages/Onboard";
import Root from "./layouts/Root";
import Footer from "./layouts/Footer";
import PostJob from "./pages/PostJob";
import AuthenticatedRoute from "./components/AuthenticatedRoute";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Root />}>
              <Route index element={<Home />} />
            </Route>

            {/* Separate routes */}
            <Route path="/about" element={<About />} />
            <Route
              path="/jobs"
              element={<AuthenticatedRoute element={<AllJobs />} />}
            />
            <Route
              path="/my-jobs"
              element={<AuthenticatedRoute element={<MyJobs />} />}
            />
            <Route
              path="/job/:id"
              element={<AuthenticatedRoute element={<JobDetails />} />}
            />
            <Route path="/onboard" element={<Onboard />} />
            <Route
              path="/post-job"
              element={<AuthenticatedRoute element={<PostJob />} />}
            />
            <Route
              path="*"
              element={
                <div className="text-5xl text-center">404 Not Found</div>
              }
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;

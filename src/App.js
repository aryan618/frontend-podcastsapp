import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import Signup from "./components/Signup";
import PodcastsTable from "./components/PodcastsTable";
import SearchBar from "./components/SearchBar";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/podcasts" element={<PodcastsTable />} />
        <Route path="/SearchBar" element={<SearchBar />} />
      </Routes>
    </Router>
  );
}

export default App;

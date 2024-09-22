import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./pages/Header/Header";
import Dashboard from "./pages/dashboard/Dashboard";
import PostUser from "./pages/employee/PostUser";
import NoMatch from "./pages/noMatch/NoMatch";
import Updateuser from "./pages/employee/UpdateUser";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/employee" element={<PostUser />}></Route>
        <Route path="/employee/:id" element={<Updateuser />}></Route>
        <Route path="/*" element={<NoMatch />}></Route>
      </Routes>
    </>
  );
}

export default App;

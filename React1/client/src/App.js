import Navbar from "./Components/Navbar";
import "./app.css";
import Home from "./Pages/Home";
import Post from "./Pages/Post";
import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
const App = () => {
    const user = true;
    return (
        <BrowserRouter>
        <div>
            <Navbar user={user}/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={user ? <Navigate to="/"/> : <Login />} />
                <Route path="/post/:id" element={user ? < Post /> : <Navigate to="/login"/>} />
                
            </Routes>
        </div>
        </BrowserRouter>
    );

};

export default App;
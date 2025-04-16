import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostsList from "./pages/PostList";
import AddPost from "./pages/AddPost";
import PostDetail from "./pages/PostDetail"; 
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";



function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <PostsList />
            </PrivateRoute>
          }
        />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
                <Route
          path="/add"
          element={
            <PrivateRoute>
              <AddPost />
            </PrivateRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;

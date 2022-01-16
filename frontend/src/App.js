import "./App.css";
import { Routes, Route } from "react-router-dom";
import UserLoginPage from "./features/userFeatures/UserLoginPage";
import UserRegistrationPage from "./features/userFeatures/UserRegistrationPage";
import UserDirectoryPage from "./features/userFeatures/UserDirectoryPage";
import UserProfilePage from "./features/userFeatures/UserProfilePage";
import { UserProfileEditPage } from "./features/userFeatures/UserProfileEditPage";
import Layout from "./layoutcomponents/Layout";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Layout title="bang" />}>
        <Route index element={<UserLoginPage title="Log In" />} />
        <Route path="users" element={<UserDirectoryPage />} />
        <Route path="login" element={<UserLoginPage />} />
        <Route path="register" element={<UserRegistrationPage />} />
        <Route path="users/editprofile" element={<UserProfileEditPage />} />
        <Route path="users/myprofile" element={<UserProfilePage />} />{" "}
      </Route>
    </Routes>
  );
}

export default App;

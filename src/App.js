import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import MainContainer from "./components/MainContainer";
import Welcome from "./components/Welcome";
import ChatArea from "./components/ChatArea";
import Users from "./components/Users";
import CreateGroups from "./components/CreateGroups";
import Groups from "./components/Groups";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lightTheme = useSelector((state) => {
    return state.themeKey;
  });
  return (
    <div className={"App" + (lightTheme ? "" : " dark-outermost")}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="app" element={<MainContainer />}>
          <Route path="welcome" element={<Welcome />} />
          <Route path="chat" element={<ChatArea />} />
          <Route path="users" element={<Users />} />
          <Route path="groups" element={<Groups />} />
          <Route path="create-groups" element={<CreateGroups />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

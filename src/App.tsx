import "./index.scss";
import { Header } from "./views/components/header/Header";
import { AppRoutes } from "./routes/AppRoutes";
import i18n from "i18next";

function App() {
  const savedLang = localStorage.getItem("language") || "en";
  i18n.changeLanguage(savedLang);

  return (
    <div className='App'>
      <Header />
      <AppRoutes />
    </div>
  );
}
export default App;

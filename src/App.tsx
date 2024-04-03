import "./App.scss";
import { Header } from "./views/components/header/Header";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return (
    <div className='App'>
      <Header />
      <AppRoutes />
    </div>
  );
}
export default App;

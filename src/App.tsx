import "./App.scss";
import { Header } from "./components/Header";
import { AppRoutes } from "./routes/AppRoutes";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className='App'>
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}
export default App;

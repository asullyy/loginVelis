import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import VoltarAoLogin from "./pages/VoltarAoLogin";
import RecuperaoSenha from "./pages/RecuperaoSenha";
import TelaLoginErro from "./pages/TelaLoginErro";
import TelaLogin from "./pages/TelaLogin";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/recuperaosenha":
        title = "";
        metaDescription = "";
        break;
      case "/telaloginerro":
        title = "";
        metaDescription = "";
        break;
      case "/telalogin":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<VoltarAoLogin />} />
      <Route path="/recuperaosenha" element={<RecuperaoSenha />} />
      <Route path="/telaloginerro" element={<TelaLoginErro />} />
      <Route path="/telalogin" element={<TelaLogin />} />
    </Routes>
  );
}
export default App;

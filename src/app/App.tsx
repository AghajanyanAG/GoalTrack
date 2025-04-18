import { ThemeProvider } from "@theme-ui/core";
import { theme } from "../shared/ui/theme";
import Home from "../pages/Home";
import Header from "../shared/components/Header";
import Footer from "../shared/components/Footer";
import MobileNav from "../shared/components/MobileNav";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Home />
      <Footer />
      <MobileNav />
    </ThemeProvider>
  );
};

export default App;

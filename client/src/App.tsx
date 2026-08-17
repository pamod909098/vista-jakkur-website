import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Sustainability from "./pages/Sustainability";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Disclaimer from "./pages/Disclaimer";
import CookiePolicy from "./pages/CookiePolicy";
import SustainabilityPolicy from "./pages/SustainabilityPolicy";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path={"/"}>
        <Layout><Home /></Layout>
      </Route>
      <Route path={"/about"}>
        <Layout><About /></Layout>
      </Route>
      <Route path={"/services"}>
        <Layout><Services /></Layout>
      </Route>
      <Route path={"/projects"}>
        <Layout><Projects /></Layout>
      </Route>
      <Route path={"/sustainability"}>
        <Layout><Sustainability /></Layout>
      </Route>
      <Route path={"/sustainability-policy"}>
        <Layout><SustainabilityPolicy /></Layout>
      </Route>
      <Route path={"/blog"}>
        <Layout><Blog /></Layout>
      </Route>
      <Route path={"/careers"}>
        <Layout><Careers /></Layout>
      </Route>
      <Route path={"/faq"}>
        <Layout><Faq /></Layout>
      </Route>
      <Route path={"/contact"}>
        <Layout><Contact /></Layout>
      </Route>
      <Route path={"/privacy-policy"}>
        <Layout><PrivacyPolicy /></Layout>
      </Route>
      <Route path={"/terms"}>
        <Layout><Terms /></Layout>
      </Route>
      <Route path={"/disclaimer"}>
        <Layout><Disclaimer /></Layout>
      </Route>
      <Route path={"/cookie-policy"}>
        <Layout><CookiePolicy /></Layout>
      </Route>
      <Route path={"/404"}>
        <Layout><NotFound /></Layout>
      </Route>
      <Route>
        <Layout><NotFound /></Layout>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <ScrollToTop />
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

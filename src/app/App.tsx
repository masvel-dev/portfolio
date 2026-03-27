import { Toaster } from "react-hot-toast";

import { Header, Footer } from "@/widgets";
import { HomePage } from "@/pages/home/ui/HomePage";
// import { PreloaderProvider } from "./providers/PreloaderProvider";

export default function App() {
  return (
    // <PreloaderProvider>
      <div className="relative flex flex-col bg-bg text-primary transition-colors duration-300">
        <Toaster position="top-center" reverseOrder={false} />

        <Header />

        <HomePage />

        <Footer />
      </div>
    // </PreloaderProvider>
  );
}
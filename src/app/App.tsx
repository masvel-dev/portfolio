import { Toaster } from 'react-hot-toast';

import { Header, Footer, Hero, About, Tech, Experience, Projects, Contact } from "@/widgets";

export default function App() {
  return (
    <div className="relative flex flex-col bg-bg text-primary transition-colors duration-300">
      <Toaster position="top-center" reverseOrder={false} />

      <Header />

      <main className="flex-1">
        <Hero />
        <About />
        <Tech />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
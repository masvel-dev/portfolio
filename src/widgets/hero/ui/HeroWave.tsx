export function HeroWave() {
  return (
    <div className="absolute bottom-0 left-0 w-full">
      <svg className="relative block w-full h-[60px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,50 C150,20 300,80 450,60 C600,40 750,100 900,80 C1050,60 1200,100 1200,100L1200,120L0,120Z"
          className="fill-[var(--bg)] transition-colors duration-300"></path>
      </svg>
    </div>
  );
}
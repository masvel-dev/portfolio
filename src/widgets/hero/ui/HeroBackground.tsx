export function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0 transition-opacity duration-300 bg-cover bg-center bg-no-repeat bg-hero-light dark:opacity-0" />
      <div className="absolute inset-0 transition-opacity duration-300 bg-cover bg-center bg-no-repeat bg-hero-dark opacity-0 dark:opacity-100" />
    </>
  );
}
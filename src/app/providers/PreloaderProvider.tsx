import { useEffect, useState } from "react";

import { Preloader } from "@/shared/ui/Preloader/Preloader";

export const PreloaderProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isFinished, setIsFinished] = useState(false);
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsAppReady(true), 800);

    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {!isFinished && (
        <Preloader
          isReady={isAppReady}
          onFinish={() => setIsFinished(true)}
        />
      )}
      {children}
    </>
  );
};
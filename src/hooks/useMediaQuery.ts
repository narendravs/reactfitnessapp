import { useEffect, useState } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listner = () => setMatches(media.matches);
    window.addEventListener("resize", listner);
    return () => window.removeEventListener("resize", listner);
  }, [matches, query]);
  return matches;
};

export default useMediaQuery;

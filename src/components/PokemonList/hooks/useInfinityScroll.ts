import { useEffect } from "react";

const useInfiniteScroll = (callback: () => void, hasNextPage: boolean) => {
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
          document.documentElement.offsetHeight &&
        hasNextPage
      ) {
        callback();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [callback, hasNextPage]);
};

export default useInfiniteScroll;

import { useEffect, useState } from "react";

export function useScrollSpy(ids, offset = 120) {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY + offset;

      let current = ids[0];

      ids.forEach((id) => {
        const section = document.getElementById(id);

        if (!section) return;

        if (scrollPosition >= section.offsetTop) {
          current = id;
        }
      });

      setActiveId(current);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [ids, offset]);

  return activeId;
}
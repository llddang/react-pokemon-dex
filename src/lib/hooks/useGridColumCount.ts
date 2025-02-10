import { useEffect, useRef, useState } from "react";

export function useGridColumnCount() {
  const [columnCount, setColumnCount] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const observer = new ResizeObserver(() => {
      if (!gridRef.current) return;

      const computedStyle = window.getComputedStyle(gridRef.current);
      const columns = computedStyle
        .getPropertyValue("grid-template-columns")
        .split(" ").length;
      setColumnCount(columns);
    });

    observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, [gridRef]);

  return { gridRef, columnCount };
}

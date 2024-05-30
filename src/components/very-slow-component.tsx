import React, { useEffect } from "react";

export const wait = (ms: number) => {
  const start = Date.now();
  let now = start;

  while (now - start < ms) now = Date.now();
};

export const VerySlowComponent = (_: any) => {
  wait(300);
  useEffect(() => {
    console.log("re-render slow component");
  });

  return <div className="text-base my-4">Slow component</div>;
};

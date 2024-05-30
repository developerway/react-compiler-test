import { useEffect } from "react";

export const useLogOnReRender = (name: string) => {
  useEffect(() => {
    console.info(`Component ${name} re-rendered`);
  });
};

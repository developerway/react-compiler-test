"use client";

import React, {
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { VerySlowComponent, wait } from "@/components/very-slow-component";
import { Button } from "@/components/button";

const Dialog = () => {
  return (
    <div className="p-4 my-8 bg-amber-100">
      Imagine that this is a dialog 😉
    </div>
  );
};

const VerySlowComponentMemo = React.memo(VerySlowComponent);

export const SimpleCase1 = () => {
  "use no memo";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h3 className="text-3xl my-4">Simple case: example 1</h3>
      <p className="text-lg my-4">
        Click the button, the dialog will show up with a delay. Slow component
        re-render will be visible in the console.
      </p>
      <Button onClick={() => setIsOpen(!isOpen)}>toggle dialog</Button>
      {isOpen && <Dialog />}
      <VerySlowComponent />
    </>
  );
};

export const SimpleCase1Memo = () => {
  "use no memo";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h3 className="text-3xl my-4">
        Simple case: example 1 (Memoized manually)
      </h3>
      <p className="text-lg my-4">
        Click the button, the dialog will show up <b>without</b> the delay. Slow
        component re-render will <b>not</b> be visible in the console.
      </p>
      <Button onClick={() => setIsOpen(!isOpen)}>toggle dialog</Button>
      {isOpen && <Dialog />}
      <VerySlowComponentMemo />
    </>
  );
};

export const SimpleCaseWithCompiler = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h3 className="text-3xl my-4">Simple case: example 1 (with Compiler)</h3>
      <p className="text-lg my-4">
        Click the button, the dialog will show up <b>without</b> the delay. Slow
        component re-render will <b>not</b> be visible in the console.
      </p>
      <Button onClick={() => setIsOpen(!isOpen)}>toggle dialog</Button>
      {isOpen && <Dialog />}
      <VerySlowComponent />
    </>
  );
};

export const SimpleCase2 = () => {
  "use no memo";
  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = () => {};
  const data = [{ id: "bla" }];

  return (
    <>
      <h3 className="text-3xl my-4">Simple case: example 2</h3>
      <p className="text-lg my-4">
        Click the button, the dialog will show up with a delay. Slow component
        re-render will be visible in the console.
      </p>
      <Button onClick={() => setIsOpen(!isOpen)}>toggle dialog</Button>
      {isOpen && <Dialog />}
      <VerySlowComponent onSubmit={onSubmit} data={data} />
    </>
  );
};

export const SimpleCase2Memo = () => {
  "use no memo";
  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = useCallback(() => {}, []);
  const data = useMemo(() => [{ id: "bla" }], []);

  return (
    <>
      <h3 className="text-3xl my-4">
        Simple case: example 2 (Memoized manually)
      </h3>
      <p className="text-lg my-4">
        Click the button, the dialog will show up <b>without</b> the delay. Slow
        component re-render will <b>not</b> be visible in the console.
      </p>
      <Button onClick={() => setIsOpen(!isOpen)}>toggle dialog</Button>
      {isOpen && <Dialog />}
      <VerySlowComponentMemo onSubmit={onSubmit} data={data} />
    </>
  );
};

export const SimpleCase2WithCompiler = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = () => {};
  const data = [{ id: "bla" }];

  return (
    <>
      <h3 className="text-3xl my-4">Simple case: example 2 (with Compiler)</h3>
      <p className="text-lg my-4">
        Click the button, the dialog will show up <b>without</b> the delay. Slow
        component re-render will <b>not</b> be visible in the console.
      </p>
      <Button onClick={() => setIsOpen(!isOpen)}>toggle dialog</Button>
      {isOpen && <Dialog />}
      <VerySlowComponent onSubmit={onSubmit} data={data} />
    </>
  );
};

const SomeOtherComponent = () => <div>Some other component</div>;
export const SimpleCase3 = () => {
  "use no memo";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h3 className="text-3xl my-4">Simple case: example 3</h3>
      <p className="text-lg my-4">
        Click the button, the dialog will show up with a delay. Slow component
        re-render will be visible in the console.
      </p>
      <Button onClick={() => setIsOpen(!isOpen)}>toggle dialog</Button>
      {isOpen && <Dialog />}
      <VerySlowComponent>
        <SomeOtherComponent />
      </VerySlowComponent>
    </>
  );
};

export const SimpleCase3Memo = () => {
  "use no memo";
  const [isOpen, setIsOpen] = useState(false);

  const child = useMemo(() => <SomeOtherComponent />, []);

  return (
    <>
      <h3 className="text-3xl my-4">
        Simple case: example 3 (Memoized manually)
      </h3>
      <p className="text-lg my-4">
        Click the button, the dialog will show up <b>without</b> the delay. Slow
        component re-render will <b>not</b> be visible in the console.
      </p>
      <Button onClick={() => setIsOpen(!isOpen)}>toggle dialog</Button>
      {isOpen && <Dialog />}
      <VerySlowComponentMemo>{child}</VerySlowComponentMemo>
    </>
  );
};

export const SimpleCase3WithCompiler = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h3 className="text-3xl my-4">Simple case: example 3 (with Compiler)</h3>
      <p className="text-lg my-4">
        Click the button, the dialog will show up <b>without</b> the delay. Slow
        component re-render will <b>not</b> be visible in the console.
      </p>
      <Button onClick={() => setIsOpen(!isOpen)}>toggle dialog</Button>
      {isOpen && <Dialog />}
      <VerySlowComponent>
        <SomeOtherComponent />
      </VerySlowComponent>
    </>
  );
};

import {
  SimpleCase1,
  SimpleCase1Memo,
  SimpleCase2,
  SimpleCase2Memo,
  SimpleCase2WithCompiler,
  SimpleCase3,
  SimpleCase3Memo,
  SimpleCase3WithCompiler,
  SimpleCaseWithCompiler,
} from "@/components/simple-cases";
import { ReactElement } from "react";

const Panel = ({ children }: { children: ReactElement }) => {
  return (
    <div className="border-2 border-gray-300 p-2 bg-gray-100 my-4">
      {children}
    </div>
  );
};
export default async function Page() {
  return (
    <div
      className="py-8 gap-16 max-w-[80rem] mx-auto"
      style={{ fontFamily: "var(--font-geist-sans)" }}
    >
      <Panel>
        <SimpleCase1 />
      </Panel>
      <Panel>
        <SimpleCase1Memo />
      </Panel>
      <Panel>
        <SimpleCaseWithCompiler />
      </Panel>
      <Panel>
        <SimpleCase2 />
      </Panel>
      <Panel>
        <SimpleCase2Memo />
      </Panel>
      <Panel>
        <SimpleCase2WithCompiler />
      </Panel>
      <Panel>
        <SimpleCase3 />
      </Panel>
      <Panel>
        <SimpleCase3Memo />
      </Panel>
      <Panel>
        <SimpleCase3WithCompiler />
      </Panel>
    </div>
  );
}

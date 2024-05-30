import { CountriesBroken } from "@/components/countries-broken";
import Link from "next/link";

export default async function Page() {
  return (
    <div
      className="min-h-screen py-8 gap-16 max-w-[80rem] mx-auto"
      style={{ fontFamily: "var(--font-geist-sans)" }}
    >
      <h1 className="text-3xl my-10">
        Code examples to test out the React Compiler
      </h1>
      <ul>
        <li>
          <Link href="/simple-cases" className="hover:underline">
            Go to: Simple examples (will be very slow on initial load)
          </Link>
        </li>
        <li>
          <Link href="/countries-broken" className="hover:underline">
            Go to: Countries app, broken
          </Link>
        </li>
        <li>
          <Link href="/countries-fixed" className="hover:underline">
            Go to: Countries app, fixed
          </Link>
        </li>
      </ul>
    </div>
  );
}

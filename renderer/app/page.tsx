import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <React.Fragment>
      <div className="grid grid-col-1 text-2xl w-full text-center">
        <div>
          <Image
            className="ml-auto mr-auto"
            src="/images/logo.png"
            alt="Logo image"
            width={256}
            height={256}
          />
        </div>
        <span>⚡ Electron ⚡</span>
        <span> +</span>
        <span> Next.js</span>
        <span> +</span>
        <span> tailwindcss</span>
      </div>
      <div className="mt-1 w-full flex-wrap flex justify-center">
        <Link href="/next">Go to next page</Link>
      </div>
    </React.Fragment>
  );
}

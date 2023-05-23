import Head from 'next/head';
import InputForm from '../components/InputForm';
import { useState } from 'react';

export default function Home() {
  const [SIN, setSIN] = useState<string>('');

  return (
    <div>
      <Head>
        <title>SIN validator</title>
        <meta name="SIN validator" content="Check if a SIN number is valid" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-hero-bg h-screen w-full bg-cover flex items-center flex-col justify-center">
        <h1 className="text-3xl md:text-5xl tracking-wide font-titleFont">
          SIN Validator
        </h1>
        <InputForm SIN={SIN} setSIN={setSIN} />
      </main>
    </div>
  );
}

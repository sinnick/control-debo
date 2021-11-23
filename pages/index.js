import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  function llamarAPI(){

  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <Head>
        <title>Control DEBO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center bg-light-blue">
        <h1 className="text-8xl font-bold">
          Control{' '}
          <strong className="text-white font-bold0" >
            DEBO
          </strong>
        </h1>

        <p className="mt-6 text-2xl">
          Consultar estado en {' '}
          <Link  href="/api/clientes">
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md hover:cursor-pointer">
            /api/clientes
          </code>
          </Link>
        </p>

       
      </main>

      {/* <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer> */}
    </div>
  )
}

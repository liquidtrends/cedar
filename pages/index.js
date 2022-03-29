import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cedar Brush</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section className="text-white bg-slate-900 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl text-3xl font-extrabold leading-9 text-center title-font text-white mb-4">ONE SOLUTION. ONE PROVIDER. <br />ALL OF YOUR FACILITY MAINTENANCE NEEDS.</h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Some of the services we offer include the following but not limited to:</p>
            </div>

            <div className="flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1">
              <div className="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-1 md:px-1 md:w-1/3 lg:my-1 lg:px-1 lg:w-1/3 xl:my-1 xl:px-1 xl:w-1/3">
              </div>
              <div className="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-1 md:px-1 md:w-1/3 lg:my-1 lg:px-1 lg:w-1/3 xl:my-1 xl:px-1 xl:w-1/3">
                <ul className="divide-y divide-dashed list-disc">
                  <li>Daily/Weekly Janitorial Services</li>
                  <li>Disinfectant Electrostatic Spraying/Fogging</li>
                  <li>Office Cleaning</li>
                  <li>Construction Site Office Janitorial Services</li>
                  <li>Construction Site Clean Up</li>
                  <li>Mobile Pressure Washing</li>
                  <li>Building/Site Services (Pressure Washing/Junk Removal/Landscaping/General Labour)</li>
                  <li>Construction Site Security (Coming in 2022)</li>
                </ul>
              </div>
              <div className="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-1 md:px-1 md:w-1/3 lg:my-1 lg:px-1 lg:w-1/3 xl:my-1 xl:px-1 xl:w-1/3">
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-screen-xl bg-white px-4 py-12 mx-auto sm:py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold leading-9 text-black sm:text-3xl sm:leading-10 text-slate-800">
                    "Building capacity and strength within our Indigenous communities through employment and training"
                </h2>
            </div>
            <div className="mt-10 text-center sm:max-w-2xl sm:mx-auto sm:grid sm:grid-cols-2 sm:gap-8">
              <img src="/cab-logo.jpg" />
              <img src="/swept-logo.png" />
            </div>
            <div className="w-52 mx-auto mt-4 p-4 flex">

            </div>
        </section>


      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

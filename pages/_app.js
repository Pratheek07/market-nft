/* pages/_app.js */
import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="border-4 p-8">
        <p className="text-6xl font-extrabold font-serif text-purple-700">Entity Marketplace</p>
        <div className="flex mt-12">
          <Link href="/">
            <a className="mr-10 text-black-600">
              Home
            </a>
          </Link>
          <Link href="/create-item">
            <a className="mr-10 text-black-500">
              Sell Assets
            </a>
          </Link>
          <Link href="/assets">
            <a className="mr-10 text-black-500">
              My Assets
            </a>
          </Link>
          <Link href="/dashboard">
            <a className="mr-10 text-black-500">
              Dashboard (Creators)
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}
export default MyApp

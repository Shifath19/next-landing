import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © 2023 Shifath. All rights reserved.
          </p>
          <nav className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              <li>
                <Link href="https://nextjs.org/docs" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 text-sm bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded-full transition duration-300">
                  Next.js Docs
                </Link>
              </li>
              <li>
                <Link href="https://nextjs.org/learn" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 text-sm bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded-full transition duration-300">
                  Learn Next.js
                </Link>
              </li>
              <li>
                <Link href="https://vercel.com/templates?framework=next.js" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 text-sm bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded-full transition duration-300">
                  Next.js Templates
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer


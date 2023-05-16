import React from 'react'
import Link from 'next/link'

const HomePage = () => {
  return <div>
    <h1>The HomePage</h1>
    <ul>
      <li>
        <Link  href="/portfolio">portfolio</Link>
      </li>
      <li>
        <Link href="/clients">clients</Link>
      </li>
      <li>
        <Link href="/about">about</Link>
      </li>
    </ul>
  </div>
}

export default HomePage;
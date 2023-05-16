import React from 'react'
import { useRouter } from 'next/router'

const PortfolioProjectPage = () => {
  const router = useRouter();
  
  console.log(router.pathname)
  console.log(router.query)
  
  return <div>
    <h1>The Portfolio project page {router.projectId}</h1>
  </div>
}

export default PortfolioProjectPage;
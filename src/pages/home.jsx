import React from 'react'
import Sidebar from '../components/sidebar/sidebar'
import Header from '../components/header/header'
import ECommerce from './eCommerce'

const Home = () => {
  return (
    <div className='flex h-screen overflow-hidden '>
      <Sidebar />
      <div
        class="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto"
      >
          <Header />
          <ECommerce />
      </div>
    </div>
  )
}

export default Home

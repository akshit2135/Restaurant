import React from 'react'
import Layout from '../components/layout/Layout'
import { Link } from 'react-router-dom'
import Banner from '../images/banner.jpeg'
import '../styles/HomeStyles.css'

const Home = () => {
  return (
    <Layout>
      <div className='home' style={{backgroundImage: `url(${Banner})`}}>
        <div className='headerContainer'>
          <h1 style={{marginTop: '0px',paddingTop: '10px'}}>Food Website</h1>
          <p>Best Food in India</p>
          <Link to = '/menu'>
            <button>
              Order Now
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home

import { Button } from 'antd'
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'

const HomePage = () => {
  return (
    <Fragment>
      <Navbar />

      <div className=" mt-40 flex flex-col items-center justify-center">
        <Link to="pokemon-list">
          <Button style={{ color: '#f3f3f3' }} className="btn-back">
            View Pokemon List
          </Button>
        </Link>
      </div>
    </Fragment>
  )
}

export default HomePage

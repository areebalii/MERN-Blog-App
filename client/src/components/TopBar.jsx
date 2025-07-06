import React from 'react'
import logo from "@/assets/images/logo.png"
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { IoIosLogIn } from "react-icons/io";
import SearchBox from './SearchBox';


const TopBar = () => {
  return (
    <div className='flex justify-between items-center h-16 fixed w-full z-20 bg-white px-6 border-b'>
      <div>
        <img src={logo} alt="" width={100} className='mix-blend-multiply' />
      </div>
      <div className='w-[500px]'>
        <SearchBox />
      </div>
      <div>
        <Button asChild className="rounded-full">
          <Link to="">
            <IoIosLogIn />
            Sign In
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default TopBar
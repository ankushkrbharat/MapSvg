import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="bg-primary p-10 ">
      <div className="flex justify-center gap-10 my-2"><Link path={'/'}>📰 Terms and condition</Link><Link path={'/'}>🔒 Privacy Policy</Link></div>
      <div className="w-full flex justify-around bg-primary">Copyright ©2023  SvgMap IT 🌏</div></div>
  )
}

export default Footer
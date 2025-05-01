import React from 'react'
import { FellowshipTable } from './FellowshipTable'
import Link from 'next/link'
function page() {
  return (
    <><div className=' top-0 left-0 w-full h-full'>
      <Link className='btn relative  bg-purple-500 h-20 m-5 text-2xl text-white font-bold rounded-lg shadow-lg hover:bg-purple-700 transition duration-300 ease-in-out left-300' href="/fellow">
        Submit a Fellowship
      </Link>
      <div><FellowshipTable /></div>
    </div>
    </>

  )
}

export default page
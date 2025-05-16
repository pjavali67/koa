import React from 'react'
import { FellowshipTable } from './FellowshipTable'
import Link from 'next/link'
import { requireAuth } from "../../lib/session"
async function page() {
  const session = await requireAuth() as { name?: string; email?: string }
  console.log(session)
  return (
    <><div className=' top-0 left-0 w-full h-full'>
      <Link className='btn relative  bg-purple-500 h-20 m-5 text-xl text-white font-bold rounded-lg shadow-lg hover:bg-purple-700 transition duration-300 ease-in-out left-255' href="/fellow">
        Submit a Fellowship
      </Link>
      <div><FellowshipTable /></div>
    </div>
    </>

  )
}

export default page
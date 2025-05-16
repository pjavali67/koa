import React from 'react'
import ProfileTable from './ProfileTable'
import { requireAuth } from "../../lib/session"
//import PageLayout from "../../components/custom-components/PageLayout";
async function page() {
  const session = await requireAuth() as { name?: string; email?: string }
  console.log(session);
  return (
    
    <div className='flex flex-col justify-center items-center '><ProfileTable/></div>
  )
}

export default page
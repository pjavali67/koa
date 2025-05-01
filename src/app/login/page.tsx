
import React from 'react'
//import LoginComponent from "./LoginComponent"
import LoginwithLost from './LoginwithLost'
//import { useRouter } from "next/navigation";
import PageLayout from "../PageLayout";
import layout from "../layout";

function page({ params }: { params: { path: string } }) {
  // const router = useRouter();
  const isHomePage = params.path === "/";

  const Layout = isHomePage ? layout : PageLayout;
  return (
    <>
      <Layout title="Login" >
        <LoginwithLost /></Layout>
    </>

  )
}

export default page
import Head from 'next/head'
import React, { ReactChildren } from 'react'

type Props = {
  ogTitle: string
  ogDescription: string
  //   ogImageUrl: string
  // ogOriginalUrl: string;
  children?: JSX.Element | JSX.Element[]
}

const Layout: React.FC<Props> = ({
  children,
  ogTitle,
  ogDescription,
  //   ogImageUrl,
  // ogOriginalUrl,
}) => {
  return (
    <>
      <Head>
        <title>{ogTitle}</title>
      </Head>
      <main>{children}</main>
    </>
  )
}

export default Layout

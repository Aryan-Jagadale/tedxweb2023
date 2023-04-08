import { useState, useEffect } from 'react'
import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/footer'
import Head from 'next/head'
import Loader from './Loader'
import Transition from './TransitionEffect'
import Script from 'next/script'

export default function Layout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>TEDxVITPune</title>

        <meta
          name="description"
          content="TEDxVITPune is a 6 year old organization working towards 'Ideas worth Spreading' via powerful talks and prodigious experience. Register Now!"
        />
        <meta
          name="keywords"
          content="TEDx, tedx, tedxvitpune, TEDxVITPune, Reemergence, theme, tedxpune, TED, VIT, Vishwakarma, VIT, 2022, CountDown"
        />
        <meta name="author" content="TEDxVITPune" />
        <meta name="robots" content="index, follow" />

        <meta name="title" content="TEDxVITPune" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tedxvitpune.in" />
        <meta property="og:title" content="TEDxVITPune" />
        <meta
          property="og:description"
          content="TEDxVITPune is a 7 year old organization working towards 'Ideas worth Spreading' via powerful talks and prodigious experience. Register Now!"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651508171/Website%20Content/author_trfcgd.png"
        />
        <meta property="og:image:width" content="120" />
        <meta property="og:image:height" content="120" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://tedxvitpune.in" />
        <meta property="twitter:title" content="TEDxVITPune" />
        <meta
          property="twitter:description"
          content="TEDxVITPune is a 7 year old organization working towards 'Ideas worth Spreading' via powerful talks and prodigious experience. Register Now!"
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021429/Website%20Content/Header/logo_dark_v8hfiy.png"
        />

        <link rel="icon" href="/tedxfavicon.ico" />
      </Head>

      <Navbar />
      {React.Children.map(children, (child) => {
        return loading ? <Loader /> : child;
      })}
      <Footer />
      <Script src="https://unpkg.com/blotterjs-fork@0.1.0/build/blotter.min.js" />
    </>
  )
}

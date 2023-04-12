import { useState, useEffect } from 'react'
import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/footer'
import Head from 'next/head'
import Script from 'next/script'
import Router from 'next/router'
import PyramidLoader from '../components/Loader'
import AnimatedCursor from 'react-animated-cursor'

export default function Layout({ children }) {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleStart = () => {
      setLoading(true)
    }

    const handleComplete = () => {
      setLoading(false)
    }

    Router.events.on('routeChangeStart', handleStart)
    Router.events.on('routeChangeComplete', handleComplete)
    Router.events.on('routeChangeError', handleComplete)

    return () => {
      Router.events.off('routeChangeStart', handleStart)
      Router.events.off('routeChangeComplete', handleComplete)
      Router.events.off('routeChangeError', handleComplete)
    }
  }, [])
  return (
    <>
      <Head>
        <title>TEDxVITPune</title>

        <meta
          name="description"
          content="TEDxVITPune is a 8 year old organization working towards 'Ideas worth Spreading' via powerful talks and prodigious experience. Register Now!"
        />
        <meta
          name="keywords"
          content="TEDx, tedx, tedxvitpune, TEDxVITPune, Fragments, theme, tedxpune, TED, VIT, Vishwakarma, VIT, 2023, CountDown"
        />
        <meta name="author" content="TEDxVITPune" />
        <meta name="robots" content="index, follow" />

        <meta name="title" content="TEDxVITPune" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tedxvitpune.in" />
        <meta property="og:title" content="TEDxVITPune" />
        <meta
          property="og:description"
          content="TEDxVITPune is a 8 year old organization working towards 'Ideas worth Spreading' via powerful talks and prodigious experience. Register Now!"
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
          content="TEDxVITPune is a 8 year old organization working towards 'Ideas worth Spreading' via powerful talks and prodigious experience. Register Now!"
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021429/Website%20Content/Header/logo_dark_v8hfiy.png"
        />

        <link rel="icon" href="/tedxfavicon.ico" />
      </Head>

      {loading ? (
        <PyramidLoader />
      ) : (
        <div>
          
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      )}

      <Script src="https://unpkg.com/blotterjs-fork@0.1.0/build/blotter.min.js" />
    </>
  )
}

import '../styles/globals.css'
import Script from 'next/script'
import HeadInfo from '../components/HeadInfo'
import Layout from '../layout/Layout'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {

  //Dark Mode 초기 설정
  useEffect(()=> {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])
  
  return (
      <>
        <HeadInfo/>
        <Script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"/>

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
  )
}

export default MyApp

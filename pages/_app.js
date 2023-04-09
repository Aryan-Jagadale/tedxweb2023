import { AnimatePresence } from 'framer-motion'
import Layout from '@/components/layout'
import '@/styles/globals.scss'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
        <AnimatePresence
          mode="wait"
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} />
        </AnimatePresence>
    </Layout>
  )
}

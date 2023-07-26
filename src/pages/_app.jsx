import { AudioProvider } from '@/components/AudioProvider'
import { SidebarLayout } from '@/components/SidebarLayout'

import '@/styles/tailwind.css'
import 'focus-visible'

export default function App({ Component, pageProps }) {
  let Layout = Component.Layout ?? SidebarLayout

  return (
    <AudioProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AudioProvider>
  )
}

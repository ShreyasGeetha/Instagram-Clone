import Head from 'next/head'
import Feed from '../components/Feed/Feed'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Modal from '../components/Modal'
import Posts from '../components/Posts/Posts'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Instagram Clone</title>
        <link rel="icon" href="/insta1.ico" />
      </Head>

      {/* Header */}
      <Header />
      <Feed />
      {/* <Posts /> */}

      {/* Modal */}
      <Modal />
      <Footer />
    </div>
  )
}

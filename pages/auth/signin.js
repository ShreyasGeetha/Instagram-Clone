import {getProviders, signIn as SignIntoProvider} from 'next-auth/react'
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

//Runs on Browser
const signIn = ({ providers }) => {
  console.log('do we come here',providers)
  return (
    <>
      <Header />
      <div className='flex flex-col items-center justify-center min-h-screen -mt-56 text-center px-14'>
        <img className='w-80 mt-10' src="/insta-headerLogo.png" alt="" />
        <p className='font-xs italic'>This is not an real app, built for educational practice purposes</p>
        <div className=''>
        {Object.values(providers).map(provider => (
          <div key={provider.name} className=''>
            <button className='p-3 mt-40 bg-blue-500 rounded-lg text-white' onClick={() => SignIntoProvider(provider.id, { callbackUrl: '/' })}>
              Sign in with {provider.name}
            </button>
          </div>
        ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

//MiddleServer
export async function getServerSideProps(context) {
  const providers = await getProviders();
  
  return {
    props: {
      providers
    }
  }
}

export default signIn;
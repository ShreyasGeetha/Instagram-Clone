import Image from 'next/image';
import { useRouter } from 'next/router';

const Logo = () => {
  const router = useRouter()

  const showHomePage = () => {
      router.push('/')
  }
  return (
    <>
      <div onClick={showHomePage} className="cursor-pointer justify-self-center  relative ml-auto md:ml-0 w-24">
          <Image src="/instagram_logo.png" layout="fill" objectFit="contain"/>        
      </div>

        
    </>
  );
}

export default Logo;
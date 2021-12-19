import { HeartIcon, PaperAirplaneIcon, PlusCircleIcon, UserGroupIcon} from '@heroicons/react/outline'
import { HomeIcon, MenuIcon } from '@heroicons/react/solid'
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { modalState } from '../../atoms/modalAtom';

const IconsGroup = () => {

  const { data: session } = useSession();
  const router = useRouter()
  const [open, setOpen] = useRecoilState(modalState)

  console.log(session)
  
  const showHomePage = () => {
      router.push('/')
  }

  return (
    <>
      {/* Icons */}
      {session ? (
        <div className="flex items-center ml-auto md:ml-0 justify-end space-x-4">
          <HomeIcon onClick={showHomePage} className="hidden md:inline-flex navBtn " />
          <div className="relative navBtn ">
            <PaperAirplaneIcon className="navBtn mb-1 rotate-45" />
            <div className="absolute -top-3 -right-2 text-sm bg-red-500 w-5 h-5 flex items-center justify-center rounded-full animate-pulse">
              3
            </div>
          </div>
          <PlusCircleIcon onClick={() => setOpen(true)} className=" hidden md:inline-flex navBtn"/>
          <UserGroupIcon className="hidden md:inline-flex navBtn"/>
          <HeartIcon className="hidden md:inline-flex navBtn" />     
          
          <img
            onClick={signOut}
            src={session.user.image} alt="" className='cursor-pointer hidden md:inline-flex h-10 w-10 p-[2px] border rounded-full' />
        </div>
      ) : (
          <div className="flex items-center ml-auto md:ml-0 justify-end space-x-4">  
            <HomeIcon onClick={showHomePage} className="hidden md:inline-flex navBtn " />
            <button onClick={()=>router.push('/api/auth/signin')}>Sign In</button>
          </div>
      )}
        
    </>
  );
}

export default IconsGroup;
import { HeartIcon, PaperAirplaneIcon, PlusCircleIcon, UserGroupIcon} from '@heroicons/react/outline'
import { HomeIcon, MenuIcon } from '@heroicons/react/solid'
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import IconsGroup from "../Header/IconsGroup";
import { useRecoilState } from 'recoil';
import { modalState } from '../../atoms/modalAtom';
import Logo from "../Header/Logo";
import Search from "../Header/Search";


const Footer = () => {

  const { data: session } = useSession();
  const router = useRouter();

  const [open, setOpen] = useRecoilState(modalState)

  const showHomePage = () => {
    router.push('/')
  }

  return (
    <div>
       <div className="md:hidden shadow-sm border-b bg-white fixed bottom-0 inset-x-0 z-50">
        <div className='flex justify-between items-center p-2 '>
          <HomeIcon onClick={showHomePage} className={`navBtn ${!session && "!mx-auto"} `}/>
          {
            session && 
              <>              
                <PlusCircleIcon onClick={() => setOpen(true)} className="navBtn" />
                <HeartIcon className="navBtn"/>
                <img onClick={signOut} src={session.user.image} alt="" className='h-10 w-10 cursor-pointer p-[2px] border rounded-full' />        
              </>            
          }
        </div>
      </div>
    </div>
  );
}

export default Footer;
            //  fixed
            //  inset-x-0
            //  bottom-0
            //  p-4
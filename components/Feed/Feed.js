import MiniProfile from "../MiniProfile/MiniProfile";
import Posts from "../Posts/Posts";
import Stories from "./Stories";
import Suggestions from "../Suggestions";
import { useSession } from "next-auth/react";

const Feed = () => {

  const { data: session } = useSession(); 
  console.log('what does session show', session)
  return (
    <div className="max-w-6xl mx-auto">
{/* grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:max-w-3xl lg:max-w-5xl xl:max-w-6xl   mx-auto */}
      <main className={`grid grid-cols-1 ml-10
        md:max-w-2xl md:mx-auto
        lg:grid-cols-3 lg:max-w-6xl lg:ml-10 sm:grid-cols-1
        sm:mx-auto sm:max-w-xl md:ml-16 ${!session && "!grid-cols-1 !max-w-2xl !mx-auto"}`}>
      <section className="lg:col-span-2">
        {/* Stories */}
        <Stories />
        {/* Posts */}
        <Posts />  
      </section>
      
        {session && 
        
          <section className='hidden lg:inline-grid md:col-span-1'>
              {/* Mini Profile */}
              <div className='fixed'>
              <MiniProfile />
              <Suggestions />
              </div>
            {/* Suggestions */}
          </section>
        }
      </main>      
    </div>
  );
}

export default Feed;
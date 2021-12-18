import { useEffect, useState } from 'react';
import faker from 'faker';
import axios from 'axios';
import Story from './Story';
import { useSession } from 'next-auth/react';

const Stories = () => {

  const [suggestions, setSuggestions] = useState([])
  const { data: session } = useSession();
  const [pic, setPic] = useState([])
  let arr = []

  useEffect(() => {
    const userData = axios.get("https://randomuser.me/api/?results=25").then(res => {
      if (res.data) {
        console.log(res.data.results[0].picture.thumbnail)
        res.data.results.map((pic) => (
          arr = [...arr, pic.picture.thumbnail],
          setPic(arr)

        ))
      } else {
        console.log('not found')
      }
    })
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }))     
    console.log(suggestions)
    setSuggestions(suggestions)
  }, [])

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {
        session && (
          <Story img={session?.user?.image} name={session?.user?.username} />
        )
      }
      {
        suggestions.map((profile) => (
          <Story 
            key={profile.id}
            name={profile.name}
            img={pic[profile.id]}
          />
        ))
      }
    </div>
  );
}

export default Stories;
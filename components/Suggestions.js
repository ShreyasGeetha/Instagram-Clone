import { useEffect, useState } from 'react'
import faker from 'faker'
import axios from 'axios'

const Suggestions = () => {

  const [suggestions, setSuggestions] = useState([])
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

    const suggestions = [...Array(5)].map((_, i) => (
      {
        ...faker.helpers.contextualCard(),
        id: i
      }
    ))
    setSuggestions(suggestions)
  }, [])

  return (
    <div className='mt-4 ml-10'>
      <div className='flex justify-between text-sm mb-5'>
        <h3 className='text-sm font-bold text-gray-400'>Suggestions for you</h3>
        <button className='text-gray-600 font-semibold'>See All</button>
      </div>
      {
        suggestions.map(profile => (
          <div key={profile.id} className='flex items-center justify-between mt-3'>
            <img className='w-10 h-10 p-[2px] border rounded-full' src={pic[profile.id]} alt="" />

            <div className='flex-1 ml-4'>
              <h2 className='font-semibold text-sm'>
                {profile.username}  
              </h2>
              <h3>Works at {profile.company.name}</h3>
            </div>

            <button className='text-blue-400 text-xs font-bold'>Follow</button>
          </div>         
        ))
      }
    </div>
  );
}

export default Suggestions;
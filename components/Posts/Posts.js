import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { db } from '../../firebase';
import Post from "./Post";


const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    return onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), snapshot => {
      setPosts(snapshot.docs);
    })
  }, [db])

  console.log('the posts ', posts)
  return (
    <div className="">
      {
        posts.map((post) => (
          <Post key={post.id} 
            id={post.id}
            username={post.data().username}
            userImg={post.data().profileImg}
            img={post.data().image}
            caption={post.data().caption}
          />
        ))
      }
    </div>
  );
}

export default Posts;
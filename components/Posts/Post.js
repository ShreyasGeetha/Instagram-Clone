import { useState, useEffect } from 'react';
import { BookmarkAltIcon, BookmarkIcon, ChatIcon, DotsHorizontalIcon, EmojiHappyIcon, HeartIcon, PaperAirplaneIcon } from "@heroicons/react/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/solid";
import { useSession } from "next-auth/react";

import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import Moment from 'react-moment';


const Post = ({ id, username, userImg, img, caption }) => {

  const [isText, setIsText] = useState(false)
  const { data: session } = useSession()
  const [comment, setcomment] = useState('')
  const [comments, setcomments] = useState([])
  const [likes, setLikes] = useState([])
  const [hasLiked, setHasLiked] = useState(false)

  useEffect(() => {
    return onSnapshot(
      query(
        collection(db, 'posts', id, 'comments'),
        orderBy('timestamp', 'desc')
      ),
      (snapshot) => setcomments(snapshot.docs))
  }, [db])

  useEffect(() => {
    setHasLiked(
      likes.findIndex((like) => (like.id === session?.user?.uid)) !== -1)
  }, [likes])

  useEffect(() => {
    return onSnapshot(collection(db, 'posts', id, 'likes'), (snapshot) => setLikes(snapshot.docs))
  }, [db, id])

  console.log('has liked', hasLiked)
  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, 'posts', id, 'likes', session.user.uid));
    } else {      
      await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
        username: session.user.username
      })
    }
  }

  const sendComment = async (e) => {
    e.preventDefault();
    const commentToSend = comment;
    setcomment('');

    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    })
  }

  console.log('the comments', comments)

  return (
    <div className='bg-white my-7 border rounder-sm'>
      
      {/* Header */}
      <div className='flex items-center p-5'>
        <img src={userImg} className='rounded-full h-12 w-12 object-contain p-1 border mr-3' alt="" />
        <p className='flex-1 font-bold'>{username}</p>
        <DotsHorizontalIcon className='h-5'/>
      </div>
      {/* img */}
      <img src={img} className='object-cover w-full' alt="" />
      {/* Buttons */}
      {session && (
      <div className='flex py-5 '>
        <HeartIcon onClick={likePost} className={`btn ${hasLiked ? "fill-red-500" : "fill-white"}`}/>
        <ChatIcon className='btn'/>
        <PaperAirplaneIcon className='btn rotate-45 -mt-1 mr-auto'/>
        <BookmarkIcon className='btn'/>
      </div>
      )}
      {/* captions */}
      <p className='p-5 truncate'>
        {likes.length > 0 && (
          <p className='font-bold mb-1'>{likes.length} likes</p>
        )}
        <span className='font-bold mr-1'>{username} </span>
        {caption}
      </p>

      {/* comments */}
      {comments.length > 0 && (
        <div className='ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin'>
          {comments.map(comment => (
            <div key={comment.id} className='flex items-center space-x-2 mb-3'>
              <img className='h-7 rounded-full' src={comment.data().userImage} alt="" />
              <p className='text-sm flex-1'><span className='font-bold'>
              {comment.data().username}{' '} 
              </span>
                {comment.data().comment}</p>
              <Moment fromNow className='text-xs px-5'>
                {comment.data().timestamp?.toDate()}
              </Moment>
            </div>
          ))}
        </div>
      )}  
      
      {/* input box */}
      {session && (
      <form className="flex items-center p-4">
        <EmojiHappyIcon className='h-6 m-2' />
          <input
            type="text"
            placeholder='Add a comment'
            value={comment}
            onChange={e => setcomment(e.target.value)}
            className='border-none flex-1 focus:ring-0 outline-none' />
        
          <button
            disabled={!(comment.trim())}
            onClick={sendComment}
            className='font-semibold text-blue-500 '>Post</button>
      </form>
      )}
    </div>
  );
}

export default Post;
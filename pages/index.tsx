import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone' 

import { getPosts } from '@/services/posts'
import { getAuthors } from '@/services/authors'

dayjs.extend(timezone)


interface Authors {
  id:number;
  avatar_url: string;
  name:string;
  place:string;
  role:string;
}

interface Posts {
  id:number
  author_id:number;
  title: string;
  body: string;
  image_url: string;
  created_at: string;
}


const Home: NextPage = () => {

  const [posts, setPosts] = useState([])


  useEffect(() => {
   (async()=>{
     try {
      const res= await getAuthors()
      if(res.status === 200&& res.statusText === 'OK') {
        try {
          const response= await getPosts()
          if(response.status === 200 && response.statusText === 'OK'){
            const newPosts = response.data.map((i:Posts) => {
              // console.log('i',i)
              const author = res.data.find((item:Authors) => item.id === i.author_id)
              // console.log('author',author)
              return {...i, name:author.name, avatar_url:author.avatar_url }
            })
            console.log(newPosts)
            setPosts(newPosts)

          }
        } catch (error) {
          
        }
      
      }
     } catch (error) {
       
     }
     
    //  const {data} = await getPosts()
    //  console.log('res',data)
   })()
}, []);

  return (
    <div className='py-10'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=' w-full h-full'>
        <h1 className='text-3xl font-bold'>MAQE FORUM</h1>
        <p className='text-gray-800 mb-5 mt-10'>Your current timezone is: {dayjs.tz.guess()}</p>
        <div className='grid grid-cols-1 gap-5'>

        {posts.map((item:any) => (
          <div key={item.id} className='card bg-white shadow-sm'>
            <div className='flex border-b border-gray-300 py-2 px-2'>
              <img  alt='avatar' src={item.avatar_url} className='w-5 h-5 rounded-full'/>
              <span className='text-sm mx-2 text-orange-500 font-semibold'>{item.name}</span>
              <span className='text-sm text-gray-500'>{`posted on ${dayjs(item.created_at).format('dddd, MMM D, YYYY, HH:ss')}`}</span>
            </div>
            <div className='flex p-5'>
              <img alt='image' src={item.image_url} className='w-60 h-52'/>
              <div className='flex flex-col ml-5'>
                  <h2 className='font-bold text-xl'>{item.title}</h2>
                  <p className='text-gray-700'>{item.body}</p>
              </div>
            </div>
          </div>
        ))}
        </div>
      </main>
      
      

     
    </div>
  )
}

export default Home

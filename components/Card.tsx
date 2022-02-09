import dayjs from 'dayjs'

const Card = ({item}:any) => {
  return ( 
    <div  className='card bg-white shadow-sm'>
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
  )
}

export default Card
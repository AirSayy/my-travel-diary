import React from 'react'

function Cards(props) {
  console.log(props)
  return (
    <div className='mt-10 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
      <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={"../{data.props.image}"} />
      <div>
        
        <div  class=" flex flex-row ml-5">
        <img src="../images/star.png" className="card--star" />
        <span class="mb-90 text-.5xl font-bold text-black-500 dark:text-gray-400 mr-5">{props.data.location}</span>
        <span class="mb-90 text-.5xl font-small text-gray-500 dark:text-gray-400">{props.data.googleMapUrl}</span>
        </div>
        
        <div  class=" flex flex-col justify-between p-4 leading-normal">
        <h1 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.data.title}</h1>
        <h5 class="mb-90 text-.5xl font-bold text-black-500 dark:text-gray-400">{props.data.startDate} - {props.data.endDate}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.data.description}</p>
        </div>
      </div>
    </div>
  )
}


/* <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt="">
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</a> */


export default Cards
import React from 'react'
import Image from 'next/image'
import Map from './Map'
export default function HomePage() {
  return(
    <div className='h-screen bg-noir flex justify-center items-center'>
   <div href="#" class="block p-6 max-w-2xl bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Bus Bi Map App</h5>
  <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
  <div><Map/></div>
</div>
</div>
)
}

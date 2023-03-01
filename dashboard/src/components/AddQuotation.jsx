import React from 'react'
import { Link } from 'react-router-dom'

export default function AddQuotation() {
  return (
    <>
    <div className=' text-center'>
      <span className='text-5xl'>Add Quotation</span><br /><br/>
    </div>
    <div class="flex space-x-2">
      <Link to='/sales'>
        <button className=" flex flex-col inline-block bg-red-500 px-6 pt-2.5 ml-20 mt-5 pb-2 text-sm font-medium uppercase text-red-50 ease-in-out hover:bg-red-600">
          Go Back
        </button>
      </Link>
    </div>  
    <div className=' mt-10 '>
      <form class="w-full max-w-sm ">
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              ID
            </label>
          </div>
          <div class="md:w-2/3">
            <input class="bg-white appearance-none border border-gray-400 hover:border-gray-500 rounded w-full py-2 px-4 text-gray-700 shadow leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type='text'/>
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Customer Name
            </label>
          </div>
          <div class="md:w-2/3">
            <input class="bg-white appearance-none border border-gray-400 hover:border-gray-500 rounded w-full py-2 px-4 text-gray-700 shadow leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Customer Email
            </label>
          </div>
          <div class="md:w-2/3">
            <input class="bg-white appearance-none border border-gray-400 hover:border-gray-500 rounded w-full py-2 px-4 text-gray-700 shadow leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="email" />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Date
            </label>
          </div>
          <div class="md:w-2/3">
            <input class="bg-white appearance-none border border-gray-400 hover:border-gray-500 rounded w-full py-2 px-4 text-gray-700 shadow leading-tightfocus:outline-none focus:bg-white focus:border-purple-500" type="date" />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Price
            </label>
          </div>
          <div class="md:w-2/3">
            <input class="bg-white appearance-none border border-gray-400 hover:border-gray-500 rounded w-full py-2 px-4 text-gray-700 shadow leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Status
            </label>
          </div>
          <div class="inline-block relative w-64">
            <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              <option>New</option>
              <option>In-Progress</option>
              <option>Done</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
        <div class="md:flex md:items-center">
          <div class="md:w-1/3"></div>
          <div class="md:w-2/3">
            <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
              Add Quotation
            </button>
          </div>
        </div>
      </form>
    </div>  
    </>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function Sales() {
  // var style = {stroke:#fff}
  return (

    <>
    <div className=' text-center'>
        <span className='text-5xl'>Sales Management System</span><br /><br/>
    </div>
    <div class="flex space-x-2">
      <Link to='/addquotation'>
        <button className=" flex flex-row gap-3 inline-block bg-teal-500 px-6 pt-2.5 ml-20 mt-5 pb-2 text-sm font-medium uppercase text-teal-50 ease-in-out hover:bg-teal-600 items-center">
            <svg stroke="#008080" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#fff" stroke-width="2" d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,18 L12,6 M6,12 L18,12"></path></svg>
          Add Quotation
        </button>
      </Link>
    </div>
    </>
  )
}

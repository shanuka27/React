import { Menu, Popover, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { HiOutlineBell, HiOutlineSearch } from 'react-icons/hi'

export default function Header() {
  return (
    <div className='bg-neutral-200 h-16 px-4 flex  justify-between items-center border-b border-gray-200'>
        <div className='relative'>
            <HiOutlineSearch fontSize={17} className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-3'/>
            <input type="text" placeholder='Search...' className='text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-lg px-4 pl-10' />
        </div>
        <div className='flex item-center gap-4 mr-2'>
        <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-10'}
                group inline-flex items-center rounded-md bg-teal-500 px-2 py-2 mt-1  text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
                
              <HiOutlineBell
                className={`${open ? '' : 'text-opacity-70'}
                   h-9 w-9  text-teal-100 transition duration-150 ease-in-out group-hover:text-opacity-100`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
            <Popover.Panel className='absolute right-0 z-10 mt-2.5 w-80'>
                <div className='bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5'>
                    <strong className='text-gray-700 font-medium'>Message</strong>
                    <div className='mt-2 py-1'>
                        this is message
                    </div>
                </div>
            </Popover.Panel>
            </Transition>
            </> )}
            </Popover>

            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-0 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-0">
                        <span className='sr-only'>open user menu</span>
                    <div className='h-12 w-12 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center' style={{backgroundImage: 'url("https://source.unsplash.com/80x80?face")'}}>
                        <span className='sr-only'>Shanuka yasiru</span>
                </div>
                </Menu.Button>
                </div>
                </Menu>
        </div>
    </div>
  )
}

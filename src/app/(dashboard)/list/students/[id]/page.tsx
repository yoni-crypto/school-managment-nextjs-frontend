import Announcments from '@/components/Announcments'
import BigCalender from '@/components/BigCalender'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Performance from '@/components/Performance'

const SingleStudentpage = () => {
    return (
        <div className='flex-1 p-4 flex flex-col gap-4 xl:flex-row'>
            <div className='w-full xl:w-2/3'>
                <div className='flex flex-col lg:flex-row gap-4'>
                    <div className='bg-yoSky py-6 px-4 rounded-md flex-1 flex gap-4'>
                        <div className='w-1/3'>
                            <Image src='https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200' alt='' width={100} height={100} />
                        </div>
                        <div className='w-2/3 flex flex-col justify-between gap-4'>
                            <h1 className='text-xl font-semibold'>Abebe Kebede</h1>
                            <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <div className='flex items-center justify-between gap-2 flex-wrap text-xs font-medium'>
                                <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
                                    <Image src="/icons8-blood-48.png" alt='' width={14} height={14} />
                                    <span>A+</span>
                                </div>
                                <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
                                    <Image src="/icons8-date-48.png" alt='' width={14} height={14} />
                                    <span>January 2025</span>
                                </div>
                                <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
                                    <Image src="/icons8-mail-94.png" alt='' width={14} height={14} />
                                    <span>user@gmail.com</span>
                                </div>
                                <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
                                    <Image src="/icons8-phone-48.png" alt='' width={14} height={14} />
                                    <span>0922222222</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 flex gap-4 justify-between flex-wrap'>
                        <div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
                            <Image src="/icons8-attendance-48.png" alt='' width={24} height={24} className='w-6 h-6'/>
                            <div className=''>
                                <h1 className='text-xl font-semibold'>90%</h1>
                                <span className=' text-sm text-gray-400'>Attendance</span>
                            </div>
                        </div>
                        <div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
                            <Image src="/icons8-active-directory-48.png" alt='' width={24} height={24} className='w-6 h-6'/>
                            <div className=''>
                                <h1 className='text-xl font-semibold'>6th</h1>
                                <span className=' text-sm text-gray-400'>Grade</span>
                            </div>
                        </div>
                        <div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
                            <Image src="/icons8-class-94.png" alt='' width={24} height={24} className='w-6 h-6'/>
                            <div className=''>
                                <h1 className='text-xl font-semibold'>6A</h1>
                                <span className=' text-sm text-gray-400'>Class</span>
                            </div>
                        </div>
                        <div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
                            <Image src="/icons8-book-48.png" alt='' width={24} height={24} className='w-6 h-6'/>
                            <div className=''>
                                <h1 className='text-xl font-semibold'>18</h1>
                                <span className=' text-sm text-gray-400'>Lessons</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-4 bg-white rounded-md p-4 h-[800px]'>
                    <h1>Student &apos;s Schedule</h1>
                    <BigCalender/>
                </div>
            </div>
            <div className='w-full xl:w-1/3 flex flex-col gap-4'>
            <div className='bg-white p-4 rounded-md'>
                <h1 className=' text-xl font-semibold'>Shortcuts</h1>
                <div className='mt-4 flex gap-4 flex-wrap text-xs text-gray-500'>
                    <Link className='p-3 rounded-md bg-yoSkyLight' href={'/'}>Student&apos;s Lessons</Link>
                    <Link className='p-3 rounded-md bg-yoYellowLight' href={'/'}>Student&apos;s teachers</Link>
                    <Link className='p-3 rounded-md bg-yoPurpleLight' href={'/'}>Student&apos;s Results</Link>
                    <Link className='p-3 rounded-md bg-pink-50' href={'/'}>Student&apos;s Exams</Link>
                    <Link className='p-3 rounded-md bg-yoSkyLight' href={'/'}>Student&apos;s Assignments</Link>
                </div>
            </div>
            <Performance/>
                <Announcments/>
            </div>
        </div>
    )
}

export default SingleStudentpage

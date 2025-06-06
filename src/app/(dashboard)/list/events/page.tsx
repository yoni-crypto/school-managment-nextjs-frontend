import FormModel from '@/components/FormModel'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/tableSearch'
import {  eventsData,role } from '@/lib/data'
import Image from 'next/image'
import React from 'react'

type Event= {
    id:number;
    title: string;
    class:string;
    date:string;
    startTime:string;
    endTime:string;
}

const columns = [
   
    {
        header: "Title", accessor: "title", className: ""
    },
    {
        header: "Class", accessor: "class", className: ""
    },
    {
        header: "Date", accessor: "date", className: "hidden md:table-cell"
    },
    {
        header: "Start Time", accessor: "startTime", className: "hidden lg:table-cell"
    },
    {
        header: "End Time", accessor: "endTime", className: "hidden md:table-cell"
    },
    {
        header: "Actions", accessor: "actions"
    },

]

const EventsListPage = () => {
    const renderRow = (item: Event) => (
        <tr key={item.id} className='border-b border-gray-200 even:bg-yoPurpleLight'>
            <td className='flex items-center gap-4 p-4'>
                <div className='flex flex-col'>
                    <h3 className=' font-semibold text-sm'>{item.title}</h3>
                </div>
            </td>
            <td className=' text-sm'>{item.class}</td>
            <td className='hidden md:table-cell text-sm'>{item.date}</td>
            <td className='hidden md:table-cell text-sm'>{item.startTime}</td>
            <td className='hidden md:table-cell text-sm'>{item.endTime}</td>
            <td className=''>
                <div className=' flex items-center gap-2'>
                {role === "admin" && (
                        <>
                            <FormModel table="event" type="update" data={item} />
                            <FormModel table="event" type="delete" id={item.id} />
                        </> 
                    )}
                </div>
            </td>
        </tr >
    )
    return (
        <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
            <div className='flex items-center justify-between'>
                <h1 className='hidden md:block text-lg font-semibold'>All Events</h1>
                <div className='flex flex-col md:flex-row items-center gap-4 w-full md:w-auto'>
                    <TableSearch />

                    <div className='flex items-center gap-4 self-end'>
                        <button className='w-8 h-8 flex items-center justify-center rounded-full bg-yoYellow'>
                            <Image src="/icons8-filter-50.png" alt='' width={20} height={20} />
                        </button>
                        <button className='w-8 h-8 flex items-center justify-center rounded-full bg-yoYellow'>
                            <Image src="/icons8-sort-24.png" alt='' width={20} height={20} />
                        </button>
                        {role === "admin" && (
                            <FormModel table="event" type="create"/>
                        )}
                    </div>
                </div>
            </div>
            <Table columns={columns} renderRow={renderRow} data={eventsData} />
            <Pagination />
            {/* <div className=''></div> */}
        </div>
    )
}

export default EventsListPage

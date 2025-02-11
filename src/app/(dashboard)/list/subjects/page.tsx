import FormModel from '@/components/FormModel'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/tableSearch'
import { parentsData, role, studentsData, subjectsData, teachersData } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Subject = {
    id: number;
    name: string;
    teachers: string[];
}

const columns = [

    {
        header: "Subject Name", accessor: "name", className: "hidden md:table-cell"
    },

    {
        header: "Teachers", accessor: "teachers", className: "hidden md:table-cell"
    },

    {
        header: "Actions", accessor: "actions"
    },

]

const SubjectsListPage = () => {
    const renderRow = (item: Subject) => (
        <tr key={item.id} className='border-b border-gray-200 even:bg-yoPurpleLight'>
            <td className='flex items-center gap-4 p-4'>
                <div className='flex flex-col'>
                    <h3 className=' font-semibold text-sm'>{item.name}</h3>
                </div>
            </td>
            <td className='hidden md:table-cell text-sm'>{item.teachers.join(",")}</td>
            <td className=''>
                <div className=' flex items-center gap-2'>
                {role === "admin" && (
                        <>
                            <FormModel table="subject" type="update" data={item} />
                            <FormModel table="subject" type="delete" id={item.id} />
                        </> 
                    )}
                </div>
            </td>
        </tr >
    )
    return (
        <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
            <div className='flex items-center justify-between'>
                <h1 className='hidden md:block text-lg font-semibold'>All Subjects</h1>
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
                            <FormModel table="subject" type="create"/>
                        )}
                    </div>
                </div>
            </div>
            <Table columns={columns} renderRow={renderRow} data={subjectsData} />
            <Pagination />
            {/* <div className=''></div> */}
        </div>
    )
}

export default SubjectsListPage

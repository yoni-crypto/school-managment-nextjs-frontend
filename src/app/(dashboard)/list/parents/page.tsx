import FormModel from '@/components/FormModel'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/tableSearch'
import { parentsData, role, studentsData, teachersData } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Parent = {
    id: number;
    name: string;
    email?: string;
    students: string[];
    phone: string;
    address: string;
}

const columns = [
    {
        header: "Info", accessor: "info"
    },
    {
        header: "Student Names", accessor: "students", className: "hidden md:table-cell"
    },

    {
        header: "Phone", accessor: "phone", className: "hidden md:table-cell"
    },
    {
        header: "Address", accessor: "address", className: "hidden lg:table-cell"
    },
    {
        header: "Actions", accessor: "actions"
    },

]

const ParentsListPage = () => {
    const renderRow = (item: Parent) => (
        <tr key={item.id} className='border-b border-gray-200 even:bg-yoPurpleLight'>
            <td className='flex items-center gap-4 p-4'>
                <div className='flex flex-col'>
                    <h3 className='font-semibold'>{item.name}</h3>
                    <p className='text-xs text-gray-500'>{item?.email}</p>
                </div>
            </td>
            <td className='hidden md:table-cell text-sm'>{item.students.join(",")}</td>
            <td className='hidden md:table-cell text-sm'>{item.phone}</td>
            <td className='hidden md:table-cell text-sm'>{item.address}</td>
            <td className=''>
                <div className=' flex items-center gap-2'>
                    {role === "admin" && (
                        <>
                            <FormModel table="parent" type="update" data={item} />
                            <FormModel table="parent" type="delete" id={item.id} />
                        </>
                    )}
                </div>
            </td>
        </tr >
    )
    return (
        <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
            <div className='flex items-center justify-between'>
                <h1 className='hidden md:block text-lg font-semibold'>All Parents</h1>
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
                            <FormModel table="parent" type="create" />
                        )}
                    </div>
                </div>
            </div>
            <Table columns={columns} renderRow={renderRow} data={parentsData} />
            <Pagination />
            {/* <div className=''></div> */}
        </div>
    )
}

export default ParentsListPage

"use client"
import Image from 'next/image';
import { BarChart, Bar,XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Mon',
        present: 40,
        absent: 60,
    },
    {
        name: 'Tue',
        present: 80,
        absent: 28,
    },
    {
        name: 'Wed',
        present: 70,
        absent: 50,
    },
    {
        name: 'Thur',
        present: 60,
        absent: 40,
    },
    {
        name: 'Fri',
        present: 90,
        absent: 50,
    },

];
const Attendancechart = () => {
    return (
        <div className='bg-white rounded-lg p-4 h-full'>
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Attendance</h1>
                <Image src="/icons8-three-dots-94.png" alt='' width={30} height={30} />
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <BarChart
                    width={500}
                    height={300}
                    data={data} 
                    barSize={20}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd'/>
                    <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
                    <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
                    <Tooltip  contentStyle={{borderRadius:"10px",borderColor:"lightgrey"}}/>
                    <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop:"20px",paddingBottom:"40px"}}/>
                    <Bar dataKey="present" fill="#FAE27C" legendType='circle' radius={[10,10,0,0]}/>
                    <Bar dataKey="absent" fill="#C3EBFA" legendType='circle' radius={[10,10,0,0]}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Attendancechart

"use client"
import Image from "next/image"
import Link from "next/link"
import {role} from "@/lib/data"

const menuItems = [
    {
        title: "MENU",
        items: [
            {
                icon: "/icons8-home-48.png",
                label: "Home",
                href: role === "admin" ? "/admin" : role === "teacher" ? "/teacher" :role==="student"? "/student":"/parent",
                visible: ["admin", "teacher", "student", "parent"]
            },
            
            {
                icon: "/icons8-teacher-48.png",
                label: "Teachers",
                href: "/list/teachers",
                visible:["admin","teacher"]
            },
            {
                icon: "/icons8-student-48.png",
                label: "Students",
                href: "/list/students",
                visible:["admin","teacher"]

            },
            {
                icon: "/icons8-parent-48.png",
                label: "Parents",
                href: "/list/parents",
                visible:["admin","teacher"]

            },
            {
                icon: "/icons8-home-48.png",
                label: "Subjects",
                href: "/list/subjects",
                visible:["admin","teacher"]
            },
            {
                icon: "/icons8-class-94.png",
                label: "Classes",
                href: "/list/classes",
                visible:["admin","teacher"]

            },
            {
                icon: "/icons8-book-48.png",
                label: "Lessons",
                href: "/list/lessons",
                visible:["admin","teacher"]

            },
            {
                icon: "/icons8-exam-64.png",
                label: "Exams",
                href: "/list/exams",
                visible:["admin","teacher","student","parent"]

            },
            {
                icon: "/icons8-assignment-48.png",
                label: "Assignments",
                href: "/list/assignments",
                visible:["admin","teacher","student","parent"]

            },
            {
                icon: "/icons8-result-48.png",
                label: "Results",
                href: "/list/results",
                visible:["admin","teacher","student","parent"]

            },
            {
                icon: "/icons8-attendance-64.png",
                label: "Attendance",
                href: "/list/attendance",
                visible:["admin","teacher","student","parent"]

            },
            {
                icon: "/icons8-events-48.png",
                label: "Events",
                href: "/list/events",
                visible:["admin","teacher","student","parent"]

            },
            {
                icon: "/icons8-messages-48.png",
                label: "Messages",
                href: "/list/messages",
                visible:["admin","teacher","student","parent"]

            },
            {
                icon: "/icons8-announcement-48.png",
                label: "Announcments",
                href: "/list/announcments",
                visible:["admin","teacher","student","parent"]
            },
        ]
    },
    {
        title:"OTHER",
        items:[
            {
                icon:"/icons8-male-user-48.png",
                label:"Profile",
                href:"/profile",
                visible:["admin","teacher","student","parent"]
            },
            {
                icon:"/icons8-settings-64.png",
                label:"Settings",
                href:"/settings",
                visible:["admin","teacher","student","parent"]
            },
            {
                icon:"/icons8-logout-48.png",
                label:"Logout",
                href:"/logout",
                visible:["admin","teacher","student","parent"]
            },
        ]
    }
]
const Menu = () => {
    return (
        <div className="mt-4 text-sm">
            {menuItems.map(i=>(
                <div className="flex flex-col gap-2" key={i.title}>
                    <span className="hiddden lg:block text-gray-400 font-light my-4">{i.title}</span>
                    {i.items?.map((item)=>{
                        if (item.visible.includes(role)){
                           return (
                                <Link href={item.href } key={item.label} className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 md:px-2 py-2 rounded-md hover:bg-yoSkyLight">
                                    <Image src={item.icon} alt="icon" width={20} height={20}/>
                                    <span className="hidden lg:block text-gary-600">{item.label}</span>
                                </Link>
                            )
                        }
                    })}
                </div>
            ))}
        </div>
    )
}

export default Menu

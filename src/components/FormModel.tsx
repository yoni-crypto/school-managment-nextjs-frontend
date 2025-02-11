"use client";
import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
// import TeacherForm from "./forms/TeacherForm";
// import StudentForm from "./forms/StudentsForm";
const TeacherForm =dynamic(()=>import("./forms/TeacherForm"),{
  loading: () => <p>Loading...</p>,
})
const StudentsForm =dynamic(()=>import("./forms/StudentsForm"),{
  loading: () => <p>Loading...</p>,
})
const AnnouncmentForm =dynamic(()=>import("./forms/AnnouncmentForm"),{
  loading: () => <p>Loading...</p>,
})
const AssignmenForm =dynamic(()=>import("./forms/AssignmenForm"),{
  loading: () => <p>Loading...</p>,
})
const ClassForm =dynamic(()=>import("./forms/ClassForm"),{
  loading: () => <p>Loading...</p>,
})
const EventForm =dynamic(()=>import("./forms/EventForm"),{
  loading: () => <p>Loading...</p>,
})
const ExamForm =dynamic(()=>import("./forms/ExamForm"),{
  loading: () => <p>Loading...</p>,
})
const LessonForm =dynamic(()=>import("./forms/LessonForm"),{
  loading: () => <p>Loading...</p>,
})
const ParentForm =dynamic(()=>import("./forms/ParentForm"),{
  loading: () => <p>Loading...</p>,
})
const ResultForm =dynamic(()=>import("./forms/ResultForm"),{
  loading: () => <p>Loading...</p>,
})
const SubjectForm =dynamic(()=>import("./forms/SubjectForm"),{
  loading: () => <p>Loading...</p>,
})
const forms: { 
  [key: string]: (type: "create" | "update", data?: any) => React.ReactNode;
} = {
  teacher: (type, data) => <TeacherForm type={type} data={data} />,
  student: (type, data) => <StudentsForm type={type} data={data} />,
  assignment: (type, data) => <AssignmenForm type={type} data={data} />,
  announcement: (type, data) => <AnnouncmentForm type={type} data={data}/>,
  class: (type, data) => <ClassForm type={type} data={data}/>,
  event: (type, data) => <EventForm type={type} data={data}/>,
  exam: (type, data) => <ExamForm type={type} data={data}/>,
  lesson: (type, data) => <LessonForm type={type} data={data}/>,
  parent: (type, data) => <ParentForm type={type} data={data}/>,
  result: (type, data) => <ResultForm type={type} data={data}/>,
  subject: (type, data) => <SubjectForm type={type} data={data}/>,
  
};

interface Props {
  table:
  | "teacher"
  | "student"
  | "parent"
  | "subject"
  | "class"
  | "lesson"
  | "exam"
  | "assignment"
  | "result"
  | "attendance"
  | "event"
  | "announcment";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}

const FormModel: React.FC<Props> = ({ table, type, data, id }) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create" ? "bg-yoYellow" : type === "update" ? "bg-yoSky" : "bg-yoPurple";

  const [open, setOpen] = useState(false)

  const Form = () => {
    return type === "delete" && id ? (
      <form action="" className="p-4 flex flex-col gap-4 ">
        <span className="text-center font-medium">All data will be lost. Are you sure you want to delete this {table}?</span>
        <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">Delete</button>
      </form>
    ) :type==="create" || type==="update"?(
      forms[table](type,data)
    ):"Form not found!"
  }
  return (
    <>
      <button onClick={() => setOpen(true)} className={`${size} flex items-center justify-center rounded-full ${bgColor}`}>
        <Image src={`/${type}.png`} alt={type} width={24} height={24} />
      </button>
      {open && (
        <div className="w-screen h-screen fixed left-0 top-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] shadow-lg">
            <Form />
            <div className="absolute top-4 right-4 cursor-pointer">
              <button onClick={() => setOpen(false)} aria-label="Close">
                <Image src="/icons8-close-30.png" alt="Close" width={14} height={14} />
              </button>
            </div>
          </div>
        </div>
      )}

    </>
  );
};

export default FormModel;

import React from "react";
import { CiMenuKebab } from "react-icons/ci";
import BigCalendar from "../components/BigCalendar";
import EventCalendar from "../components/EventCalender";
function Teacher() {
  return (-
    <div className="min-h-[60vh] bg-slate-100 w-full flex gap-2">
      {/* schedule calender */}
      <div className="bg-white lg:w-2/3">
        {/* title */}
        <div className="flex fustify-between w-full">
          <h1>schedule classes</h1>
          <CiMenuKebab className="rotate-90 text-4xl text-gray-500" />
        </div>
        {/* calender */}
        <div className="w-full">
          <BigCalendar />
        </div>
      </div>
      {/* event calender */}
      <div className="bg-white lg:w-1/3 flex flex-col gap-2">
        <EventCalendar />
      </div>
    </div>
  );
}

export default Teacher;

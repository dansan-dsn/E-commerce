import React, { useState } from "react";
import { format } from "date-fns";
// import { utcToZonedTime } from "date-fns-tz";

const CurrentDate = () => {
  // const [date, setDate] = useState({ formattedDate });

  const currentDate = new Date();
  const option = { month: "short", day: "2-digit" };
  const formattedDate = currentDate.toLocaleDateString("en-US", option);

  return (
    <div className="flex items-center text-sm flex-col">
      {/* <span>date</span> */}
      <span className="text-sm font-semibold mt-6 px-2 bg-gray-400 rounded-full hover:bg-gray-200">
        {formattedDate}
      </span>
    </div>
  );
};

export default CurrentDate;

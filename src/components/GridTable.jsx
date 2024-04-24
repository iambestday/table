import React from "react";

function GridTable({ data }) {
  return (
    <div className="flex justify-center items-center h-screen sm:p-8 md:p-8 lg:p-8 xl:p-8 2xl:p-8">
      <div className="relative flex flex-col justify-between bg-white  border-0 w-full h-full sm:m-7 sm:border sm:rounded-2xl md:m-7  md:border md:rounded-2xl  lg:m-7 lg:border lg:rounded-2xl xl:m-7 xl:border xl:rounded-2xl 2xl:m-7 2xl:border 2xl:rounded-2xl">
       <div >
          {/* Header */}
          <div className="border-b-[1px] border-[#d6d6d6] flex justify-between items-center ">
            <div className="m-6 h-10  w-[370px] rounded-lg border-[#c9c8c8] border flex flex-row items-center">
              <p className="mr-2 text-[12px] text-gray-500">جستجوی SSL...</p>
            </div>
            <div className="sm:hidden m-6 h-10 w-96 rounded-lg border"></div>
          </div>
          {/* Mobile */}
          <div className="sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden text-[12px] font-normal ">
            {data.bulk.map((row) => (
              <React.Fragment key={row.id}>
                <div className="border-[#c9c8c8] border-b mb-5 w-full">
                  <div className="grid grid-rows-7 grid-flow-col gap-4  px-7 py-2">
                    {data.tableHeaders.map(
                      (header, index) =>
                        index < 7 && <div key={header}>{header}</div>
                    )}

                    <div className="text-left">{row.number}</div>
                    <div className="text-left">{row.description.service}</div>
                    <div className="text-left">{row.period}</div>
                    <div className="text-left">{row.startDate[1]}</div>
                    <div className="text-left">{row.endDate[1]}</div>
                    <div className="text-left">{row.amount}</div>
                    <div className="text-left">{row.status}</div>
                  </div>
                  <div class="grid grid-cols-3 text-center my-5">
                    <div class="col-span-1">{row.tools}</div>
                    <div class="col-span-1">{row.tools}</div>
                    <div class="col-span-1">{row.tools}</div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
          {/* Tablet */}
          <div className="hidden md:block sm:block lg:hidden">
            {data.bulk.map((row) => (
              <React.Fragment key={row.id}>
                <div className="grid grid-rows-7 grid-flow-col gap-4 text-[12px] font-normal  border-[#c9c8c8] border-b px-7 py-2 ">
                  {data.tableHeaders.map(
                    (header, index) =>
                      index < 7 && <div key={header}>{header}</div>
                  )}

                  <div>{row.number}</div>
                  <div>{row.description.service}</div>
                  <div>{row.period}</div>
                  <div>{row.startDate[1]}</div>
                  <div>{row.endDate[1]}</div>
                  <div>{row.amount}</div>
                  <div>{row.status}</div>

                  <div className="grid grid-rows-subgrid gap-4 row-span-6">
                    <div className="row-start-2">{row.tools}</div>
                    <div className="row-start-4">{row.tools}</div>
                    <div className="row-start-7">{row.tools}</div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
          {/* Desktop */}
          <div className=" hidden lg:block xl:block 2xl:block ">
            <div className="grid grid-cols-10 text-[12px] font-normal py-2  ">
              {data.tableHeaders.map((header, index) => (
                <div
                  key={index}
                  className={`col-span-${index === 1 ? "3" : "1"} px-8 py-2`}
                >
                  {header}
                </div>
              ))}
            </div>
            {data.bulk.map((row) => (
              <React.Fragment key={row.id}>
                <div
                  className={`grid grid-cols-10 text-[12px] font-normal py-2 ${
                    row.id % 2 === 1 ? "bg-[#dfdfdf]" : ""
                  }`}
                >
                  <div className="col-span-1 px-8 py-2">{row.number}</div>
                  <div className="col-span-3 px-8 py-2">
                    <div>{row.description.service} </div>{" "}
                    <div>{row.description.features.join(",")}</div>
                  </div>
                  <div className="col-span-1 px-8 py-2">{row.period}</div>
                  <div className="col-span-1 px-8 py-2">{row.startDate[1]}</div>
                  <div className="col-span-1 px-8 py-2">{row.endDate[1]}</div>
                  <div className="col-span-1 px-8 py-2">{row.amount}</div>
                  <div className="col-span-1 px-8 py-2">{row.status}</div>
                  <div className="col-span-1 px-8 py-2">{row.tools}</div>
                </div>
              </React.Fragment>
            ))}
          </div>
          </div>
        {/* Footer */}
        <div className="w-full sm:border-t-[1px] md:border-t-[1px] lg:border-t-[1px] xl:border-t-[1px] 2xl:border-t-[1px]  border-[#d6d6d6] flex justify-between items-center px-4">
          <div className="m-6 h-10 w-[370px] rounded-lg border"></div>
          <button className="h-[32px] w-[48px] bg-[#6E44C6] text-white text-[10px] rounded-full">
            برو
          </button>
        </div>
      </div>
    </div>
  );
}

export default GridTable;

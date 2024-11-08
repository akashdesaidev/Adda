<<<<<<< HEAD
import React from "react";

function StatItem() {
  const array = [
    { key: "6", sign: "+", title: "Specialised Courses" },
    { key: "4", sign: "+", title: "Continents" },
    { key: "5", sign: "+", title: "Top Universities" },
    { key: "98", sign: "%", title: "Student satisfactions" },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 py-4 md:p-4">
      {array.map((d, i) => {
        return (
          <div
            key={i}
            className="flex flex-col justify-center items-center my-3"
          >
            <p className="text-4xl text-gray-800 font-bold">
              {d?.key || ""}
              <span className="text-3xl text-red-500">{d?.sign || ""}</span>
            </p>
            <p className="text-sm text-gray-500 ">{d?.title || ""}</p>
          </div>
        );
      })}
    </div>
  );
}

export default StatItem;
=======
import React from "react";

function StatItem() {
  const array = [
    { key: "6", sign: "+", title: "Specialised Courses" },
    { key: "4", sign: "+", title: "Continents" },
    { key: "5", sign: "+", title: "Top Universities" },
    { key: "98", sign: "%", title: "Student satisfactions" },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {array.map((d, i) => {
        return (
          <div
            key={i}
            className="flex flex-col justify-center items-center gap-2 my-3"
          >
            <p className="text-4xl text-gray-800 font-bold">
              {d?.key || ""}
              <span className="text-3xl text-red-500">{d?.sign || ""}</span>
            </p>
            <p className="text-sm text-gray-500">{d?.title || ""}</p>
          </div>
        );
      })}
    </div>
  );
}

export default StatItem;
>>>>>>> 9f7785b38c8ffccb2419e1b7621e960cd48aa7b6

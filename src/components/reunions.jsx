import React from "react";

const Events = () => {
  const events = [
    {
      dateStart: "Sep 07, 2024",
      dateEnd: "Sep 09, 2024",
      title: "Alumni Get together of 1978 Batch",
      description: "Alumni Get together of 1978 Batch",
    },
    {
      dateStart: "Sep 25, 2024",
      dateEnd: "Sep 27, 2024",
      title:
        "Diamond Jubilee Reunion of 1964 Batch (Including 1966 B.Arch.)",
      description:
        "Diamond Jubilee Reunion celebration of the 1964 Batch (Including 1966 B.Arch.) will be organized during Sep 25 - 27, 2024.",
    },
    {
      dateStart: "Sep 28, 2024",
      dateEnd: "Oct 01, 2024",
      title:
        "Alumni Get together of Earth Sciences Branch, 1974 and 1975 Batches",
      description:
        "Alumni Get together of Earth Sciences Branch, 1974 and 1975 Batches",
    },
    {
      dateStart: "Oct 16, 2024",
      dateEnd: "Oct 18, 2024",
      title:
        "Ruby Jubilee Reunion of 1984 Batch (Including 1985 B.Arch.)",
      description:
        "Ruby Jubilee Reunion celebration of the 1984 Batch (Including 1985 B.Arch.) will be organized during Oct 16-18, 2024.",
    },
    {
      dateStart: "Nov 15, 2024",
      dateEnd: "Nov 17, 2024",
      title:
        "Silver Jubilee Reunion of 1999 Batch (Including 2000 B.Arch.)",
      description:
        "Silver Jubilee Reunion celebration of 1999 Batch (Including 2000 B.Arch.) will be organized during Nov 15-17, 2024.",
    },
    {
      dateStart: "Dec 02, 2024",
      dateEnd: "Dec 04, 2024",
      title:
        "Golden Jubilee Reunion of 1974 Batch (Including 1975 B.Arch.)",
      description:
        "Golden Jubilee Reunion celebration of the 1974 Batch (Including 1975 B.Arch.) will be organized during Dec 02-04, 2024.",
    },
    {
      dateStart: "Dec 13, 2024",
      dateEnd: "Dec 15, 2024",
      title:
        "Coral Jubilee Reunion of 1989 Batch (Including 1990 B.Arch.)",
      description:
        "Coral Jubilee Reunion celebration of the 1989 Batch (Including 1990 B.Arch.) will be organized during Dec 13-15, 2024.",
    },
  ];

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-lg mt-[150px]">
      <h1 className="text-2xl font-bold text-center mb-6">Events</h1>
      <div className="space-y-6">
        {events.map((event, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <svg
              height="20"
              width="20"
              className="flex-shrink-0"
            >
              <circle cx="10" cy="10" r="10" fill="#BD3D20" />
            </svg>
            <div className="flex-shrink-0 text-center">
              <p className="font-medium">
                {event.dateStart}
                <br />
                <i>to</i>
                <br />
                {event.dateEnd}
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                {event.title}
              </h2>
              <p className="text-sm text-gray-600">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;

import { useEffect, useState } from "react";

const Events = () => {
  const [events, setEvents] = useState([]);
  const url = "http://localhost:3000/event";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const repsonse = await fetch(url);
        const json = await repsonse.json();
        setEvents(json);
      } catch (e) {
        console.error("error", e);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Ticket Name
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Ticket Type
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Ticket Price
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Ticket Availability
                  </th>
                </tr>
              </thead>
              <tbody>
                {events.map((val, index) => {
                  return (
                    <tr key={index} className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4">
                        {val.name}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {val.date}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {val.description}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {val.ticketName}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {val.ticketType}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {val.ticketPrice}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {val.ticketAvailability}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;

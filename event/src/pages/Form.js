import useForm from "../useForm";


const FORM_ENDPOINT = "http://localhost:3000/event";

const Form = () => {
  const additionalData = {
    sent: new Date().toISOString(),
  };

  const { handleSubmit, status, message } = useForm({
    additionalData,
  });

  if (status === "success") {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">{message}</div>
      </>
    );
  }

  if (status === "error") {
    return (
      <>
        <div className="text-2xl">Something bad happened!</div>
        <div className="text-md">{message}</div>
      </>
    );
  }

  return (
    <form action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST">
      <div className="pt-0 mb-3">
        <input
          type="text"
          placeholder="Event name"
          name="name"
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <input
          type="date"
          placeholder="Event date"
          name="date"
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <textarea
          placeholder="Event description"
          name="description"
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <input
          type="text"
          placeholder="Ticket name"
          name="ticketName"
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <select name="ticketType" placeholder="Ticket type"className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none">
            <option value="Adult">Adult</option>
            <option value="Child">Child</option>
            <option value="Family">Family</option>
        </select>
      </div>
      <div className="pt-0 mb-3">
        <input
          type="text"
          placeholder="Ticket price"
          name="ticketPrice"
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <select name="ticketAvailability" placeholder="Ticket availability"className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none">
            <option value="Adult">Availabile</option>
            <option value="Child">Sold out</option>
        </select>
      </div>
      {status !== "loading" && (
        <div className="pt-0 mb-3">
          <button
            className="active:bg-blue-600 hover:shadow-lg focus:outline-none px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 rounded shadow outline-none"
            type="submit"
          >
            Submit event
          </button>
        </div>
      )}
    </form>
  );
};

export default Form;

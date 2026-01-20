import { MoveLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export default function EventForms() {
  const [Event, defineEvents] = useState(null);
  const { eventID } = useParams();
  const navigate = useNavigate()

  const get_Events_by_Id = async () => {
    let response = await fetch(
      `${import.meta.env.VITE_SERVER_ROOT}/events/${eventID}`,
      {
        method: "GET",
      }
    );
    if (!response.ok) {
      throw new Error("lors lors du chargement");
    }

    let data = await response.json();

    return data;
  };

  const confirmInscription = async (event) => {
    event.preventDefault();
    let formdata = new FormData(event.target);
    let form_data = Object.fromEntries(formdata);

    await axios({
      url: `${
        import.meta.env.VITE_SERVER_ROOT
      }/events/participant`,
      method: "POST",
      data: {
        ...form_data,
        event_id: eventID
      },
    });
    
    navigate("/event")
    toast.success("Votre enregistement a bien ete pris en compte")
  };

  useEffect(() => {
    (async function () {
      let event_data = await get_Events_by_Id();
      defineEvents(event_data);
    })();
  }, []);

  if(Event === null){
    return <></>
  }

  return (
    <div className="bg-white fixed z-20 h-screen w-screen flex justify-center items-center py-16">
      <Link
        to="/event"
        className="bg-violet-100 text-violet-800 h-15 w-15 flex justify-center items-center rounded-full fixed top-5 left-5"
      >
        <MoveLeft size={30} />
      </Link>
      <form
        className="w-85 md:w-300 flex flex-col space-y-5 items-center"
        onSubmit={confirmInscription}
      >
        <h1 className="text-3xl md:text-4xl font-semibold capitalize text-violet-800">
          Register for event
        </h1>
        <div className="bg-gray-200 h-[0.5px] w-full"></div>

        <div className="flex flex-col-reverse h-auto overflow-scroll md:flex-row w-full space-x-4 space-y-10">
          <div className="w-full rounded-xl border border-gray-200 bg-gray-50 p-4 flex flex-col w-full">
            <span className="text-lg md:text-2xl text-gray-600 font-semibold">
              {Event?.name}
            </span>
            <span className="text-lg text-gray-400">{Event?.place}</span>
            <span className="text-lg text-gray-400">
              {Event?.date.split("T")[0]}
            </span>
          </div>

          <div className="flex flex-col space-y-2 w-full md:mb-0 mb-5">
            <div className="w-full flex flex-col space-y-0 group">
              <span className="text-gray-400 text-sm group-focus-within:text-violet-800">
                Name
              </span>

              <input
                type="text"
                name="name"
                className="border border-gray-200 outline-none p-3 md:p-4 rounded-md w-full text-md md:text-xl placeholder:text-md text-gray-700 focus:border-violet-800 focus:border- transition duration-500"
                required
                placeholder="Your Name"
                autoComplete="off"
              />
            </div>

            <div className="w-full flex flex-col space-y-0 group">
              <span className="text-gray-400 text-sm group-focus-within:text-violet-800">
                Phone
              </span>

              <input
                type="tel"
                name="phone"
                className="border border-gray-200 outline-none p-3 md:p-4 rounded-md w-full text-md md:text-xl placeholder:text-md text-gray-700 focus:border-violet-800 focus:border- transition duration-500"
                required
                placeholder="6 XX XX XX XX"
                autoComplete="off"
              />
            </div>

            <div className="w-full flex flex-col space-y-0 group">
              <span className="text-gray-400 text-sm group-focus-within:text-violet-800">
                Email
              </span>

              <input
                type="email"
                name="email"
                className="border border-gray-200 outline-none p-3 md:p-4 rounded-md w-full text-md md:text-xl placeholder:text-md text-gray-700 focus:border-violet-800 focus:border- transition duration-500"
                required
                placeholder="xyz@example.com"
                autoComplete="off"
              />
            </div>

            <div className="w-full flex flex-row justify-between items-center">
              <button
                type="submit"
                className="w-40 p-3 bg-violet-800 text-white font-bold text-xl rounded-xl"
              >
                Register
              </button>

              <span className="text-2xl text-gray-600 font-semibold">
                {Event?.price === 0 ? "Free" : new Intl.NumberFormat("fr-FR", {
                  style: "currency",
                  maximumFractionDigits: 0,
                  currency: "XAF"
                }).format(Event?.price)}
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

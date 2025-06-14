import { MoveLeft, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Conatct() {
    const [status, setSatus] = useState()

    const formSubmitted = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        let data = {}
        for (let [key, value] of formData.entries()) {
            data[key] = value
        }

        emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, data)
            .then(() => {
                setSatus("success")
            })
            .catch(()=>setSatus("failed"))
    }

    useEffect(() => {
        setTimeout(() => {
            setSatus("none")
        }, 5000);
    }, [status])

    useEffect(() => {
        function initCard() {
            var platform = new H.service.Platform({
                apiKey: import.meta.env.VITE_API_KEY
            })

            var maptypes = platform.createDefaultLayers();
            var map = new H.Map(
                document.getElementById('map'),
                maptypes.vector.normal.map,
                {
                    zoom: 14,
                    center: { lat: 5.6257, lng: 10.25596 }
                }
            );

            var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
            var ui = H.ui.UI.createDefault(map, maptypes);

            var marker = new H.map.Marker({ lat: 5.6257, lng: 10.25596 })
            map.addObject(marker)
        }

        initCard()
    }, [])

    return (
        <>
            <section id="home" className="h-90 md:h-150 bg-gray-100 flex justify-center items-center bg-[url('/image/background.jpg')] bg-cover bg-center relative">
                <div className="h-full w-full from-violet-900 from-10% to-violet-005 bg-linear-to-b md:bg-linear-to-r z-5 flex justify-center md:items-start items-center lg:px-40 flex-col">
                    <h1 className="text-white text-3xl lg:text-6xl font-bold text-center">CONTACT</h1>
                    <h2 className="text-center text-gray-200 text-md md:text-xl lg:text-3xl">send an email to the member of the association</h2>
                    <div className="flex items-stretch md:my-4">

                        <NavLink to="/" className="transition transition-discrete border-2 border-white bg-transparent me-5 md:p-4 p-2 px-4 mt-4  text-white rounded-xl md:px-20 text-black font-medium text-md active:bg-white active:text-black flex">
                            <MoveLeft className="mx-2" />
                            RETURN
                        </NavLink>
                    </div>
                </div>
            </section>

            <section className="flex justify-center space-y-10 py-8 px-4 md:px-85 flex-col">
                <div className="flex md:flex-row w-full h-150 md:h-100 flex-col shadow-md rounded-md overflow-hidden">
                    <div className="h-full w-full bg-gray-100" id="map">

                    </div>
                    <div className="p-4 w-full h-full flex flex-col space-y-4 bg-white">
                        <span className="text-start md:text-3xl text-xl font-bold text-violet-800">Get in Touch</span>
                        <span className="text-start text-md text-gray-400 md:text-lg text-md">GLCH, The best is right here for you and your family members.</span>

                        <hr className="border-gray-300"></hr>
                        <span className="text-start md:text-lg text-md font-semibold text-gray-700">Mbouda, Bametap, Douala, B.P. 13208 yaoundé, cameroun</span>

                        <div className="flex justify-center space-x-4 w-full flex-row items-center">
                            <div className="">
                                <Phone size={60} className="text-violet-800" />
                            </div>
                            <div className="w-[80%] flex flex-col space-y-2 ">
                                <span className="text-start text-xl font-semibold text-gray-700">( +237 ) 659 375 114</span>
                                <p className="text-md md:text-xl text-violet-800 font-semibold">grandluccommunity<br className="md:hidden"></br>health@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex justify-center items-center w-full flex-col p-8">
                        <h1 className="text-xl font-medium text-violet-800">CONCTACT WITH</h1>
                    </div>
                    <h1 className="text-2xl font-semibold text-center text-black capitalize lg:text-3xl">Write a message</h1>

                    <form className="flex flex-col w-full justify-center md:px-70 space-y-5 py-5 items-center" onSubmit={formSubmitted}>

                        {status === "success" ? (
                            <div className="bg-green-100 border-1 md:w-100 w-80 text-center p-2 border-green-500 rounded-lg my-4 text-green-500">
                                <span>Email sent successfully</span>
                            </div>
                        ) : setSatus === "failed" ? (
                            <div className="bg-red-100 border-1 md:w-100 w-80 text-center p-2 border-red-500 rounded-lg my-4 text-red-500">
                                <span>Error sending email</span>
                            </div>
                        ) : (<></>)}

                        <div className="grid md:grid-cols-2 gap-3 md:gap-5">
                            <div className="flex flex-col">
                                <span className="md:text-md text-sm text-gray-400">Name :</span>
                                <input type="text" name="name" className="md:p-3 p-2 outline-none border-1 border-gray-300 rounded-lg placeholder:text-gray-300 text-gray-600 font-semibold placeholder:font-normal" placeholder="full name" required />
                            </div>

                            <div className="flex flex-col">
                                <span className="md:text-md text-sm text-gray-400">Email :</span>
                                <input type="email" name="email" className="md:p-3 p-2 outline-none border-1 border-gray-300 rounded-lg placeholder:text-gray-300 text-gray-600 font-semibold placeholder:font-normal" placeholder="xyz@example.com" required />
                            </div>

                            <div className="flex flex-col">
                                <span className="md:text-md text-sm text-gray-400">Phone :</span>
                                <input type="tel" name="phone" className="md:p-3 p-2 outline-none border-1 border-gray-300 rounded-lg placeholder:text-gray-300 text-gray-600 font-semibold placeholder:font-normal" placeholder="6 xx xx xx xx" required />
                            </div>

                            <div className="flex flex-col">
                                <span className="md:text-md text-sm text-gray-400">Subject :</span>
                                <input type="text" name="subject" className="md:p-3 p-2 outline-none border-1 border-gray-300 rounded-lg placeholder:text-gray-300 text-gray-600 font-semibold placeholder:font-normal" placeholder="subject" required />
                            </div>
                        </div>

                        <div className="flex flex-col w-full">
                            <span className="md:text-md text-sm text-gray-400">Message :</span>
                            <textarea name="message" className="md:p-3 p-2 outline-none border-1 border-gray-300 rounded-lg placeholder:text-gray-300 text-gray-600 font-semibold placeholder:font-normal h-50" placeholder="Write a message" required></textarea>
                        </div>

                        <button type="submit" className="bg-violet-800 text-white w-80 p-3 rounded-xl text-xl font-bold">
                            Send
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
}
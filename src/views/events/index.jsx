import { MoveLeft } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Event(){
    return (
        <>
            <section id="home" className="h-90 md:h-150 bg-gray-100 flex justify-center items-center bg-[url('/image/background.jpg')] bg-cover bg-center relative">
                <div className="h-full w-full from-violet-900 from-10% to-violet-005 bg-linear-to-b md:bg-linear-to-r z-5 flex justify-center md:items-start items-center lg:px-40 flex-col">
                    <h1 className="text-white text-3xl lg:text-6xl font-bold text-center">EVENTS</h1>
                    <h2 className="text-center text-gray-200 text-md md:text-xl lg:text-3xl">Discover current and upcoming events</h2>
                    <div className="flex items-stretch md:my-4">

                        <NavLink to="/" className="transition transition-discrete border-2 border-white bg-transparent me-5 md:p-4 p-2 px-4 mt-4  text-white rounded-xl md:px-20 text-black font-medium text-md active:bg-white active:text-black flex">
                            <MoveLeft className="mx-2" />
                            RETURN
                        </NavLink>
                    </div>
                </div>
            </section>
        </>
    )
}
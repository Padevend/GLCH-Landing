import { ArrowDownToLine, Eye, MoveLeft, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// images
const images = import.meta.glob('../../assets/gallery/*.{jpg,png,jpeg,webp}', {
    eager: true,
    query: '?url',
    import: 'default'
})

export default function Galerie() {
    const [isPreview, startPreview] = useState(false);
    const [index, setIndex] = useState(0);

    var Images = Object.values(images)

    return (
        <>
            <section id="home" className="h-90 md:h-150 bg-gray-100 flex justify-center items-center bg-[url('/image/background.jpg')] bg-cover bg-center relative">
                <div className="h-full w-full from-violet-900 from-10% to-violet-005 bg-linear-to-b md:bg-linear-to-r z-5 flex justify-center md:items-start items-center lg:px-40 flex-col">
                    <h1 className="text-white text-3xl lg:text-6xl font-bold text-center">GALLERY</h1>
                    <h2 className="text-center text-gray-200 text-md md:text-xl lg:text-3xl">Relive the association's events</h2>
                    <div className="flex items-stretch md:my-4">

                        <NavLink to="/" className="transition transition-discrete border-2 border-white bg-transparent me-5 md:p-4 p-2 px-4 mt-4  text-white rounded-xl md:px-20 text-black font-medium text-md active:bg-white active:text-black flex">
                            <MoveLeft className="mx-2" />
                            RETURN
                        </NavLink>
                    </div>
                </div>
            </section>
            <section className="p-4 md:py-10 md:px-50">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Images.map((src, index) => (
                        <button key={index} className="relative"
                            onClick={()=>{
                                setIndex(index)
                                startPreview(true)
                            }}>
                            <div className="absolute inset-0 hover:bg-black-005 hover:opacity-100 opacity-0 flex justify-center items-center rounded-xl">
                                <Eye strokeWidth={2} size={50} className="text-2xl text-white" />
                            </div>
                            <img src={src} style={{
                                height: "100%",
                                width: "100%",
                                objectFit: "cover"
                            }} className="rounded-xl"></img>
                        </button>
                    ))}
                </div>
            </section>
            {isPreview ? (
                <section className="absolute bg-white-005 backdrop-blur-xs z-25 w-screen h-screen inset-0 flex justify-center items-center">
                    <div className="p-3 bg-white shadow-2xl rounded-lg flex flex-col space-y-3 w-85 md:w-150">
                        <div className="flex justify-end">
                            <div onClick={()=>{
                                startPreview(false)
                            }}>
                                <X />
                            </div>
                        </div>
                        <div className="bg-gray-100 h-85 md:h-110 flex justify-center">
                            <img src={Images[index]} className="h-full object-cover" alt="" />
                        </div>
                        <button className="bg-violet-800 rounded-lg flex items-center text-white text-xl flex justify-between font-semibold"
                            onClick={()=>{
                                const link = document.createElement('a')
                                link.href = Images[index]
                                link.download = `img_${uuidv4()}`
                                link.click()
                                document.body.removeChild(link)
                                startPreview(false)
                            }}>
                            <div className="p-5 bg-violet-900">
                                <ArrowDownToLine />
                            </div>
                            <span className="w-full">DOWNLOAD</span>
                        </button>
                    </div>
                </section>
            ) : (<></>)}

        </>
    )
}
// import image
import { use, useState } from "react"
import img01 from "../../assets/image/img01.jpg"
import img02 from "../../assets/image/img02.jpg"
import img04 from "../../assets/image/img04.jpg"
import img05 from "../../assets/image/img05.jpg"

// import icon 
import assistanceIcon from "../../assets/icon/assistance.png"
import healthcareIcon from "../../assets/icon/healthcare.png"
import heartIcon from "../../assets/icon/heart.png"
import responsibilityIcon from "../../assets/icon/responsibility.png"
import { ArrowDown, ChevronDown, Minus } from "lucide-react"

export default function FullPage() {
    const [isReadMore, setIsReadMore] = useState(false);
    const [activeFAQ, setActiveFAQ] = useState(0)

    var Abouts = [
        {
            title: "Mutual assistance",
            content: `It is a meeting of all people of good faith, altruists, honesty and
                    compassionate in a salt aim to help each other in matters of health in the aspects 
                    social, financial and moral. a community of mutual help between members facilitates
                    access to care for all.`,
            cover: img02,
        },
        {
            title: "Optimal monitoring",
            content: `the association takes care of monitoring all its members and establishing a relationship of trust 
                    with its latest to help them better understand their state of health and the conditions in 
                    which they are located for the best possible treatment.`,
            cover: img05,
        },
        {
            title: "Health promotion",
            content: `Through the concept of "social medicine" the body aims to create a framework of solidarity
                    and culture within society to enable everyone to be aware of health and 
                    its assets for the foundation of a brighter future.`,
            cover: img04,
        },
        {
            title: "Innovation",
            content: `Although the aim is a cultural environment it is not to neglect technological progress
                    in the field of medicine, so the objective will also be to master these technologies
                    within traditional societies to overcome situations in which the usual techniques are
                    ineffective.`,
            cover: img01,
        },
    ]

    var services = [
        {
            icon: healthcareIcon,
            name: "Medical Assistance",
            description: "emergency, laboratory, screening, specialists"
        },
        {
            icon: responsibilityIcon,
            name: "Social assistance",
            description: "nutrition, sport, mental"
        },
        {
            icon: assistanceIcon,
            name: "Financial assistance",
            description: "For the most deprived, an aid solution will be offered to them"
        },
        {
            icon: heartIcon,
            name: "Health Care Coverage",
            description: "Patients are fully supported during their treatment"
        },
    ]

    var Prices = [
        {
            name: "FREE MEMBER",
            price: "0"
        },
        {
            name: "ACTIVE MEMBER",
            price: "10 000"
        },
        {
            name: "HONORARY MEMBER",
            price: "50 000"
        },
        {
            name: "DONOR",
            price: "+ 50 000"
        },
    ]

    var faqs = [
        {
            question: "Why become a member?",
            answer: `By becoming a member of the Grand Luc community, you benefit from full support from the community, 
                    taking into account your financial means and other parameters. You have the opportunity to share with other 
                    community members and more. Upon registration, you receive a membership number and a membership 
                    card valid for one year, allowing you access to all services provided by the community.`
        },
        {
            question: "Who can become a member?",
            answer: `The community is open to anyone who wishes to join, whether they are already sick or want to prevent illness. 
                    This applies regardless of age, whether they are children, adolescents, or adults. Everyone will receive 
                    appropriate treatment.`
        },
        {
            question: "How to become a member?",
            answer: `To become a member of the community, simply fill out the registration form below with the requested information.
                    Once registered, you will receive confirmation and should visit a community focal point to collect your membership card.`
        }
    ]

    return (
        <>
            <section id="home" className="z-9 h-screen bg-gray-100 flex justify-center items-center bg-[url('/image/background.jpg')] bg-cover bg-center relative">
                <div className="h-full w-full from-violet-900 from-10% to-violet-005 bg-linear-to-b md:bg-linear-to-r z-5 flex justify-center md:items-start items-center lg:px-40 flex-col">
                    <h1 className="text-white text-3xl lg:text-6xl font-bold text-center">GRAND LUC COMMUNITY HEALTH</h1>
                    <h2 className="text-center text-gray-200 text-md md:text-xl lg:text-3xl py-8">One family, One heart, One struggle, One solution, One health</h2>
                    <div className="flex items-stretch md:my-4">
                        <button className="transition transition-discrete border-2 border-white bg-transparent me-5 p-4 px-6 md:px-20 text-white font-medium text-md active:bg-white active:text-black flex flex-row space-x-4">
                            <ArrowDown />
                            <span>MORE</span>
                        </button>
                        <button className="transition transition-discrete border-2 border-white bg-white me-5 p-4 px-10 md:px-20 text-black font-medium text-md active:bg-transparent active:text-white">
                            START
                        </button>
                    </div>
                </div>
            </section>
            <section id="about" className="flex justify-center flex-col md:px-40 px-2">
                <div className="flex justify-center items-center w-full flex-col p-8">
                    <h1 className="text-4xl font-medium text-violet-800">ABOUT US</h1>
                    <h2 className="text-lg font-thin italic text-gray-400">Together to greatness</h2>
                </div>
                <div className="grid md:grid-cols-2 py-10 gap-5 md:gap-10">
                    {Abouts.map((stack, index) => (
                        <div className="w-full h-[400pt] md:h-auto rounded-lg shadow-md shadow-violet-004 p-4 flex flex-col md:flex-row" key={index}>
                            <div className="bg-gray-100 h-full md:h-[200pt] w-full md:w-[300pt] rounded-lg relative overflow-hidden flex justify-center items-center">
                                <img src={stack.cover} style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover"
                                }} />
                            </div>
                            <div className="w-full flex flex-col my-4 md:mx-4 md:h-auto">
                                <span className="p-3 text-center md:text-start text-2xl text-violet-900">{stack.title}</span>
                                <p className="md:text-lg text-sm font-normal text-gray-500 md:h-full px-4">{stack.content}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col pt-5">
                    <div className="py-5 px-2">
                        <div className="w-50 p-[2px] rounded-full bg-violet-700"></div>
                        <h1 className="my-4 text-gray-700 font-bold  text-2xl md:text-3xl">About Our Association</h1>
                    </div>
                    <div className={`grid md:grid-cols-2 gap-5 mb-10 md:gap-10 text-gray-400 text-md px-4 md:h-auto ${isReadMore ? "h-auto" : "h-100"} overflow-hidden relative`}>
                        <div>
                            The promotion of health and prevention have always been among the greatest challenges in developing
                            countries, mainly due to the lack of medical personnel, insufficient infrastructure, the absence of
                            a trusting relationship between patients and medical professionals, and the lack of medical information
                            for informed decision-making. Above all, low levels of education among the population further exacerbate
                            these issues.
                            Despite these multiple disadvantages, we Africans possess certain strengths, particularly our altruism,
                            compassion, and deep attachment to our roots and cultural values, which can greatly support health promotion.
                            However, our cultural differences regarding modern and conventional medicine have also severely impacted
                            community health and well-being, leading to the creation of GLCH.
                            The concept of <strong>"social medicine"</strong> to improve community health stems from the work of a great man,
                            the <strong>Honorable Tchoffo Lucas</strong>, known as "Grand Luc," who dedicated his life to the development of his country
                            through social and financial aid to anyone in distress. He always emphasized health, encouraging and
                            assisting those in medical need.
                            Inspired by his legacy, his daughter, <strong>Dr. Tchoffo Bakem Scherrez </strong>, a graduate of St. George’s University
                            School of Medicine in Grenada, USA, and holder of a Master’s and a Bachelor of Science degree from the UK,
                            decided to honor him by working on this concept. She aimed to create an apolitical, non-profit association
                            to introduce a new vision of African medicine into cultural practices, promote and improve hygiene and
                            lifestyle, and ensure the maintenance of a healthy state of well-being.
                        </div>
                        <div>
                            Our deep-rooted culture and traditionalism are weakening our community health, as ecological changes,
                            nutrition, development, and modern technology predispose us to premature deaths—especially in a medical
                            system where individualized healthcare management is almost nonexistent and does not meet the standards
                            of international medical infrastructure. Therefore, we must focus all our efforts on community health to
                            improve life expectancy and the development of our respective communities because health is wealth. We
                            also need to find a balance between healthcare and our traditions and cultures by coming together in our
                            communities, regardless of status, in the name of health. Additionally, we must improve our healthcare
                            system to facilitate access to medical care whenever intervention is needed.
                            <br></br>
                            <br></br>
                            We must ensure that our cultural identity is well integrated into our community health interventions. It
                            is also essential to educate communities on the importance of timely medical intervention to avoid
                            unnecessary expenses for members in critical conditions and to consider palliative care when needed.
                            Informed decision-making strengthens community prevention and encourages everyone to be more attentive
                            to their health.
                        </div>
                        <div className={`from-gray-100 to-transparent w-full bottom-0 rounded-b-md text-center md:hidden ${isReadMore ? "relative" : "absolute bg-linear-to-t p-2"}`} >
                            <button className={`${isReadMore ? "text-violet-800 border-1 bg-transparent" : "text-white bg-violet-800"}  px-4 py-1 font-medium rounded-full`}
                                onClick={(e) => {
                                    setIsReadMore(!isReadMore)
                                }}>
                                {isReadMore ? "fold" : "Read more"}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="services" className="flex justify-center flex-col md:px-40 px-2 ">
                <div className="flex justify-center items-center w-full flex-col py-8">
                    <h1 className="text-2xl md:text-4xl font-medium text-violet-800">OUR SERVICES</h1>
                    <h2 className="text-sm md:text-lg font-thin italic py-2 text-gray-400 text-center">We offer you the best primary preventive care services</h2>
                    <div className="w-25 md:w-50 p-[1px] rounded-full bg-violet-700"></div>
                </div>
                <div className="grid md:grid-cols-4 py-8 gap-10 md:px-30">
                    {services.map((stack, index) => (
                        <>
                            <div className="flex justify-center items-center flex-col w-full" key={index}>
                                <div className="p-4 shadow-sm shadow-violet-004 rounded-md">
                                    <img src={stack.icon} className="h-18 w-18 md:h-25 md:w-25" alt={stack.name} />
                                </div>
                                <span className="text-xl py-5 md:text-2xl font-medium">{stack.name}</span>
                                <p className="text-center text-gray-400 text-md md:text-lg h-20">{stack.description}</p>
                            </div>
                        </>
                    ))}
                </div>
            </section>

            <section>
                <div className="bg-white">
                    <div className="px-6 py-8 mx-auto">
                        <h1 className="text-2xl font-semibold text-center text-violet-800 capitalize lg:text-3xl">Pricing Plan</h1>

                        <div className="grid grid-cols-1 md:mx-80 gap-8 mt-6 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-4">
                            {Prices.map((stack, index) => (
                                <>
                                    <div className="w-full p-5 space-y-4 md:space-y-8 text-center border border-gray-200 rounded-lg">
                                        <p className="font-medium text-gray-500 uppercase">{stack.name}</p>

                                        <h2 className="text-4xl md:text-3xl font-semibold text-gray-800 uppercase">
                                            {stack.price} XAF
                                        </h2>

                                        <p className="font-medium text-gray-500">Per year</p>
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center space-y-4">
                    <span className="p-2 text-center text-gray-400 max-w-150">
                        Why wait until you're sick to go to the hospital?
                        Register now and become a member of the community.
                    </span>
                    <a href="" className="bg-violet-800 text-white font-medium p-3 w-50 text-xl rounded-full text-center font-semibold">
                        Get cards
                    </a>
                </div>
            </section>

            <section className="bg-white">
                <div className="container max-w-4xl px-6 py-10 mx-auto">
                    <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl">Frequently asked questions</h1>

                    <div className="mt-12 space-y-4">
                        {faqs.map((stack, index) => (
                            <div className="border-2 border-gray-100 rounded-lg" key={index}>
                                <button className="flex items-center justify-between w-full p-6 py-4 md:py-6"
                                    onClick={()=>{
                                        setActiveFAQ(index)
                                    }}>
                                    <h1 className="font-semibold text-gray-700 text-start">{stack.question}</h1>

                                    <span className="p-1 rounded-[50%] flex justify-center items-center bg-gray-100">
                                        <Minus className="text-gray-500" />
                                    </span>
                                </button>

                                {activeFAQ === index ? (
                                    <>
                                        <hr className="border-gray-200"></hr>

                                        <p className="p-5 text-sm text-gray-500">
                                            {stack.answer}
                                        </p>
                                    </>
                                ) : (<></>)}
                            </div>
                        ))}


                    </div>
                </div>
            </section>
        </>
    )
}
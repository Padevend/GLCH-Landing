import { useEffect } from "react";
import FullPage from "../Full";

export default function Home() {
    useEffect(()=>{
        document.querySelector("#home").scrollIntoView({behavior: "smooth"})
    },[])
    return (
        <>
            <FullPage/>
        </>
    )
}
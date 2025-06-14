import { useEffect } from "react";
import FullPage from "../Full";

export default function About() {
    useEffect(() => {
        document.querySelector("#about").scrollIntoView({ behavior: "smooth" })
    }, [])
    return (
        <>
            <FullPage />
        </>
    )
}
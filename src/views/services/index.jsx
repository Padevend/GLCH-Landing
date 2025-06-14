import { useEffect } from "react";
import FullPage from "../Full";

export default function Services() {
    useEffect(() => {
        document.querySelector("#services").scrollIntoView({ behavior: "smooth" })
    }, [])
    return (
        <>
            <FullPage />
        </>
    )
}
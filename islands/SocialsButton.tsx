import Social from "../types/Social.ts";
import { useState } from "preact/hooks";

export default function SocialsButton(props:Social) {
    const [socialText, setSocialText] = useState<string>(props.socialName)
    function hoverHandler() {
        if(props.socialTag) {
            socialText === props.socialName ? setSocialText(props.socialTag) : setSocialText(props.socialName)
        } 
    }
    return (
        <>
            <a 
            class="flex flex-row justify-center items-center bg-emerald-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border rounded-lg border-2 border-gray-200 hover:border-gray-400 px-4 py-2 drop-shadow-md transition" 
            href={props.socialLink} 
            onMouseEnter={hoverHandler} 
            onMouseLeave={hoverHandler}
            >{socialText}
            <img class="ml-2" src={props.img} height="30" width="30"/>
            </a>
        </>
    );
}

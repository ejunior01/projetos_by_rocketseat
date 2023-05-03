import { Sparkle } from "phosphor-react";

import "./Title.css"

interface TitleProps {
    title: String
}


export function Title(props: TitleProps) {
    return (
        <div className="title">
            <h1>
                {props.title}
            </h1>
            <Sparkle/>
        </div>
    )
}
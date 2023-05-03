import { DotsThree, Lock } from "phosphor-react";
import "./Logout.css"
import { ProfilePicture } from "./ProfilePicture";

export function Logout() {
    return (
        <div className="logout">
            <ProfilePicture source="https://avatars.githubusercontent.com/u/61527661?v=4" alt="Fote de perfil do Twitter"/>
            <div className="profile-details">
                <span className="name">
                    Edvan Ribeiro
                    <Lock/>
                </span>
                <span className="username">@eab92240652443e</span>
            </div>
            <span className="more">
                <DotsThree />
            </span>
        </div>
    )
}
import "./ProfilePicture.css"

interface ProfilePictureProps {
    source: string
    alt: string
}

export function ProfilePicture(props:ProfilePictureProps) {
    return (
            <img src={props.source} alt={props.alt} className="profile-picture"/>
    )
}
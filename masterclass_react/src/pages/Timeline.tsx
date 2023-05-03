
import { ProfilePicture } from "../components/ProfilePicture"
import { Separator } from "../components/Separator"
import { Title } from "../components/Title"
import { Tweet } from "../components/Tweet"
import "./Timeline.css"

export function Timeline() {
    return (
        <div className="timeline">

            <Title title="Home" />

            <form action="" className="new-tweet">
                <label htmlFor="tweet">
                    <ProfilePicture source="https://avatars.githubusercontent.com/u/61527661?v=4" alt="Fote de perfil do Twitter" />

                    <textarea
                        id="tweet"
                        placeholder="What's happening?"
                    />
                </label>
                <button type="submit">Tweet</button>
            </form>

            <Separator />

            <div className="feed">
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />

            </div>

        </div>
    )
}
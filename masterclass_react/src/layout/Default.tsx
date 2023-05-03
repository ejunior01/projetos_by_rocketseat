import { Header } from "../components/Header"
import { Timeline } from "../pages/Timeline"
import "./Default.css"


export function Default() {
    return (
        <div className="layout">
            <Header />
            <div className="content">
                <Timeline />
            </div>
            <div className="sidebar">
            </div>
        </div>

    )
}
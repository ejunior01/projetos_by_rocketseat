import { House, Hash, Bell, Envelope, BookmarkSimple, FileText, User, DotsThreeCircle, Pencil } from "phosphor-react"
import twitterLogo from "../assets/logo-twitter.svg"

import "./Header.css"
import { Logout } from "./Logout";

export function Header() {
  return (
    <header className="vertical-header">
      <img className="logo" src={twitterLogo} alt="Logo Twitter" />
      <nav className="main-navigation">
        <a href="" className="active">
          <House />
          <span>Home</span>
        </a>
        <a href="">
          <Hash />
          <span>Explore</span>
        </a>
        <a href="">
          <Bell />
          <span>Notifications</span>
        </a>
        <a href="">
          <Envelope/>
          <span>Messages</span>
        </a>
        <a href="">
          <BookmarkSimple />
          <span>Bookmarks</span>
        </a>
        <a href="">
          <FileText />
          <span>Lists</span>
        </a>
        <a href="">
          <User />
          <span>Profile</span>
        </a>
        <a href="">
          <DotsThreeCircle />
          <span>More</span>
        </a>
      </nav>
      <button className="new-twitter" type="button">
        {/* <Pencil/> */}
        <span>Tweet</span>
      </button>
      <Logout/>
    </header>
  );
}

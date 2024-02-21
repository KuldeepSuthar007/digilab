import Image from "next/image";
import Sidebar from "./components/Sidebar";
import micicon from "./icons/mic.png";
import sendicon from "./icons/send.png";
import p1 from "./icons/Mask group.png";
import p2 from "./icons/sideprofile.png";
import groupicon from "./icons/Group 15.png";
import callicon from "./icons/call.png";
import searchicon from "./icons/MagnifyingGlass.png";
import notificationicon from "./icons/notification.png";
import hiicon from "./icons/hii.png";
import Statistics from "./components/Statistics";
import Activepatients from "./components/ActivePatients";
import UpcomingE from "./components/UpcomingEvents";
import Patients from "./components/Patients";
import UpEvent from "./components/UpEvent";

export default function Home() {
  return (
    <main>
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="main_container">
        <div className="left_section">
          <div className="top_left">
            <div className="top_lefthead">
              <div className="greeting_msg">
                <div>
                  Hello, <br /> Dr. Colter!
                </div>
                <div>
                  <Image src={hiicon} width={20} alt="" />
                </div>
              </div>
              <div className="searchbox">
                <button>
                  <Image src={searchicon} width={10} alt="" />
                </button>
                <input type="text" placeholder="Search" />
              </div>
              <div className="notification">
                <Image
                  src={notificationicon}
                  width={17}
                  height={20}
                  alt="icon"
                />
              </div>
            </div>
            <div className="topleft_bot">
              <div className="topbotleft">
                <div>
                  <Patients />
                </div>
                <div>
                  <UpEvent />
                </div>
              </div>
              <div className="topbotrighht">
                <Statistics />
              </div>
            </div>
          </div>
          <div className="bottom_left">
            <div className="activepatients">
              <p>ActivePatients</p>
              <Activepatients />
            </div>
            <div className="upcomingevent">
              <p>Upcoming Events</p>
              <UpcomingE />
            </div>
          </div>
        </div>
        <div className="right_section">
          <div className="profile">
            <Image src={p2} width={71} height={92} alt="userprofile" />
          </div>
          <p className="name">ALIAM COLTER</p>
          <p className="specialistname">Physician</p>
          <div className="midbox">
            <p className="active_patients">Active Patients</p>
            <Image src={groupicon} width={110} height={30} alt="mic" />
          </div>
          <div className="chatcontainer">
            <div className="chattopdiv">
              <div>
                <div className="chat_profile1">
                  <Image src={p1} width={44} height={44} alt="profile" />
                </div>
                <div className="profile_name">
                  <p className="p1_name">Alexa Max</p>
                  <p className="p1_time">Active 5 min ago</p>
                </div>
              </div>
              <div className="callicon">
                <Image src={callicon} width={14} height={14} alt="callicon" />
              </div>
            </div>
            <hr />
            <div className="chatwindow">
              <div className="chat_profile1">
                <Image src={p1} width={44} height={44} alt="mic" />
              </div>
              <div className="chat">
                <div className="msgsender"> Hi, Doctor.</div>
                <div className="msgsender">
                  I got knee jerk. What <br /> should i do right now?
                </div>
                <div className="timestamp">Tue 02:32pm</div>
                <div className="msgreceiver">Hi, Alexa.</div>
                <div className="msgreceiver">
                  This help maintain balance <br /> and posture. dont worry.
                </div>
                <div className="timestampr">Tue 02:32pm</div>
              </div>
              <div className="profile2">
                <Image src={p2} width={44} height={44} alt="mic" />
              </div>
            </div>
            <div className="chat_textarea">
              <div className="textbox">
                <button>
                  <Image src={micicon} width={15} height={19} alt="" />
                </button>
                <input type="textarea" placeholder="Type your text......" />
                <div className="sendbtn">
                  <Image
                    src={sendicon}
                    width={19}
                    height={19}
                    alt="sendbutton"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

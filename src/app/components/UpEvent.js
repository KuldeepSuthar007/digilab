import style from "../styles/upevent.module.css"
import Image from 'next/image'
import arrowicon from "../icons/rarrow.png"
import alarm from "../icons/alarm.png"
import profile from "../icons/Mask group (1).png"

export default function UpEvent() {
    return (
        <div className={style.Card_box}>
            <div className={style.topbox}>
                <div className={style.arrow}>
                    <Image src={arrowicon}
                        width={16}
                        height={8}
                        alt="arrow" />
                </div>
                <p>Upcoming Events</p>
            </div>
            <div className={style.botbox}>
                <div className={style.profile}><Image src={profile}
                    width={40}
                    height={40}
                    alt="profile" /></div>
                <div>
                    <div className={style.title}>Aliza Shah</div>
                    <div className={style.time}> <Image src={alarm}
                        width={16}
                        height={8}
                        alt="alarm" />08:00-09:00 am</div>
                    <div className={style.date}>Visited 7 days ago</div>
                </div>

            </div>
        </div>
    )
}

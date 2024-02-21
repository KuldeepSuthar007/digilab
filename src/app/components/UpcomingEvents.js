import style from '../styles/UpcomingE.module.css';
import Image from 'next/image'
import arrowicon from "../icons/arrowgraph.png"
import rarrow from "../icons/rarrow.png"
import groupicon from "../icons/Group 15.png";
import notificationicon from "../icons/notify.png"

export default function UpcomingEvents() {
    return (
        <div >
            <div className={style.Card_box}>
                <div className={style.topbox}>
                    <div>
                        <p className={style.title}>Team Meeting</p>
                        <p className={style.time}>05:00-06:00</p>
                    </div>
                    <div className={style.notification}>
                        <Image
                            src={notificationicon}
                            width={17}
                            height={20}
                            alt="icon"
                        />
                    </div>
                </div>
                <div className={style.top_botbox}>
                    <Image src={groupicon} height={25} alt="groupicon" />
                    <div className={style.arrow}>
                        <Image src={rarrow}
                            width={16}
                            height={8}
                            alt="arrow" />
                    </div>
                </div>
            </div>
            <div className={style.Card_box}>
                <div>
                    <p>Consultation</p>
                    <p>
                        82/100
                    </p>
                </div>
                <div className={style.date}>82%   <Image src={arrowicon}
                    width={16}
                    height={8}
                    alt="graph" /></div>
            </div>

        </div>
    )
}

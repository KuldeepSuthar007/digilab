import style from '../styles/activepatients.module.css'
import Image from 'next/image'
import icon from "../icons/Group 4.png"

export default function ActivePatients() {
    return (
        <div className={style.Card_box}>
            <Image src={icon}
                width={340}
                height={280}
                alt="graph" />
        </div>
    )
}


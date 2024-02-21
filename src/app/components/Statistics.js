import style from '../styles/Statistics.module.css'
import Image from 'next/image'
import icon from "../icons/Group 9.png"

export default function Statistics() {
    return (

        <div className={style.Card_box}>

            <Image src={icon}
                width={340}
                height={300}
                alt="graph" />
        </div>

    )
}

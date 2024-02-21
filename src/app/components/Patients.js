import style from '../styles/patients.module.css'
import Image from 'next/image'
import arrowicon from "../icons/arrowgraph.png"

export default function Patients() {
    return (
        <div className={style.Card_box}>
            <div style={{ padding: "20px 0px 0px 20px" }}>
                <p className={style.patientsnumber}>42</p>
                <p className={style.title}>Patients Visited</p>
                <p className={style.month}>This Month</p>
            </div>
            <div className={style.right_section}>
                <div>
                    <div className={style.c_topdiv}>
                    </div>
                    <div className={style.c_botdiv}>
                        <Image src={arrowicon}
                            width={16}
                            height={8}
                            alt="graph" />
                        <p className={style.percenttext}>70%</p>
                    </div>
                </div>


            </div>

        </div>
    )
}

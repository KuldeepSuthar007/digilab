import style from '@/app/styles/sidebar.module.css'
import Image from 'next/image'
import logo from '../icons/logo.png'
import home from '../icons/home.png'
import file from '../icons/file.png'
import setting from '../icons/setting.png'
import message from '../icons/message.png'
import timer from '../icons/timer.png'
import logout from '../icons/logout.png'
import profile from '../icons/sideprofile.png'

export default function Sidebar() {
    return (
        <main className={style.main_section}>
            <div className={style.top}>
                <div className={style.logo}>
                    <Image src={logo}
                        width={27}
                        height={34}
                        alt="logo" />
                </div>
                <div className={style.menu_section}>
                    <div className={style.menu}>
                        <Image src={home}
                            width={16}
                            height={20}
                            alt="home" />
                    </div>
                    <div className={style.menu}>
                        <Image src={file}
                            width={16}
                            height={20}
                            alt="file" />
                    </div><div className={style.menu}>
                        <Image src={timer}
                            width={16}
                            height={20}
                            alt="timer" />
                    </div><div className={style.menu}>
                        <Image src={message}
                            width={16}
                            height={20}
                            alt="message" />
                    </div>
                    <div className={style.menu}>
                        <Image src={setting}
                            width={16}
                            height={20}
                            alt="setting" />
                    </div>
                </div>
            </div>
            <div className={style.logout_section}>
                <div className={style.profile}>
                    <Image src={profile}
                        width={44}
                        height={44}
                        alt="userprofile"
                    />
                </div>
                <Image src={logout}
                    width={20}
                    height={18}
                    alt="logout" />
            </div>
        </main>
    )
}

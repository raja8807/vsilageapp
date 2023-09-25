const { default: Link } = require("next/link")
const { WhatsappIcon } = require("react-share")
import styles from './whatsapp_button.module.scss'

const WhatsappButton = ()=>{
    return <Link href='https://wa.link/fix4k7'
    target='_blank'
    className={styles.whatsapp_button}
    >
        <WhatsappIcon round size={50}/>
    </Link>
}

export default WhatsappButton
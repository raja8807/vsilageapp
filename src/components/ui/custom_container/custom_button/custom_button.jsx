import styles from './custom_button.module.scss'

const CustomButton = (props)=>{
    const {children} = props

    return <button className={styles.custom_button}>{children}</button>
}

export default CustomButton
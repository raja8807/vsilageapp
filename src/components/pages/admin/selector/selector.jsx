import styles from './selector.module.scss'

const Selector = (props)=>{
    const {currentTab,setCurrentTab,tabs} = props


    return <div className={styles.selector}>
        {
            tabs.map((tab)=>{
              return  <p key={tab.id}
              className={currentTab?.id === tab.id ? styles.active : ''}
              onClick={()=>{
                setCurrentTab(tab)
              }}
              >{tab.name}</p>
            })
        }
    </div>
}

export default Selector;
import styles from '../styles/components/Layout.module.scss'

export default function Layout({ children, heading }) {
  return (
    <div className={styles.layout}>
        <div>
          {heading}
        </div>
        <div>
            {children}      
        </div>  
    </div>
  )
}
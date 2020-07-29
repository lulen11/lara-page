import styles from './styles.module.scss'

function Paragraph({ children }) {
  return <p className={styles.paragraph}>{children}</p>
}

export default Paragraph
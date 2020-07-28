import styles from './styles.module.scss'

function Title({ children }) {
  return <h1 className={styles.featureHeading}>{children}</h1>
}

export default Title
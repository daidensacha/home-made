import styles from '../styles/closeButton.module.scss';

const CloseButton = ({ action }) => {
  return (
    <div className={styles.closeContainer} onClick={action}>
    <div className={styles.leftright}></div>
    <div className={styles.rightleft}></div>
    <label className={styles.close}>close</label>
  </div >
  )
}

export default CloseButton;
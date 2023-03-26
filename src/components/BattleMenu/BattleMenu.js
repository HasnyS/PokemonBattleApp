import styles from './styles.module.css';

export const BattleMenu = ({ onAttack, onMagic, onHeal }) => {
    return <div className={styles.main}>
        <div onClick={onAttack} className={styles.option}>
            Tackle
        </div>
        <div onClick={onMagic} className={styles.option}>
            Solar Beam
        </div>
        <div onClick={onHeal} className={styles.option}>
            Heal
        </div>
    </div>
}
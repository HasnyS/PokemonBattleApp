import styles from './styles.module.css';
import { useTypedMessage } from './useTypedMessage';

export const BattleAnnouncer = ({ message }) => {
    const typedMessage = useTypedMessage(message);

    return <div className={styles.main}>
        <div className={styles.message}>{typedMessage}</div>
    </div>
}
import styles from './styles.module.css';
import { Bar } from '../Bar';

const red= '#5c8808';
const blue= '#cb5307'


export const PlayerSummary = ({ main, name, level, health, maxHealth }) => {
    // if main prop is true we return red, if false return blue
    return (
    <div 
        className={styles.main}
        style={{ backgroundColor: main ? red: blue}} 
        >
        <div className={styles.info}>
            <div className={styles.name}>{name}</div>
            <div className={styles.level}>Lvl: {level}</div>
        </div>

        <div className={styles.heatlh}>
            <Bar label="HP" value={health} maxValue={maxHealth} />
        </div>
    </div>
    );
}
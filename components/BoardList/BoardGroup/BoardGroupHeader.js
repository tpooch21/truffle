import styles from './BoardGroup.module.css';
import { BsPeopleFill } from 'react-icons/bs';

const BoardGroupHeader = ({ groupName }) => (
  <header className={styles.BoardGroup__header}>
    <BsPeopleFill style={{ height: "1.2em", width: "1.2em", marginRight: '5px' }}/>
    <h3>{groupName} Boards</h3>
  </header>
);

export default BoardGroupHeader;
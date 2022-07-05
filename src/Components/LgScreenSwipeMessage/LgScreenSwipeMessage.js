import styles from "./LgScreenSwipeMessage.module.css";
import RightPointArrow from "../../Assets/SvgComponents/RightPointArrow";
import LeftPointArrow from "../../Assets/SvgComponents/LeftPointArrow";

const LgScreenSwipeMessage = () => {
  return (
    <div className={styles.lgScreenSwipeMessage}>
      <LeftPointArrow />
      Click and Drag to view more
      <RightPointArrow />
    </div>
  );
};

export default LgScreenSwipeMessage;

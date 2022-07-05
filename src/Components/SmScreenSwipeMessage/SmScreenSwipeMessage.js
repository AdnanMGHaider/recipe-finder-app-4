import styles from "./SmScreenSwipeMessage.module.css";
import RightPointArrow from "../../Assets/SvgComponents/RightPointArrow";
import LeftPointArrow from "../../Assets/SvgComponents/LeftPointArrow";

const SmScreenSwipeMessage = () => {
  return (
    <div className={styles.smScreenSwipeMessage}>
      <LeftPointArrow />
      Swipe to view more
      <RightPointArrow />
    </div>
  );
};

export default SmScreenSwipeMessage;

import { FunctionComponent } from "react";
import styles from "./FrameComponent14.module.css";

const FrameComponent14: FunctionComponent = () => {
  return (
    <div className={styles.vehiclesInner}>
      <header className={styles.managementSectionParent}>
        <div className={styles.managementSection}>
          <img
            className={styles.image1Icon}
            loading="lazy"
            alt=""
            src="/image-1@2x.png"
          />
        </div>
        <div className={styles.lineSeparator}>
          <div className={styles.headerFrame}>
            <div className={styles.garageSelection}>
              <div className={styles.vehicles}>Vehicles</div>
              <div className={styles.imageContainer}>
                <img
                  className={styles.imageContainerChild}
                  alt=""
                  src="/line-11.svg"
                />
              </div>
            </div>
            <div className={styles.jobCards}>Job Cards</div>
            <div className={styles.jobCardLine}>
              <div className={styles.management}>Management</div>
              <div className={styles.inputVector}>
                <img
                  className={styles.firstChildFrame}
                  alt=""
                  src="/vector-2.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.secondChildFrame}>
          <div className={styles.thirdChildFrame}>
            <img className={styles.fourthChildFrame} alt="" src="/vector.svg" />
            <div className={styles.fifthChildFrame}>
              <div className={styles.vehiclesText}>
                <img
                  className={styles.searchModelVector}
                  alt=""
                  src="/vector-1.svg"
                />
                <img
                  className={styles.selectGarageVector}
                  alt=""
                  src="/vector-2.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default FrameComponent14;

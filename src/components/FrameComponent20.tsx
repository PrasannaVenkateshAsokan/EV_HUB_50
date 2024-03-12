import { FunctionComponent } from "react";
import styles from "./FrameComponent20.module.css";

const FrameComponent20: FunctionComponent = () => {
  return (
    <header className={styles.ownerGroup}>
      <div className={styles.searchBox}>
        <div className={styles.pageContainer}>
          <img
            className={styles.image1Icon}
            loading="lazy"
            alt=""
            src="/image-1@2x.png"
          />
        </div>
        <div className={styles.nextButton}>
          <div className={styles.previousButton}>
            <div className={styles.vehicles}>Vehicles</div>
            <div className={styles.jobCards}>Job Cards</div>
            <div className={styles.countrySelection}>
              <div className={styles.chainLink}>
                <div className={styles.management}>Management</div>
                <div className={styles.maskArea}>
                  <img
                    className={styles.maskAreaChild}
                    alt=""
                    src="/line-1.svg"
                  />
                </div>
              </div>
              <div className={styles.rectangleContainer}>
                <img
                  className={styles.textBlockIcon}
                  alt=""
                  src="/vector-2.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.textInput}>
          <div className={styles.dropdownMenu}>
            <img className={styles.optionItemIcon} alt="" src="/vector.svg" />
            <div className={styles.arrowIcon}>
              <div className={styles.groupFrame}>
                <img
                  className={styles.vectorCollectionIcon}
                  alt=""
                  src="/vector-1.svg"
                />
                <img
                  className={styles.vectorSetIcon}
                  alt=""
                  src="/vector-2.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent20;

import { FunctionComponent } from "react";
import FrameComponent14 from "../components/FrameComponent14";
import FrameContainer from "../components/FrameContainer";
import styles from "./Vehicles.module.css";

const Vehicles: FunctionComponent = () => {
  return (
    <div className={styles.vehicles}>
      <FrameComponent14 />
      <main className={styles.lineVector}>
        <FrameContainer />
        <div className={styles.go}>
          <div className={styles.pleaseSelectA}>
            Please select a garage to view the list of items!
          </div>
        </div>
      </main>
      <footer className={styles.goButton}>
        <div className={styles.goButtonChild} />
        <div className={styles.goButtonInner}>
          <div className={styles.frameParent}>
            <div className={styles.frameWrapper}>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/group-1.svg"
              />
            </div>
            <div className={styles.vectorWrapper}>
              <img className={styles.vectorIcon} alt="" src="/vector-4.svg" />
            </div>
            <div className={styles.vectorContainer}>
              <img className={styles.vectorIcon1} alt="" src="/vector-5.svg" />
            </div>
            <div className={styles.frameContainer}>
              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/group-2@2x.png"
              />
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.pageParent}>
                <div className={styles.page}>{`Page `}</div>
                <div className={styles.of1}>1 of 1</div>
              </div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.goToPageWrapper}>
                <div className={styles.goToPage}>{`Go to Page: `}</div>
              </div>
              <div className={styles.rectangleParent}>
                <div className={styles.frameInner} />
                <div className={styles.div}>1</div>
              </div>
            </div>
            <button className={styles.rectangleGroup}>
              <div className={styles.rectangleDiv} />
              <div className={styles.go1}>Go!</div>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Vehicles;

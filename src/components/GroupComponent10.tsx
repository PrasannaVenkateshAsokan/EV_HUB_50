import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GroupComponent10.module.css";

export type GroupComponent10Type = {
  starAutoWorks?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
};

const GroupComponent10: FunctionComponent<GroupComponent10Type> = ({
  starAutoWorks,
  propTop,
}) => {
  const groupDiv7Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className={styles.rectangleParent} style={groupDiv7Style}>
      <div className={styles.frameChild} />
      <div className={styles.garageParent}>
        <div className={styles.garage}>Garage</div>
        <div className={styles.starAutoWorks}>{starAutoWorks}</div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.lineWrapper}>
          <div className={styles.frameItem} />
        </div>
        <div className={styles.ownerWrapper}>
          <div className={styles.owner}>Owner</div>
        </div>
        <div className={styles.lineContainer}>
          <div className={styles.frameInner} />
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.chainParent}>
            <div className={styles.chain}>Chain</div>
            <div className={styles.autoParts}>Auto Parts</div>
          </div>
        </div>
        <div className={styles.lineFrame}>
          <div className={styles.lineDiv} />
        </div>
        <div className={styles.locationWrapper}>
          <div className={styles.location}>Location</div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.frameChild1} />
        </div>
        <div className={styles.vectorWrapper}>
          <img
            className={styles.vectorIcon}
            loading="lazy"
            alt=""
            src="/vector-11.svg"
          />
        </div>
        <div className={styles.groupWrapper}>
          <img
            className={styles.groupIcon}
            loading="lazy"
            alt=""
            src="/group-11.svg"
          />
        </div>
      </div>
      <div className={styles.bergen}>Bergen</div>
    </div>
  );
};

export default GroupComponent10;

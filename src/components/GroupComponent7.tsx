import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GroupComponent7.module.css";

export type GroupComponent7Type = {
  starAutoWorks?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
};

const GroupComponent7: FunctionComponent<GroupComponent7Type> = ({
  starAutoWorks,
  propTop,
}) => {
  const groupSection3Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <section className={styles.rectangleParent} style={groupSection3Style}>
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
    </section>
  );
};

export default GroupComponent7;

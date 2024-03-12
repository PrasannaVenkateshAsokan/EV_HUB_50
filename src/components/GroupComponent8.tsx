import { FunctionComponent } from "react";
import styles from "./GroupComponent8.module.css";

const GroupComponent8: FunctionComponent = () => {
  return (
    <section className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.garageParent}>
        <div className={styles.garage}>Garage</div>
        <div className={styles.futuristicGarage}>Futuristic Garage</div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.treeNodeWrapper}>
            <div className={styles.treeNode} />
          </div>
          <div className={styles.leafNode}>
            <div className={styles.parentNode}>
              <div className={styles.siblingNodes}>
                <div className={styles.owner}>Owner</div>
              </div>
              <div className={styles.robertBoschGmbh}>Robert Bosch GmbH</div>
            </div>
          </div>
          <div className={styles.edgeNode} />
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.frameWrapper}>
            <div className={styles.chainParent}>
              <div className={styles.chain}>Chain</div>
              <div className={styles.autoParts}>Auto Parts</div>
            </div>
          </div>
          <div className={styles.leafCluster} />
        </div>
        <div className={styles.locationWrapper}>
          <div className={styles.location}>Location</div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.lineWrapper}>
            <div className={styles.frameItem} />
          </div>
          <div className={styles.dataFlow}>
            <img
              className={styles.logicNetworkIcon}
              loading="lazy"
              alt=""
              src="/vector-11.svg"
            />
          </div>
          <div className={styles.functionalGraph}>
            <img
              className={styles.groupIcon}
              loading="lazy"
              alt=""
              src="/group-11.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.bergen}>Bergen</div>
    </section>
  );
};

export default GroupComponent8;

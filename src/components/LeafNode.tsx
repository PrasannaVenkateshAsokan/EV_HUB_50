import { FunctionComponent } from "react";
import styles from "./LeafNode.module.css";

const LeafNode: FunctionComponent = () => {
  return (
    <header className={styles.leafNode}>
      <div className={styles.connection}>
        <div className={styles.inputNode}>
          <img
            className={styles.image1Icon}
            loading="lazy"
            alt=""
            src="/image-1@2x.png"
          />
        </div>
        <div className={styles.conditionalNode}>
          <nav className={styles.loopNode}>
            <div className={styles.vehicles}>Vehicles</div>
            <div className={styles.jobCards}>Job Cards</div>
            <div className={styles.treeNode}>
              <div className={styles.mergingNode}>
                <div className={styles.management}>Management</div>
                <div className={styles.roundNode}>
                  <img
                    className={styles.triangleNodeIcon}
                    alt=""
                    src="/vector-2.svg"
                  />
                </div>
              </div>
              <div className={styles.rectangularNode}>
                <img
                  className={styles.rectangularNodeChild}
                  loading="lazy"
                  alt=""
                  src="/line-1.svg"
                />
              </div>
            </div>
          </nav>
        </div>
        <div className={styles.hexagonalNode}>
          <div className={styles.pentagonalNode}>
            <img
              className={styles.circularNodeIcon}
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
            <div className={styles.diamondNode}>
              <div className={styles.arrowNode}>
                <img
                  className={styles.textNodeIcon}
                  loading="lazy"
                  alt=""
                  src="/vector-1.svg"
                />
                <img
                  className={styles.lineNodeIcon}
                  loading="lazy"
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

export default LeafNode;

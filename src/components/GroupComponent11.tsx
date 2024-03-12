import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GroupComponent11.module.css";

export type GroupComponent11Type = {
  starAutoWorks?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
};

const GroupComponent11: FunctionComponent<GroupComponent11Type> = ({
  starAutoWorks,
  propTop,
}) => {
  const groupDiv6Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className={styles.rectangleParent} style={groupDiv6Style}>
      <div className={styles.frameChild} />
      <div className={styles.vectorNetworkNode}>
        <div className={styles.garage}>Garage</div>
        <div className={styles.starAutoWorks}>{starAutoWorks}</div>
      </div>
      <div className={styles.shapeNode}>
        <div className={styles.pathNode}>
          <div className={styles.symbolNode} />
        </div>
        <div className={styles.filledHexagonNode}>
          <div className={styles.filledDiamondNode}>
            <div className={styles.filledArrowNode}>
              <div className={styles.owner}>Owner</div>
            </div>
            <div className={styles.aagGpc}>AAG GPC</div>
          </div>
        </div>
        <div className={styles.filledEllipsePathNode}>
          <div className={styles.filledStarShapePathNode} />
        </div>
        <div className={styles.dataCollectorWrapper}>
          <div className={styles.dataCollector}>
            <div className={styles.chain}>Chain</div>
            <div className={styles.nappa}>Nappa</div>
          </div>
        </div>
        <div className={styles.constantNode}>
          <div className={styles.variableNode} />
        </div>
        <div className={styles.inputNode}>
          <div className={styles.location}>Location</div>
        </div>
        <div className={styles.mergeNode}>
          <div className={styles.splitNode} />
        </div>
        <div className={styles.ifNode}>
          <img
            className={styles.elseNodeIcon}
            loading="lazy"
            alt=""
            src="/vector-11.svg"
          />
        </div>
        <div className={styles.caseNode}>
          <img
            className={styles.groupIcon}
            loading="lazy"
            alt=""
            src="/group-11.svg"
          />
        </div>
      </div>
      <div className={styles.oslo}>Oslo</div>
    </div>
  );
};

export default GroupComponent11;

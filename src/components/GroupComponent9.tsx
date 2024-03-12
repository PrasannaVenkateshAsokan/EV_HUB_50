import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GroupComponent9.module.css";

export type GroupComponent9Type = {
  starAutoWorks?: string;

  /** Style props */
  branchingTreeTop?: CSSProperties["top"];
};

const GroupComponent9: FunctionComponent<GroupComponent9Type> = ({
  starAutoWorks,
  branchingTreeTop,
}) => {
  const groupSection2Style: CSSProperties = useMemo(() => {
    return {
      top: branchingTreeTop,
    };
  }, [branchingTreeTop]);

  return (
    <section className={styles.rectangleParent} style={groupSection2Style}>
      <div className={styles.frameChild} />
      <div className={styles.outputNode}>
        <div className={styles.garage}>Garage</div>
        <div className={styles.starAutoWorks}>{starAutoWorks}</div>
      </div>
      <div className={styles.loopNode}>
        <div className={styles.conditionNode}>
          <div className={styles.functionNode} />
        </div>
        <div className={styles.adjacentNodes}>
          <div className={styles.pathNode}>
            <div className={styles.graphNode}>
              <div className={styles.owner}>Owner</div>
            </div>
            <div className={styles.aagGpc}>AAG GPC</div>
          </div>
        </div>
        <div className={styles.branchingTree}>
          <div className={styles.circularPath} />
        </div>
        <div className={styles.decisionMaker}>
          <div className={styles.processorChain}>
            <div className={styles.chain}>Chain</div>
            <div className={styles.nappa}>Nappa</div>
          </div>
        </div>
        <div className={styles.leafCollection}>
          <div className={styles.parentage} />
        </div>
        <div className={styles.siblinghood}>
          <div className={styles.location}>Location</div>
        </div>
        <div className={styles.rootedTree}>
          <div className={styles.linkedEdges} />
        </div>
        <div className={styles.adjacentClusters}>
          <img
            className={styles.pathwayIcon}
            loading="lazy"
            alt=""
            src="/vector-11.svg"
          />
        </div>
        <div className={styles.graphicalStructure}>
          <img
            className={styles.groupIcon}
            loading="lazy"
            alt=""
            src="/group-11.svg"
          />
        </div>
      </div>
      <div className={styles.oslo}>Oslo</div>
    </section>
  );
};

export default GroupComponent9;

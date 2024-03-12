import { FunctionComponent } from "react";
import GroupComponent9 from "../components/GroupComponent9";
import GroupComponent8 from "../components/GroupComponent8";
import GroupComponent7 from "../components/GroupComponent7";
import ConditionSplitter from "../components/ConditionSplitter";
import styles from "./GarageManagementEditScreen.module.css";

const GarageManagementEditScreen: FunctionComponent = () => {
  return (
    <div className={styles.garageManagementEditScreen}>
      <main className={styles.logicGate}>
        <h3 className={styles.garages}>Garage(s)</h3>
        <img
          className={styles.treeletIcon}
          loading="lazy"
          alt=""
          src="/vector.svg"
        />
        <div className={styles.branchingPattern}>
          <img
            className={styles.circularPatternIcon}
            loading="lazy"
            alt=""
            src="/vector-1.svg"
          />
          <img
            className={styles.decisionGridIcon}
            loading="lazy"
            alt=""
            src="/vector-2.svg"
          />
        </div>
        <img
          className={styles.image1Icon}
          loading="lazy"
          alt=""
          src="/image-1@2x.png"
        />
        <div className={styles.vehicles}>Vehicles</div>
        <div className={styles.jobCards}>Job Cards</div>
        <div className={styles.management}>Management</div>
        <img
          className={styles.vectorIcon}
          loading="lazy"
          alt=""
          src="/vector-2.svg"
        />
        <img
          className={styles.maskGroupIcon}
          loading="lazy"
          alt=""
          src="/mask-group.svg"
        />
        <GroupComponent9 starAutoWorks="Star Auto Works" />
        <GroupComponent8 />
        <GroupComponent9
          starAutoWorks="Shelby Garage"
          branchingTreeTop="423px"
        />
        <GroupComponent7 starAutoWorks="Star Auto Works" />
        <GroupComponent9
          starAutoWorks="Futuristic Garage"
          branchingTreeTop="633px"
        />
        <GroupComponent7 starAutoWorks="Shelby Garage" propTop="738px" />
        <GroupComponent9
          starAutoWorks="Star Auto Works"
          branchingTreeTop="843px"
        />
        <ConditionSplitter />
      </main>
      <div className={styles.connectionNode} />
      <div className={styles.outputNode} />
      <div className={styles.ownerIcon111} />
      <div className={styles.errorHandler}>
        <div className={styles.dataTransformer}>
          <div className={styles.decisionTreeNode}>
            <img
              className={styles.decisionTreeNodeChild}
              loading="lazy"
              alt=""
              src="/group-1.svg"
            />
          </div>
          <div className={styles.decisionTreeNode1}>
            <img
              className={styles.vectorIcon1}
              loading="lazy"
              alt=""
              src="/vector-4.svg"
            />
          </div>
          <div className={styles.decisionTreeNode2}>
            <img className={styles.vectorIcon2} alt="" src="/vector-5.svg" />
          </div>
          <div className={styles.decisionTreeNode3}>
            <img
              className={styles.decisionTreeNodeItem}
              loading="lazy"
              alt=""
              src="/group-2@2x.png"
            />
          </div>
          <div className={styles.groupingNode}>
            <div className={styles.validationNode}>
              <div className={styles.page}>{`Page `}</div>
              <div className={styles.of1}>1 of 1</div>
            </div>
            <div className={styles.goToPage}>{`Go to Page: `}</div>
          </div>
          <div className={styles.stackNode}>
            <div className={styles.counterNode}>
              <input className={styles.timerNode} type="text" />
              <div className={styles.signalNode}>1</div>
            </div>
          </div>
          <div className={styles.patternMatcher}>
            <div className={styles.dataPoolNode} />
            <div className={styles.go}>Go!</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GarageManagementEditScreen;

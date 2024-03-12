import { FunctionComponent } from "react";
import BranchNode from "../components/BranchNode";
import ConstantProvider from "../components/ConstantProvider";
import FunctionApplier1 from "../components/FunctionApplier1";
import LineLayouter from "../components/LineLayouter";
import FunctionApplier from "../components/FunctionApplier";
import styles from "./VehiclesList.module.css";

const VehiclesList: FunctionComponent = () => {
  return (
    <div className={styles.vehiclesList}>
      <div className={styles.vehiclesListChild} />
      <div className={styles.aagNapaGarage1}>
        AAG, NAPA, GARAGE_1 , AAG, NAPA, GARAGE_2
      </div>
      <BranchNode />
      <section className={styles.errorHandler}>
        <ConstantProvider />
        <FunctionApplier1 />
        <LineLayouter />
        <FunctionApplier />
      </section>
      <footer className={styles.angleBracketNode}>
        <div className={styles.plusNode} />
        <div className={styles.minusNode}>
          <div className={styles.multiplyNode}>
            <div className={styles.divideNode}>
              <img
                className={styles.divideNodeChild}
                loading="lazy"
                alt=""
                src="/group-1.svg"
              />
            </div>
            <div className={styles.divideNode1}>
              <img
                className={styles.barChartIcon}
                loading="lazy"
                alt=""
                src="/vector-4.svg"
              />
            </div>
            <div className={styles.divideNode2}>
              <img
                className={styles.vectorIcon}
                loading="lazy"
                alt=""
                src="/vector-5.svg"
              />
            </div>
            <div className={styles.divideNode3}>
              <img
                className={styles.divideNodeItem}
                loading="lazy"
                alt=""
                src="/group-2@2x.png"
              />
            </div>
            <div className={styles.powerNode}>
              <div className={styles.sineNode}>
                <div className={styles.page}>{`Page `}</div>
                <div className={styles.of1}>1 of 1</div>
              </div>
            </div>
            <div className={styles.tangentNode}>
              <div className={styles.arcsinNode}>
                <div className={styles.goToPage}>{`Go to Page: `}</div>
              </div>
              <div className={styles.arctanNode}>
                <div className={styles.arctanNodeChild} />
                <div className={styles.squareRootNode}>1</div>
              </div>
            </div>
            <button className={styles.cubeRootNode}>
              <div className={styles.logarithmNode} />
              <div className={styles.go}>Go!</div>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VehiclesList;

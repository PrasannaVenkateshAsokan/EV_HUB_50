import { FunctionComponent } from "react";
import styles from "./BranchNode.module.css";

const BranchNode: FunctionComponent = () => {
  return (
    <section className={styles.branchNode}>
      <div className={styles.leafNode}>
        <div className={styles.inputPort}>
          <div className={styles.outputPort}>
            <img
              className={styles.image1Icon}
              loading="lazy"
              alt=""
              src="/image-1@2x.png"
            />
            <div className={styles.loopNode}>
              <nav className={styles.mergeNode}>
                <div className={styles.squareNode}>
                  <div className={styles.vehicles}>Vehicles</div>
                  <div className={styles.triangleNode}>
                    <img
                      className={styles.triangleNodeChild}
                      alt=""
                      src="/line-11.svg"
                    />
                  </div>
                </div>
                <div className={styles.jobCards}>Job Cards</div>
                <div className={styles.textNode}>
                  <div className={styles.management}>Management</div>
                  <div className={styles.shapeNode}>
                    <img
                      className={styles.groupNodeIcon}
                      alt=""
                      src="/vector-2.svg"
                    />
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className={styles.frameNode}>
            <div className={styles.arrowNode}>
              <div className={styles.ellipseNode}>
                <div className={styles.starNode}>
                  <div className={styles.polygonNode}>
                    <h3 className={styles.vehicles1}>Vehicle(s)</h3>
                  </div>
                  <div className={styles.vectorNode}>
                    <div className={styles.vectorNodeChild} />
                    <input
                      className={styles.splineNode}
                      placeholder="Search  by Model, Registration, Inspector"
                      type="text"
                    />
                    <img
                      className={styles.sidebarIcon}
                      alt=""
                      src="/vector-3.svg"
                    />
                  </div>
                </div>
                <div className={styles.gridNode}>
                  <div className={styles.rowNode}>
                    <div className={styles.rowNodeChild} />
                    <img
                      className={styles.columnNodeIcon}
                      alt=""
                      src="/vector-52.svg"
                    />
                  </div>
                  <div className={styles.matrixNode}>
                    <div className={styles.aagNapaGarage1}>
                      AAG, NAPA, GARAGE_1 , AAG, NAPA, GARAGE_2
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.formulaNode}>
                <div className={styles.variableNode}>
                  <div className={styles.functionNode}>
                    <button className={styles.rectangleParent}>
                      <div className={styles.frameChild} />
                      <div className={styles.garage1}>GARAGE_1</div>
                      <img
                        className={styles.reportFrameIcon}
                        alt=""
                        src="/vector-31.svg"
                      />
                    </button>
                  </div>
                  <div className={styles.functionNode1}>
                    <button className={styles.rectangleGroup}>
                      <div className={styles.frameItem} />
                      <div className={styles.garage2}>GARAGE_2</div>
                      <img
                        className={styles.vectorIcon}
                        alt=""
                        src="/vector-31.svg"
                      />
                    </button>
                  </div>
                  <div className={styles.functionNode2}>
                    <button className={styles.rectangleContainer}>
                      <div className={styles.frameInner} />
                      <div className={styles.garage3}>GARAGE_3</div>
                      <img
                        className={styles.vectorIcon1}
                        alt=""
                        src="/vector-31.svg"
                      />
                    </button>
                  </div>
                  <div className={styles.groupDiv}>
                    <div className={styles.rectangleDiv} />
                    <div className={styles.title}>+5</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.canvasNode}>
          <div className={styles.pageNode}>
            <div className={styles.frameSetNode}>
              <img
                className={styles.maskGroupIcon}
                loading="lazy"
                alt=""
                src="/mask-group1.svg"
              />
            </div>
            <div className={styles.textStyleNode}>
              <img
                className={styles.fillNodeIcon}
                loading="lazy"
                alt=""
                src="/vector-6.svg"
              />
            </div>
            <div className={styles.strokeNode}>
              <div className={styles.effectNode}>
                <img
                  className={styles.filterNodeIcon}
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
                <div className={styles.blendNode}>
                  <div className={styles.animateNode}>
                    <img
                      className={styles.transactionsFrameIcon}
                      loading="lazy"
                      alt=""
                      src="/vector-1.svg"
                    />
                    <img
                      className={styles.transactionsFrameIcon1}
                      alt=""
                      src="/vector-2.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.valueTransformer}>
                <button className={styles.sequenceHandler}>
                  <div className={styles.sequenceHandlerChild} />
                  <img
                    className={styles.iDContainer}
                    alt=""
                    src="/vector1.svg"
                  />
                </button>
                <div className={styles.inputFilter}>
                  <img
                    className={styles.rectangleIcon}
                    loading="lazy"
                    alt=""
                    src="/vector-8.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BranchNode;

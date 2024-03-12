import { FunctionComponent } from "react";
import styles from "./FrameContainer.module.css";

const FrameContainer: FunctionComponent = () => {
  return (
    <section className={styles.frameContainer}>
      <div className={styles.brandNameContainer}>
        <div className={styles.timeStampFrame}>
          <div className={styles.modelFrame}>
            <div className={styles.brandFrame}>
              <div className={styles.brandVector}>
                <div className={styles.garageNameText}>
                  <div className={styles.searchByRegistrationText}>
                    <div className={styles.vehicles}>Vehicle(s)</div>
                  </div>
                  <div className={styles.selectAGarageText}>
                    <div className={styles.selectAGarageTextChild} />
                    <input
                      className={styles.vectorContainer}
                      placeholder="Search  by Model, Registration"
                      type="text"
                    />
                    <img
                      className={styles.thirdVectorIcon}
                      alt=""
                      src="/vector-3.svg"
                    />
                  </div>
                </div>
                <div className={styles.frameWithVector}>
                  <div className={styles.frameWithVectorChild} />
                  <div className={styles.selectAGarage}>Select a Garage</div>
                  <div className={styles.pageNavigation}>
                    <img
                      className={styles.goButtonIcon}
                      alt=""
                      src="/vector-52.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.lineVectorFrame}>
              <div className={styles.nestedFramesContainer}>
                <img
                  className={styles.firstNestedVector}
                  alt=""
                  src="/vector-6.svg"
                />
              </div>
              <button className={styles.secondNestedVector}>
                <div className={styles.secondNestedVectorChild} />
                <img
                  className={styles.thirdNestedVector}
                  alt=""
                  src="/vector1.svg"
                />
              </button>
              <div className={styles.nestedFramesContainer1}>
                <img className={styles.vectorIcon} alt="" src="/vector-8.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.lineSeparatingLine} />
      </div>
      <div className={styles.mainContentFrame}>
        <div className={styles.innerFramesContainer}>
          <button className={styles.bBrandText}>
            <div className={styles.bBrandTextChild} />
            <img
              className={styles.brandVectorFrame}
              alt=""
              src="/vector-92.svg"
            />
            <div className={styles.timeFrameModel}>
              <div className={styles.timeFrame}>Time Frame</div>
            </div>
            <div className={styles.goToPage}>
              <img
                className={styles.groupVectorGroup}
                alt=""
                src="/vector-101.svg"
              />
            </div>
          </button>
          <div className={styles.bBrandText1}>
            <div className={styles.bBrandTextItem} />
            <div className={styles.bParent}>
              <b className={styles.b}>B</b>
              <input
                className={styles.brand}
                placeholder="BrandB"
                type="text"
              />
            </div>
            <div className={styles.vectorWrapper}>
              <img
                className={styles.vectorIcon1}
                alt=""
                src="/vector-101.svg"
              />
            </div>
          </div>
          <button className={styles.bBrandText2}>
            <div className={styles.bBrandTextInner} />
            <img className={styles.vectorIcon2} alt="" src="/vector-12.svg" />
            <div className={styles.modelWrapper}>
              <div className={styles.model}>Model</div>
            </div>
            <div className={styles.vectorFrame}>
              <img
                className={styles.vectorIcon3}
                alt=""
                src="/vector-101.svg"
              />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FrameContainer;

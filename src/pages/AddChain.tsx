import { FunctionComponent } from "react";
import FrameComponent20 from "../components/FrameComponent20";
import FrameComponent19 from "../components/FrameComponent19";
import FrameComponent18 from "../components/FrameComponent18";
import FrameComponent17 from "../components/FrameComponent17";
import FrameComponent16 from "../components/FrameComponent16";
import FrameComponent15 from "../components/FrameComponent15";
import styles from "./AddChain.module.css";

const AddChain: FunctionComponent = () => {
  return (
    <div className={styles.addChain}>
      <FrameComponent20 />
      <main className={styles.frameWrapper}>
        <div className={styles.flexWrap}>
          <div className={styles.alignItems}>
            <div className={styles.justifyContent}>
              <div className={styles.alignSelf}>
                <h3 className={styles.chains}>Chain(s)</h3>
              </div>
              <div className={styles.minWidth}>
                <div className={styles.minWidthChild} />
                <input
                  className={styles.maxWidth}
                  placeholder="Search by Owner, Chain"
                  type="text"
                />
                <img className={styles.widthIcon} alt="" src="/vector-3.svg" />
              </div>
            </div>
            <div className={styles.maxHeight}>
              <img
                className={styles.maskGroupIcon}
                loading="lazy"
                alt=""
                src="/mask-group.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.autoSize} />
        <FrameComponent19 />
        <FrameComponent18
          radiatorServices="Radiator Services"
          image26="/image-26@2x.png"
          prop="21"
          prop1="3"
        />
        <FrameComponent17 />
        <FrameComponent18
          radiatorServices="Nappa"
          image26="/image-25@2x.png"
          prop="27"
          prop1="Spain"
          propPadding="var(--padding-base) var(--padding-21xl) var(--padding-smi) var(--padding-42xl)"
          propPadding1="0px 0px var(--padding-10xs)"
          propWidth="69px"
          propPadding2="var(--padding-10xs) 0px 0px"
          propPadding3="var(--padding-10xs) 0px 0px"
          propPadding4="var(--padding-9xs) var(--padding-9xl) 0px 0px"
          propPadding5="var(--padding-10xs) 0px 0px"
          propPadding6="var(--padding-9xs) var(--padding-6xl) 0px 0px"
          propPadding7="0px var(--padding-10xs)"
          propPadding8="var(--padding-10xs) 0px 0px"
        />
        <FrameComponent16 />
        <FrameComponent15 />
        <FrameComponent19
          frameDivWidth="unset"
          frameDivPadding="0px var(--padding-22xl) 0px var(--padding-21xl)"
          frameDivAlignSelf="stretch"
          groupIconWidth="unset"
          groupIconFlex="1"
        />
        <div className={styles.textFlow}>
          <div className={styles.pageNavigation} />
        </div>
        <footer className={styles.textBreak}>
          <div className={styles.gotoPageButton}>
            <div className={styles.textAlignLast}>
              <img
                className={styles.textAlignLastChild}
                loading="lazy"
                alt=""
                src="/group-1.svg"
              />
            </div>
            <div className={styles.textAlignLast1}>
              <img className={styles.vectorIcon} alt="" src="/vector-4.svg" />
            </div>
            <div className={styles.textAlignLast2}>
              <img className={styles.vectorIcon1} alt="" src="/vector-5.svg" />
            </div>
            <div className={styles.textAlignLast3}>
              <img
                className={styles.textAlignLastItem}
                loading="lazy"
                alt=""
                src="/group-2@2x.png"
              />
            </div>
            <div className={styles.textSpacing}>
              <div className={styles.pageIndicator}>
                <div className={styles.page}>{`Page `}</div>
                <div className={styles.of1}>1 of 1</div>
              </div>
            </div>
            <div className={styles.textShadowColor}>
              <div className={styles.goButton}>
                <div className={styles.goToPage}>{`Go to Page: `}</div>
              </div>
              <div className={styles.gotoPageLabel}>
                <div className={styles.gotoPageLabelChild} />
                <div className={styles.emptySpace}>1</div>
              </div>
            </div>
            <button className={styles.rectangleContainer}>
              <div className={styles.vectorGroup} />
              <div className={styles.go}>Go!</div>
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default AddChain;

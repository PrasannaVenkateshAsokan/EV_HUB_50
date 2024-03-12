import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent18.module.css";

export type FrameComponent18Type = {
  radiatorServices?: string;
  image26?: string;
  prop?: string;
  prop1?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propPadding1?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
  propPadding2?: CSSProperties["padding"];
  propPadding3?: CSSProperties["padding"];
  propPadding4?: CSSProperties["padding"];
  propPadding5?: CSSProperties["padding"];
  propPadding6?: CSSProperties["padding"];
  propPadding7?: CSSProperties["padding"];
  propPadding8?: CSSProperties["padding"];
};

const FrameComponent18: FunctionComponent<FrameComponent18Type> = ({
  radiatorServices,
  image26,
  prop,
  prop1,
  propPadding,
  propPadding1,
  propWidth,
  propPadding2,
  propPadding3,
  propPadding4,
  propPadding5,
  propPadding6,
  propPadding7,
  propPadding8,
}) => {
  const groupDiv9Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv17Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const image26Icon1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameDiv18Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  const frameDiv19Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding3,
    };
  }, [propPadding3]);

  const frameDiv20Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding4,
    };
  }, [propPadding4]);

  const frameDiv21Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding5,
    };
  }, [propPadding5]);

  const frameDiv22Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding6,
    };
  }, [propPadding6]);

  const locationSectionStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding7,
    };
  }, [propPadding7]);

  const frameDiv23Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding8,
    };
  }, [propPadding8]);

  return (
    <section className={styles.lineAnchor}>
      <div className={styles.rectangleParent} style={groupDiv9Style}>
        <div className={styles.frameChild} />
        <div className={styles.frameWrapper} style={frameDiv17Style}>
          <div className={styles.chainParent}>
            <div className={styles.chain}>Chain</div>
            <div className={styles.radiatorServices}>{radiatorServices}</div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <button className={styles.image26Parent}>
            <img
              className={styles.image26Icon}
              alt=""
              src={image26}
              style={image26Icon1Style}
            />
            <div className={styles.lineWrapper} style={frameDiv18Style}>
              <div className={styles.frameItem} />
            </div>
          </button>
          <div className={styles.frameContainer} style={frameDiv19Style}>
            <div className={styles.frameGroup}>
              <div className={styles.frameDiv}>
                <div className={styles.unorderedListParent}>
                  <div className={styles.unorderedList}>
                    <div className={styles.owner}>Owner</div>
                  </div>
                  <div className={styles.robertBoschGmbh}>
                    Robert Bosch GmbH
                  </div>
                </div>
              </div>
              <div className={styles.frameInner} />
            </div>
          </div>
          <div className={styles.frameWrapper1} style={frameDiv20Style}>
            <div className={styles.garagesParent}>
              <div className={styles.garages}>Garages</div>
              <div className={styles.axisLock}>
                <div className={styles.textAlignLeft}>{prop}</div>
              </div>
            </div>
          </div>
          <div className={styles.lineContainer} style={frameDiv21Style}>
            <div className={styles.lineDiv} />
          </div>
          <div className={styles.frameWrapper2} style={frameDiv22Style}>
            <div className={styles.locationParent}>
              <div className={styles.location}>Location</div>
              <div
                className={styles.locationSection}
                style={locationSectionStyle}
              >
                <div className={styles.bold}>{prop1}</div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper3} style={frameDiv23Style}>
            <div className={styles.frameParent1}>
              <div className={styles.subscriptWrapper}>
                <div className={styles.subscript} />
              </div>
              <div className={styles.vectorWrapper}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="/vector-11.svg"
                />
              </div>
              <div className={styles.countryList}>
                <img className={styles.groupIcon} alt="" src="/group-11.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent18;

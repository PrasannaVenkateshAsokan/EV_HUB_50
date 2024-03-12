import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent19.module.css";

export type FrameComponent19Type = {
  /** Style props */
  frameDivWidth?: CSSProperties["width"];
  frameDivPadding?: CSSProperties["padding"];
  frameDivAlignSelf?: CSSProperties["alignSelf"];
  groupIconWidth?: CSSProperties["width"];
  groupIconFlex?: CSSProperties["flex"];
};

const FrameComponent19: FunctionComponent<FrameComponent19Type> = ({
  frameDivWidth,
  frameDivPadding,
  frameDivAlignSelf,
  groupIconWidth,
  groupIconFlex,
}) => {
  const lineAnchorStyle: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth,
      padding: frameDivPadding,
      alignSelf: frameDivAlignSelf,
    };
  }, [frameDivWidth, frameDivPadding, frameDivAlignSelf]);

  const groupDiv8Style: CSSProperties = useMemo(() => {
    return {
      width: groupIconWidth,
      flex: groupIconFlex,
    };
  }, [groupIconWidth, groupIconFlex]);

  return (
    <section className={styles.lineAnchor} style={lineAnchorStyle}>
      <div className={styles.rectangleParent} style={groupDiv8Style}>
        <div className={styles.frameChild} />
        <div className={styles.cornerConnector}>
          <div className={styles.shapeCorner}>
            <div className={styles.chain}>Chain</div>
            <div className={styles.nappa}>Nappa</div>
          </div>
        </div>
        <div className={styles.lineText}>
          <div className={styles.inlineEdit}>
            <img
              className={styles.image25Icon}
              loading="lazy"
              alt=""
              src="/image-25@2x.png"
            />
            <div className={styles.subscript}>
              <div className={styles.superscript} />
            </div>
          </div>
          <div className={styles.bulletList}>
            <div className={styles.listItem}>
              <div className={styles.nestedList}>
                <div className={styles.owner}>Owner</div>
              </div>
              <div className={styles.aagGpc}>AAG GPC</div>
            </div>
          </div>
          <div className={styles.layoutGrid}>
            <div className={styles.rowGuide} />
          </div>
          <div className={styles.locationBar}>
            <div className={styles.textAlignRight}>
              <div className={styles.garages}>Garages</div>
              <div className={styles.textAlignMiddle}>
                <div className={styles.textAlignBottom}>59</div>
              </div>
            </div>
          </div>
          <div className={styles.textAlignBaseline}>
            <div className={styles.textTransform} />
          </div>
          <div className={styles.italic}>
            <div className={styles.underline}>
              <div className={styles.location}>Location</div>
              <div className={styles.countrySelect}>
                <div className={styles.norway}>Norway</div>
              </div>
            </div>
          </div>
          <div className={styles.borderRadius}>
            <div className={styles.borderWidth} />
          </div>
          <div className={styles.borderStyle}>
            <div className={styles.padding}>
              <img className={styles.marginIcon} alt="" src="/vector-11.svg" />
              <div className={styles.flexContainer}>
                <img
                  className={styles.groupIcon}
                  loading="lazy"
                  alt=""
                  src="/group-11.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent19;

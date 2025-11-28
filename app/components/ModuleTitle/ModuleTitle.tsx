import styles from "./moduletitle.module.scss";
import Image from "next/image";
import circle from "public/moduleTitle/circle.svg";
import mouse from "public/moduleTitle/mouse.svg";
import line from "public/moduleTitle/line.svg";
export default function ModuleTitle({
  title,
  withTitle,
  subTitle,
}: {
  title?: string;
  withTitle?: boolean;
  subTitle?: string;
}) {
  return (
    <div className={styles.container}>
      <div className={styles.mouseScroller}>
        <Image src={mouse} alt="mouse"></Image>
        <Image src={line} alt="line"></Image>
      </div>
      {withTitle ? (
        <>
          <div className={styles.titlecontainer}>
            <span className="flex flex-col items-center">
              <h1 className={`${styles.h1} h1-u`}>{title}</h1>
              <div className={styles.underline}>
                <Image src={circle} alt="circle" />
                <span></span>
                <Image src={circle} alt="circle" />
              </div>
            </span>
          </div>
          <p className="para-u text-white mt-4">{subTitle}</p>
        </>
      ) : null}
    </div>
  );
}

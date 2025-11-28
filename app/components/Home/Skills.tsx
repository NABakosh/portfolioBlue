import ModuleTitle from "../ModuleTitle/ModuleTitle";
import Image from "next/image";
import styles from "./scss/skills.module.scss";
import pc from "public/skills/pc.svg";
import phone from "public/skills/phone.svg";
import react from "public/skills/react.svg";
import next from "public/skills/next.svg";
import clsx from "clsx";
export default function Skills() {
  return (
    <section className={styles.skills}>
      <ModuleTitle
        withTitle={true}
        title="Skills"
        subTitle="I am striving to never stop learning and improving"
      />
      <div className=" items-center flex flex-col gap-[90px]">
        <main>
          <div className={styles.content}>
            <div className={styles.contentBlock}>
              <Image src={pc} alt="pc" />
              <p className="menu-m text-bg-1">Web Development</p>
              <p className="para-m text-grey">REACT · NEXT</p>
            </div>
            <div className={styles.contentBlock}>
              <Image src={phone} alt="pc" />
              <p className="menu-m text-bg-1">App Development</p>
              <p className="para-m text-grey">React Native</p>
            </div>
          </div>
        </main>
        <aside className="line">
          <div className={styles.instruments}>
            <div className={styles.blocks}>
              <div className={clsx(styles.block, "bg-react")}>
                <Image src={react} alt="react" />
              </div>
              <h2 className="h2-m text-react">React</h2>
            </div>
            <div className={styles.blocks}>
              <div className={clsx(styles.block, "bg-next")}>
                <Image src={next} alt="next" />
              </div>
              <h2 className="h2-m text-next">Next</h2>
            </div>
            <div className={styles.blocks}>
              <div className={clsx(styles.block, "bg-react")}>
                <Image src={react} alt="react" />
              </div>
              <h2 className="h2-m text-react">React Native</h2>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

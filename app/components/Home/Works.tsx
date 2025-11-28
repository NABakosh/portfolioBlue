import styles from "./scss/works.module.scss";
import ModuleTitle from "../ModuleTitle/ModuleTitle";
import Image from "next/image";
import buttonLeft from "public/works/buttonLeft.svg";
import buttonRight from "public/works/buttonRight.svg";
import screens from "public/works/screens.png";
export default function Works() {
  return (
    <section className={styles.works}>
      <ModuleTitle
        title="Works"
        withTitle={true}
        subTitle="Is my mini works what i made when i learn everything"
      />
      <main className="main">
        <button>
          <Image src={buttonLeft} alt="buttonLeft" />
        </button>
        <div className={styles.slider}>
          <div className={styles.slide}>
            <Image src={screens} alt="testSlide" />
          </div>
        </div>
        <button>
          <Image src={buttonRight} alt="buttonRight" />
        </button>
      </main>
    </section>
  );
}

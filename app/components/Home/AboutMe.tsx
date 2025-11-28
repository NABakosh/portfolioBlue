import styles from "./scss/aboutme.module.scss";
import ModuleTitle from "../ModuleTitle/ModuleTitle";
import Image from "next/image";

import aboutMePng from "public/aboutMe/Image.png";

export default function AboutMe() {
  return (
    <section className={styles.aboutme}>
      <ModuleTitle withTitle={false} />
      <div className={styles.container}>
        <main className={styles.main}>
          <article className={styles.article}>
            <h1 className="h1-u">About Me</h1>
          </article>
          <aside className={styles.aside}>
            <p className="text-brand-2 code-m">{"<p>"}</p>
            <p className="text">
              <span className="logo-m text-brand-1">
                Hello!<br></br>
              </span>
              <span className="para-m ">
                My name is Baglan and I specialize in web developement that
                utilizes <span className="text-brand-1">HTML, CSS, JS,</span>
                and <span className="text-brand-1">REACT</span>
                etc. I am a highly motivated individual and eternal optimist
                dedicated to writing clear, concise, robust code that works.
                Striving to never stop learning and improving. When I'm not
                coding, I am writing blogs, reading, or picking up some new
                hands-on art project like photography. I like to have my
                perspective and belief systems challenged so that I see the
                world through new eyes.
              </span>
            </p>
            <p className="text-brand-2 code-m">{"<p>"}</p>
          </aside>
        </main>
        <aside>
          <Image src={aboutMePng} alt="aboutme" />
        </aside>
      </div>
    </section>
  );
}

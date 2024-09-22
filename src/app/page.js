/** @format */

import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "antd";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
      <h2
      // style={{ textAlign: "center", color: "black" }}
      >
        IVR - Platform lorem ipsumPellentesque laoreet erat vel nisi volutpat,
        vitae eleifend lorem bibendum. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Duis non lorem
        blandit, sollicitudin lectus vitae, pharetra quam. Morbi ut facilisis
        nunc. Quisque nisi lorem, sollicitudin eu tincidunt non, lobortis nec
        odio. Duis in neque vitae purus finibus luctus. Donec consequat
        imperdiet odio vitae tristique. Cras venenatis mauris quis rhoncus
        efficitur. Quisque dignissim, ex ac vehicula pulvinar, dui elit varius
        ex, sit amet fringilla magna libero in purus. Duis eu nulla nunc. Sed
        vel diam varius, pellentesque nisi nec, mollis nisi. Praesent tincidunt,
        diam eu ultricies pulvinar, justo lorem pellentesque enim, eu iaculis
        tortor tortor vitae diam. In vitae lacus eros. Cras neque purus,
        placerat quis interdum eu, imperdiet vel turpis. Ut tellus metus,
        maximus quis lacus id, sollicitudin maximus felis. Donec finibus orci
        vel augue iaculis porta. Pellentesque ut facilisis risus. Sed
        condimentum sem id imperdiet ultricies. Etiam mi arcu, molestie et massa
        vel, posuere iaculis metus. Vestibulum pulvinar augue et dignissim
        luctus. Proin tristique lacus vel arcu finibus, eu placerat ex
        fermentum. Phasellus non pellentesque nisi. Aliquam ante ex, accumsan
        vitae aliquet ac, malesuada a ex. Etiam sagittis, libero eu vulputate
        cursus, risus lectus hendrerit tellus, vel congue velit arcu id dolor.
      </h2>
      <Button type="primary">Submit</Button>
    </main>
  );
}

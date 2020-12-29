import {useState, useEffect} from 'react'
import Head from 'next/head'
import PoseNet from "react-posenet";
import Color from './api/Color'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [posesString, setPosesString] = useState([]);
  const [nosePosition, setNosePosition] = useState({
    x: 100 - Math.random() * 200,
    y: 100 - Math.random() * 200
  });

  useEffect(() => {
    if(posesString[0]){
    //nose
    // console.log(posesString[0]["keypoints"][0].part); 
    let position = posesString[0]["keypoints"][0].position;
    // console.log(100 - Math.random() * 200);
    setNosePosition(position);
    }
  }, [posesString]);

  return (
    <div className={styles.container}>
      {/* <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <main className={styles.main}>
        <PoseNet
          inferenceConfig={{ decodingMethod: "single-person" }}
          onEstimate={(poses) => {
            setPosesString(poses);
          }}
        />
        <Color nosePosition={nosePosition}/>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          // color=
        >
          Powered by Akin Pounds{" "}
          {/* <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} /> */}
        </a>
      </footer>
    </div>
  );
}

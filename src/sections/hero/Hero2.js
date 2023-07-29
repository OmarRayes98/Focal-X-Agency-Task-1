import styles from './hero.module.css';

import { useEffect, useState } from 'react';
import TextTransition  from 'react-text-transition';
import Button from '../../components/buttons/Button';


const TEXTS = ['React Developer', 'React Task' ,'React internship'];


const Hero2 = () => {

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(
          () => setIndex((index) => index + 1),
          3000, // every 1 seconds
        );
        return () => clearTimeout(intervalId);
      }, []);

  return (
    <>
    <div className={styles.banner}>
        <div className={styles.slider}></div>
        
            <div className={styles.content} >
                <h2 className={styles["content-title"]} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                    <span>
                        The modern landing page for
                    </span>

                    <span className={styles.animated}>
                        <TextTransition  >{TEXTS[index % TEXTS.length]}</TextTransition>
                    </span>
                </h2>

                <p className={styles["content-text"]} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                    The easiest way to build React landing page in seconds
                </p>

                <Button title={"Download Your Free Version"}  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500"/>

            </div>

    </div>
    </>
)
}

export default Hero2

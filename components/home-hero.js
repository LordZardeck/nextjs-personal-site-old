import SbEditable from 'storyblok-react';
import styles from './home-hero.module.css';

const HomeHero = ({ blok }) => (
    <SbEditable content={blok}>
        <div className={styles.homeHero}>
            <div className={styles.content}>
                <h1 dangerouslySetInnerHTML={{__html: blok.text.split("\n").join("<br />")}}></h1>
                {
                    blok.call_to_action_btn.length > 0 &&
                    <button className={styles.callToAction}>Hire Me</button>
                }
            </div>
        </div>
    </SbEditable>
)

export default HomeHero
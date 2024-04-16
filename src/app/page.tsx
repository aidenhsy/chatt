import Image from 'next/image';
import styles from './page.module.css';
import myPic from '../../public/heroimage.png';
import logo from '../../public/chatapp.svg';
import chatimage from '../../public/chatimage.jpg';

export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <div className="container items-center">
          <div className={styles.flexBetween}>
            <div>
              <Image
                src={logo} // Point to the image import or URL
                alt="Description of the image"
              />
            </div>
            <div className="mobileHide">
              <a className="navlink">Product</a>
              <a className="navlink">Services</a>
              <a className="navlink">Contact</a>
              <a className="navlink">Log In</a>
              <button className="primaryButton navButton">Try it Free</button>
            </div>
          </div>
        </div>
      </nav>
      {/* Hero Section  */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.flexBetween}>
            <div className={styles.heroRightDiv}>
              <h1 className={styles.whiteText}>
                Have your
                <br />
                best chat
              </h1>
              <p className={`${styles.whiteText} mb2`}>
                Fast, easy & unlimited chat.
              </p>
              <div className={styles.doubleButton}>
                <button className={`primaryButton ${styles.whiteButton}`}>
                  Try it Free
                </button>
                <button className={`primaryButton ${styles.transparentButton}`}>
                  Try it Free
                </button>
              </div>
            </div>
            <div>
              <Image
                src={myPic} // Point to the image import or URL
                alt="Description of the image"
                layout="responsive" // Optional: Adjusts image size to fit its container
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.columnCenterFlex}>
            <h2>Instant Team Chats</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa.
            </p>
            <Image
              src={chatimage} // Point to the image import or URL
              alt="Description of the image"
              layout="responsive" // Optional: Adjusts image size to fit its container
            />
          </div>
        </div>
      </section>
    </main>
  );
}

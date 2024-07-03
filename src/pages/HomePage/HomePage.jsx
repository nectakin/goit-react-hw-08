
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
          <div className={styles.container}>
            <h1 className={styles.title}>Welcome to your phone book</h1>
            <p className={styles.description}>Easily store, organize, and access all your important contacts in one place.</p>
          </div>
    </>
  );
};
export default HomePage;

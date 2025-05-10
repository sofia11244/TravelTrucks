import { useNavigate, useLocation } from 'react-router-dom';
import styles from './Header.module.css'; 


export default function Header() {
  const navigate = useNavigate();
  const location= useLocation();

  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <p className={styles.headerText}>
          <span className={styles.bold}>Travel</span>
          <span className={styles.grey}>Trucks</span>
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <button 
        className={`${styles.button} ${location.pathname === '/' ? styles.active : ''}`}
        type="button"
        onClick={() => navigate("/")} 
      >
        Home
      </button>
      <button 
      className={`${styles.button} ${location.pathname === '/catalog' ? styles.active : ''}`}
        type="button"
        onClick={() => navigate("/catalog")} 
      >
        Catalog
      </button>
      </div>
    </div>
  );
}

















// import style from './Header.module.css'; // Adjust the path as necessary
// const Footer = () => (
//   <footer className="footer">
//     <div>
//     <p className={style.footerText}>
//       &copy; {new Date().getFullYear()} TravelTrucks
//     </p>
//     </div>
//   </footer>
// );

// export default Footer;
import style from './HomePage.module.css';
import { useNavigate } from 'react-router-dom';
import picture from '../assets/camper-home.jpg';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className={style.homepage}>
      <div className={style.banner}>
        <img src={picture} alt="Camper Home" className={style.image} />

        <div className={style.overlay}>
          <div className={style.content}>
            <h1 className={style.title}>Campers of your dreams</h1>
            <p className={style.subtitle}>You can find everything you want in our catalog</p>
            <button 
              className={style.button}
              type="button"
              onClick={() => navigate("/catalog")}
            >
              View Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

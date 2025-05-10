import style from './HomePage.module.css'; 
import { useNavigate } from 'react-router-dom';


export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className={style.homepage}>
      <div className={style.banner}>
        <img src="/images/banner.jpg" alt="Banner" className={style.bannerImage} />
        <div className={style.overlay}>
          <h1 className={style.title}>Campers of your dreams</h1>
          <p className={style.subtitle}>You can find everything you want in our catalog</p>
          
        </div>
        <div>
          <button 
        className="button"
        type="button"
        onClick={() => navigate("/catalog")} // Catalog Page'e yönlendir
      >
        View Now
      </button>
        </div>
      </div>
        
    </div>
  );
}

  






// Geniş bir hero/banner (örneğin doğada bir karavan görseli).

// Projenin kısa açıklaması (“Karavanını kirala, doğayla buluş!”).

// “View Catalog” butonu → /catalog sayfasına yönlendirir.

// Statik, veri çekmeyen sayfa.


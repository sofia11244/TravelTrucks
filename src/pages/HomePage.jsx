// HomePage.jsx
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <button 
        className="button"
        type="button"
        onClick={() => navigate("/catalog")} // Catalog Page'e yönlendir
      >
        View Now
      </button>
    </div>
  );
}


// Geniş bir hero/banner (örneğin doğada bir karavan görseli).

// Projenin kısa açıklaması (“Karavanını kirala, doğayla buluş!”).

// “View Catalog” butonu → /catalog sayfasına yönlendirir.

// Statik, veri çekmeyen sayfa.


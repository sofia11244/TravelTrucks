import { useNavigate } from 'react-router-dom';
// import './third.css';

export default function First() {
  const navigate = useNavigate();


    return (
        <div>
            <h1>Hi Pookie</h1>
            
            
            <button 
            className="button"
            type="button"
            onClick={() => navigate("/catalog")}
          >
            Catalog
          </button>
          

        </div>
    );
}
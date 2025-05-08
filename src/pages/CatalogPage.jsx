import { useNavigate } from 'react-router-dom';
// import './third.css';

export default function First() {
  const navigate = useNavigate();


    return (
        <div>
            <h1>Catalog Page</h1>
            
            
            <button 
            className="button"
            type="button"
            onClick={() => navigate("/catalog/:id")}
          >
            Catalog
          </button>
          

        </div>
    );
}
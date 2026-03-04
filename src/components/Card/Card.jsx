import './Card.css';

const Card = ({ children, className = '', onClick }) => {
    return (
        <div
            className={`premium-card ${onClick ? 'clickable' : ''} ${className}`}
            onClick={onClick}
        >
            <div className="card-glow"></div>
            <div className="card-content">
                {children}
            </div>
        </div>
    );
};

export default Card;

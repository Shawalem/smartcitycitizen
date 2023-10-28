import { useContext } from "react";
import "./card.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
// usefetch

const NewsCard = ({ allnews, collection }) => {
  // for verifation
  const { user } = useContext(AuthContext);

  if (!allnews) {
    return null; // or you can return a placeholder component or message
  }

  // Perform null/undefined checks for nested objects
  const imageUrl = allnews.attributes?.img?.data?.attributes?.url;

  return (
    <div className="news">
      {user?.isVerified && user?.email ? (
        <div className="news_img">
          <Link to={`/details/${collection}/${allnews.id}`}>
            <img src={`${imageUrl}`} alt="news" />
          </Link>
        </div>
      ) : (
        <div className="news_img">
          <Link to='/login'>
            <img src={`${imageUrl}`} alt="news" />
          </Link>
        </div>
      )}

      <div className="news_desc">
        {user?.isVerified && user?.email ? (
          <Link to={`/details/${collection}/${allnews.id}`}>
            {allnews.attributes.title}
          </Link>
        ) : (
          <Link to='/login'>
            {allnews.attributes.title}
          </Link>
        )}

        {allnews.attributes.author || allnews.attributes.date ? (
          <div className="author">
            <strong>{allnews.attributes.author}</strong>
            <span>{allnews.attributes.date}</span>
          </div>
        ) : (
          ""
        )}
        
        <p>{allnews.attributes.para}</p>
      </div>
    </div>
  );
};

export default NewsCard;

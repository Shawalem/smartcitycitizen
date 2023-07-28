import { Link } from "react-router-dom";
import { RiArrowDownSLine } from "react-icons/ri";
import "./subLink.scss";

const SubLink = ({ mainLink, mainLinkRef, subLinks = [],handleLink,optionalClass }) => {
  return (
    <div className="link">
      <div className="realLink" onClick={handleLink}>
        <Link to={mainLinkRef}>{mainLink}</Link>
        <RiArrowDownSLine />
      </div>
      <div className={`subLink ${optionalClass}`}>
        {subLinks.map((link) => (
          <Link key={link.ref} to={link.ref}>
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubLink;

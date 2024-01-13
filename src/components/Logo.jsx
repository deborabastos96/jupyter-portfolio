import { Link } from 'react-router-dom';

function Logo({ link, src, alt }) {
  return (
    <Link to={link}>
      <img src={src} alt={alt} className="h-8" />
    </Link>
  );
}

export default Logo;

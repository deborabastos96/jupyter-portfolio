import { useState } from 'react';
import { Link } from 'react-router-dom';

function LinkAnchor({ href, children, target, type, to }) {
  const [isActive, setIsActive] = useState(false);

  const base =
    'hover:bg-hoverLink flex items-center gap-1 select-none relative ';

  const styles = {
    btn: base + 'text-[13px] px-2 py-[4px] rounded-sm ',
    icon: base + 'text-sm px-[8px] py-[6px] cursor-pointer',
    nav: base + 'text-[13px] px-2 py-[4px] cursor-default nav ',
    btnMenu: base + 'text-[13px] px-2 py-[4px] rounded-sm my-1 pl-[30px]',
  };

  if (type === 'nav')
    return (
      <button
        onMouseEnter={() => {
          setIsActive(true);
        }}
        onMouseLeave={() => {
          setIsActive(false);
        }}
        className={`${isActive ? styles[type] + 'active' : styles[type]}`}
      >
        {children}
      </button>
    );

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <a href={href} target={target} className={styles[type]}>
      {children}
    </a>
  );
}

export default LinkAnchor;

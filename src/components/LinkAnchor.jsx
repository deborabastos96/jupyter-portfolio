function LinkAnchor({ href, children, target, type, onClickBtn }) {
  const base =
    'hover:bg-hoverLink flex items-center gap-1 select-none relative';

  const styles = {
    btn: base + 'text-[13px] px-2 py-[4px] rounded-sm ',
    icon: base + 'text-sm px-[8px] py-[6px] cursor-pointer',
    nav: base + 'text-[13px] px-2 py-[4px] cursor-default active',
  };

  if (onClickBtn)
    return (
      <button onClick={onClickBtn} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <a href={href} target={target} className={styles[type]}>
      {children}
    </a>
  );
}

export default LinkAnchor;

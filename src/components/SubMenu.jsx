function SubMenu({ children }) {
  return (
    <div className="submenu absolute left-0 top-7 z-50 hidden w-[200px] border border-border bg-white text-left shadow-subMenu">
      <ul>{children}</ul>
    </div>
  );
}

export default SubMenu;

import Logo from './Logo';
import NavItem from './NavItem';

function Header() {
  return (
    <header>
      <div className="border-border flex items-center justify-between border-b px-3 py-1">
        <div className="flex items-center gap-2">
          <Logo
            to="/"
            src="../../public/jupyter-logo.webp"
            alt="Jupyter Logo"
          />
          <span className="text-[18px]">Lorena&apos;s Portfolio</span>
          <span className="text-[13px]">Last Checkpoint: 9 days ago</span>
        </div>

        <div>
          <Logo to="/" src="../../public/python-logo.webp" alt="Python Logo" />
        </div>
      </div>

      <nav className="border-border flex items-center justify-between border-b px-3 py-1">
        <ul className="flex gap-4 text-[13px]">
          <NavItem>File</NavItem>
          <NavItem>Edit</NavItem>
          <NavItem>View</NavItem>
          <NavItem>Run</NavItem>
          <NavItem>Kernel</NavItem>
          <NavItem>Settings</NavItem>
          <NavItem>Help</NavItem>
        </ul>

        <button className="border-borderBtn rounded-sm border px-1 text-sm">
          Trusted
        </button>
      </nav>

      <div></div>
    </header>
  );
}

export default Header;

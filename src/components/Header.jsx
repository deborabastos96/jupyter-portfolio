import { GoCircle, GoLinkExternal } from 'react-icons/go';
import { IoIosPlay, IoMdCut } from 'react-icons/io';
import { FaSave } from 'react-icons/fa';
import { HiOutlinePlus } from 'react-icons/hi';
import { MdContentCopy, MdContentPaste, MdStop } from 'react-icons/md';
import { GrRefresh } from 'react-icons/gr';
import { IoPlayForwardSharp } from 'react-icons/io5';
import { useState } from 'react';

import LinkAnchor from './LinkAnchor';
import Logo from './Logo';
import SubMenu from './SubMenu';
import SubMenuItem from './SubMenuItem';

function Header() {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white">
      <div className="grid justify-center border-b border-border">
        <div className="flex w-[1200px] items-center justify-between px-3 py-1">
          <div className="flex items-center gap-2">
            <Logo to="/" src="./jupyter-logo.webp" alt="Jupyter Logo" />
            <span className="text-[18px]">Lorena&apos;s Portfolio</span>
            <span className="text-[13px]">Last Checkpoint: 9 days ago</span>
          </div>

          <div>
            <Logo to="/" src="./python-logo.webp" alt="Python Logo" />
          </div>
        </div>
      </div>

      <div className="grid justify-center border-b border-border">
        <nav className="flex w-[1200px] items-center justify-between px-3">
          <ul
            onFocus={() => {
              setIsSubMenuOpen(true);
            }}
            onBlur={() => {
              setIsSubMenuOpen(false);
            }}
            className={`menu active flex text-[13px] ${isSubMenuOpen ? 'active' : ''}`}
          >
            <li>
              <LinkAnchor type="nav">
                <span>File</span>
                <SubMenu>
                  <SubMenuItem>
                    <LinkAnchor
                      type="btnMenu"
                      target="_blank"
                      href="https://www.google.com/"
                    >
                      CV (Curriculum Vitae)
                    </LinkAnchor>
                  </SubMenuItem>
                </SubMenu>
              </LinkAnchor>
            </li>
            <li>
              <LinkAnchor type="nav">
                <span>Edit</span>
              </LinkAnchor>
            </li>
            <li>
              <LinkAnchor type="nav">View</LinkAnchor>
            </li>
            <li>
              <LinkAnchor type="nav">Run</LinkAnchor>
            </li>
            <li>
              <LinkAnchor type="nav">Kernel</LinkAnchor>
            </li>
            <li>
              <LinkAnchor type="nav">Settings</LinkAnchor>
            </li>
            <li>
              <LinkAnchor type="nav">Help</LinkAnchor>
            </li>
          </ul>

          <button className="cursor-default rounded-sm border border-borderBtn px-1 text-sm">
            Trusted
          </button>
        </nav>
      </div>

      <div className="grid justify-center border-b border-border">
        <div className="flex w-[1200px] items-center justify-between px-1 py-[2px]">
          <div className="flex">
            <LinkAnchor type="icon">
              <FaSave />
            </LinkAnchor>
            <LinkAnchor type="icon">
              <HiOutlinePlus />
            </LinkAnchor>
            <LinkAnchor type="icon">
              <IoMdCut />
            </LinkAnchor>
            <LinkAnchor type="icon">
              <MdContentCopy />
            </LinkAnchor>
            <LinkAnchor type="icon">
              <MdContentPaste />
            </LinkAnchor>
            <LinkAnchor type="icon">
              <IoIosPlay />
            </LinkAnchor>
            <LinkAnchor type="icon">
              <MdStop />
            </LinkAnchor>
            <LinkAnchor type="icon">
              <GrRefresh />
            </LinkAnchor>
            <LinkAnchor type="icon">
              <IoPlayForwardSharp />
            </LinkAnchor>
            <LinkAnchor type="btn">
              <select name="select" defaultValue={'Markdown'}>
                <option>Code</option>
                <option value="Markdown">Markdown</option>
                <option>Raw</option>
              </select>
            </LinkAnchor>
          </div>

          <div className="flex">
            <LinkAnchor
              href="https://github.com/lorenaaxbastos"
              target="_blank"
              type="btn"
            >
              <span>GitHub</span>
              <GoLinkExternal />
            </LinkAnchor>
            <LinkAnchor type="btn">
              <span>Python (Pyodide)</span>
            </LinkAnchor>
            <LinkAnchor type="icon">
              <GoCircle />
            </LinkAnchor>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

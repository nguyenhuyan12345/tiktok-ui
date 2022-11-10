import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Wrapper as PropperWrapper } from '~/components/Popper';

import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Menuitem from './Menuitem.js';

import Tippy from '@tippyjs/react/headless';
import styles from './Menu.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
  const [history, setHistory] = useState([{ data: items }]);
  const currentMenu = history[history.length - 1];

  const renderItems = () => {
    return currentMenu.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <Menuitem
          key={index}
          item={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            }
          }}
        />
      );
    });
  };

  return (
    <Tippy
      interactive
      placement="bottom-end"
      render={(attrs) => {
        return (
          <div className={cx('menu-box')} tabIndex="-1" {...attrs}>
            <PropperWrapper>
              <ul className={cx('menu-list')}>{renderItems()}</ul>
            </PropperWrapper>
          </div>
        );
      }}
    >
      {children}
    </Tippy>
  );
}

export default Menu;

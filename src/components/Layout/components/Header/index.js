import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import Menu from './Menu/index';

import images from '~/asstes/images';
import styles from './Header.mudule.scss';
import { Wrapper as PropperWrapper } from '~/components/Popper';
import AccountItem from '~/components/Accountitem';
import {
  faCircleXmark,
  faMagnifyingGlass,
  faPlus,
  faSpinner,
  faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
const logoTiktok = images.logoTiktok.default;

const languageIcon = images.langguage.default;
const feedb = images.feedb.default;
const keybo = images.keybo.default;

const MENU_ITEMS = [
  {
    icon: languageIcon,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'en',
          title: 'English',
        },
      ],
    },
  },
  {
    icon: feedb,
    title: 'Feeback and help',
    to: '/feedback',
  },
  {
    icon: keybo,
    title: 'Keyboard and shortcuts',
  },
];

function Header() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchInput, setSetSearchInput] = useState('');

  const getSearchInput = (input) => {
    setSetSearchInput(input);
  };

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 4]);
    }, 0);
  }, []);

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <a href="/">
            <img src={logoTiktok} className={cx('logo-icon')}></img>
          </a>
        </div>

        <Tippy
          // visible={searchResult.length > 0}
          interactive={true}
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PropperWrapper>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <h3 className={cx('search-result-label')}>View all results for "{searchInput}"</h3>
              </PropperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input
              value={searchInput}
              className={cx('search-input')}
              placeholder="Search accounts and videos"
              onChange={(e) => {
                getSearchInput(e.target.value);
              }}
            />
            <button className={cx('clear')}>
              <FontAwesomeIcon className={cx('clear-icon')} icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('loading-icon')} icon={faSpinner} />
            <span className={cx('vertical-line')}></span>
            <button className={cx('search-btn')}>
              <FontAwesomeIcon className={cx('search-btn-icon')} icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={cx('action')}>
          <button className={cx('upload')}>
            <FontAwesomeIcon icon={faPlus} />
            Upload
          </button>

          <button className={cx('login')}>Login</button>

          <Menu items={MENU_ITEMS}>
            <button className={cx('menu')}>
              <FontAwesomeIcon className={cx('menu-icon')} icon={faEllipsisVertical} />
            </button>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;

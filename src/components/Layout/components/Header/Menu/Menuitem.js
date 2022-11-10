import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
document.title = 'Clone tiktok';

const cx = classNames.bind(styles);
function Menuitem({ item, onClick }) {
  return (
    <button onClick={onClick} className={cx('menu-item')}>
      <img src={item.icon} alt="Language" />
      <span className={cx('menu-title')}>{item.title}</span>
    </button>
  );
}

export default Menuitem;

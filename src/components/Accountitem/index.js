import classNames from 'classnames/bind';

import styles from './Accountitem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper-account')}>
      <img
        src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/eed67edcd2ad6c7e2d7c884ca34ca2d6~c5_300x300.webp?x-expires=1666616400&x-signature=JBwr1vfzMHZHZAbpHU4aniQQn8g%3D"
        alt="accAvata"
        className={cx('avata')}
      ></img>
      <div className={cx('info')}>
        <div className={cx('name')}>
          <h4>Nguyễn Huy An</h4>
          <FontAwesomeIcon className={cx('icon-check')} icon={faCheck} />
        </div>
        <span className={cx('username')}>Huy An</span>
      </div>
    </div>
  );
}

export default AccountItem;

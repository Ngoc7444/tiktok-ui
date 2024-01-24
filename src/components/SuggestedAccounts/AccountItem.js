import classNames from "classnames/bind";
import PropTypes from "prop-types";
import Tippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Wrapper as PopperWrapper } from "@/components/Popper";

import styles from "./SuggestedAccounts.module.scss";
import AccountPreview from "./AccountPreview/AccountPreview";

const cx = classNames.bind(styles);
function AccountItem() {
  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccountPreview />
        </PopperWrapper>
      </div>
    );
  };
  return (
    <div>
      <Tippy
        interactive
        delay={[800, 0]}
        offset={[-20, 0]}
        render={renderPreview}
        placement="bottom"
      >
        <div className={cx("account-item")}>
          <img
            className={cx("avatar")}
            src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7d18607b5cd6d71940dfb69828c99ea1~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1706104800&x-signature=Hu%2FBp8AW4%2BP%2BWfTRu38qsqX2KbY%3D"
            alt=""
          />
          <div className={cx("item-info")}>
            <p className={cx("nickname")}>
              <strong>ngoc1701</strong>
              <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
            </p>
            <p className={cx("name")}>Nguyễn Đình Ngọc</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

export default AccountItem;

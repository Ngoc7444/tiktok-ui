import classNames from "classnames/bind";
import styles from "./AccountPreview.module.scss";
import Button from "@/components/Button";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const cx = classNames.bind(styles);
function AccountPreview() {
  return (
    <div className={cx("wrapper")}>
      <header className={cx("header")}>
        <img
          className={cx("avatar")}
          src="
            https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7d18607b5cd6d71940dfb69828c99ea1~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1706104800&x-signature=Hu%2FBp8AW4%2BP%2BWfTRu38qsqX2KbY%3D"
          alt=""
        />
        <Button className={cx("follow")} primary>Follow</Button>
      </header>
      <div className={cx("body")}>
        <p className={cx("nickname")}>
          <strong>ngoc1701</strong>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </p>
        <p className={cx("name")}>Nguyễn Đình Ngọc</p>
        <p className={cx("analytics")}>
          <strong className={cx("value")}>8.2M </strong>
          <label className={cx("label")}>Followers</label>
          <strong className={cx("value")}>8.2M </strong>
          <label className={cx("label")}>Likes</label>
        </p>
      </div>
    </div>
  );
}

export default AccountPreview;

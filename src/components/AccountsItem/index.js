import classNames from "classnames/bind";
import styles from "./AcoountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Image from "../Image";
const cx = classNames.bind(styles);
function AcoountItem() {
  return (
    <div className={cx("wrapper")}>
      <Image
        className={cx("avatar")}
        src="https://fullstacke.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
        alt="F8"
      />

      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Nguyễn Đình Ngọc</span>
          <FontAwesomeIcon
            className={cx("check")}
            icon={faCheckCircle}
          ></FontAwesomeIcon>
        </h4>

        <span className={cx("username")}>NguyenDinhNgoc</span>
      </div>
    </div>
  );
}

export default AcoountItem;

import styles from "./Header.module.scss";

import classNames from "classnames/bind";

import images from "@/assets/image";

import Image from "@/components/Image";

import "tippy.js/dist/tippy.css";

import Tippy from "@tippyjs/react";

import Button from "@/components/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

import Menu from "@/components/Popper/Menu";

import {
  CoinIcon,
  HelpIcon,
  InboxIcon,
  LanguageIcon,
  LogoutIcon,
  MessageIcon,
  ProfileIcon,
  SettingsIcon,
  ShortcutsIcon,
  UploadIcon,
} from "@/components/Icons";

import Search from "../Seacch";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <LanguageIcon />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          type: "Language",
          code: "en",
          title: "English",
        },
        {
          type: "Language",
          code: "vi",
          title: "Tiếng Việt",
        },
      ],
    },
  },
  {
    icon: <HelpIcon />,
    title: "Feadback and help",
    to: "/feedback",
  },
  {
    icon: <ShortcutsIcon />,
    title: "Keyboard shortcuts",
  },
];
function Header() {
  const currentUser = true;

  // Handle logic
  const handleMenuChange = (MenuItem) => {
    switch (MenuItem.type) {
      case "Language":
        // Handle change language
        break;
      default:
    }
  };

  const userMenu = [
    {
      icon: <ProfileIcon />,
      title: "View profile",
      to: "/@ngoc1701",
    },
    {
      icon: <CoinIcon />,
      title: "Get Coin",
      to: "/coin",
    },
    {
      icon: <SettingsIcon />,
      title: "Settings",
      to: "/settings",
    },
    ...MENU_ITEMS,
    {
      icon: <LogoutIcon />,
      title: "Log out",
      to: "/logout",
      separate: true,
    },
  ];
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="TikTok" />
        </div>
        <Search />

        <div className={cx("actions")}>
          {currentUser ? (
            <>
              <Tippy content="Upload video" placement="bottom">
                <button className={cx("action-btn")}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy content="Message..." placement="bottom">
                <button className={cx("action-btn")}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy content="Inbox" placement="bottom">
                <button className={cx("action-btn")}>
                  <InboxIcon />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button upload>Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}

          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image
                src="https://fullstacke.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                className={cx("user-avatar")}
                alt="Nguyen Dinh Ngoc"
              />
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;

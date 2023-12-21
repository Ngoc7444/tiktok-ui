import HeadlessTippy from "@tippyjs/react/headless";

import AcoountItem from "@/components/AccountsItem";

import classNames from "classnames/bind";

import styles from "./Search.module.scss";

import { Wrapper as PopperWrapper } from "@/components/Popper";

import { SearchIcon } from "@/components/Icons";

import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState("");

  const [searchResult, setSearchResult] = useState([]);

  const [showResult, setShowResult] = useState(true);

  const inputRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 0);
  }, []);

  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };
  return (
    <HeadlessTippy
      interactive
      visible={showResult && searchResult.length > 0}
      render={(attr) => (
        <div className={cx("search-result")} tabIndex="-1" {...attr}>
          <PopperWrapper>
            <h4 className={cx("search-title")}>Acoounts</h4>
            <AcoountItem />
            <AcoountItem />
            <AcoountItem />
            <AcoountItem />
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx("search")}>
        <input
          ref={inputRef}
          value={searchValue}
          placeholder="Search accounts and videos"
          spellCheck={false}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShowResult(true)}
        />
        {!!searchValue && (
          <button className={cx("clear")} onClick={handleClear}>
            <FontAwesomeIcon icon={faXmarkCircle} />
          </button>
        )}

        {/* <LoadingIcon className={cx("loading")} /> */}

        <button className={cx("search-btn")}>
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;

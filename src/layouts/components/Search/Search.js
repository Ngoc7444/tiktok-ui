import HeadlessTippy from "@tippyjs/react/headless";

import AccountItem from "@/components/AccountsItem";

import classNames from "classnames/bind";

import styles from "./Search.module.scss";

import * as searchServices from "@/services/searchServices";

import { useDebounce } from "@/hooks";

import { Wrapper as PopperWrapper } from "@/components/Popper";

import { SearchIcon } from "@/components/Icons";

import { useState, useEffect, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";

import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState("");

  const [searchResult, setSearchResult] = useState([]);

  const [showResult, setShowResult] = useState(true);

  const [loading, setLoading] = useState(false);

  const inputRef = useRef();

  const debounced = useDebounce(searchValue, 500);

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchAPI = async () => {
      setLoading(true);
      const result = await searchServices.search(debounced);
      setSearchResult(result);
      setLoading(false);
    };
    fetchAPI();
  }, [debounced]);

  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(" ")) {
      setSearchValue(searchValue);
    }
  };

  return (
    <div>
      <HeadlessTippy
        interactive
        visible={showResult && searchResult.length > 0}
        render={(attr) => (
          <div className={cx("search-result")} tabIndex="-1" {...attr}>
            <PopperWrapper>
              <h4 className={cx("search-title")}>Acoounts</h4>
              {searchResult.map((result) => (
                <AccountItem key={result.id} data={result} />
              ))}
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
            onChange={handleChange}
            onFocus={() => setShowResult(true)}
          />
          {!!searchValue && !loading && (
            <button className={cx("clear")} onClick={handleClear}>
              <FontAwesomeIcon icon={faXmarkCircle} />
            </button>
          )}

          {loading && (
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
          )}

          <button
            className={cx("search-btn")}
            onMouseDown={(e) => e.preventDefault()}
          >
            <SearchIcon />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;

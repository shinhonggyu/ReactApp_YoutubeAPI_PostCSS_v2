import React, { useRef } from 'react';
import styles from './main_search_bar.module.css';

const MainSearchBar = () => {
  const searchWrapRef = useRef();
  const inputRef = useRef();

  const onKeyPress = (event) => {
    if (event.key == 'Enter' && inputRef.current.value !== '') {
      mainToSearch();
    }
  };

  const mainToSearch = () => {};

  const searchFocusOn = () => {
    searchWrapRef.current.className = `${styles.searchWrap} ${styles.focus}`;
  };

  const searchFocusOut = () => {
    if (inputRef.current.value == '') {
      searchWrapRef.current.className = `${styles.searchWrap}`; //
    }
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="./images/logo.png" alt="logo" />
        <div className={styles.titleWrap}>
          <h1 className={styles.title}>WOOTUBE</h1>
          <p className={styles.slogan}>welcom to wootube</p>
        </div>
      </div>
      <div ref={searchWrapRef} className={`${styles.searchWrap}`}>
        <input
          ref={inputRef}
          className={styles.input}
          onFocus={searchFocusOn}
          onBlur={searchFocusOut}
          onKeyPress={onKeyPress}
          onMouseEnter={() => console.log('hi')}
          type="search"
          placeholder=""
        />
        <button
          className={styles.button}
          onClick={() => console.log('hi')}
          type="submit"
        >
          <img
            className={styles.buttonImg}
            src="./images/icon-search-blue.png"
            alt="search"
          />
        </button>
      </div>
    </header>
  );
};

export default MainSearchBar;

import React, { useRef, useState } from 'react';
import styles from '../image_file_input/image_file_input.module.css';

const ImageFileInput = ({ name }) => {
  const [loading, setLoading] = useState();
  const inputRef = useRef();

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
      />
      { !loading && (
        <button className={`${styles.button} ${name ? styles.pink : styles.grey}`} >
          {name || 'No file'}
        </button>
      )}
      {loading && <div className={styles.loading}></div>}
    </div>
  );
}

export default ImageFileInput;
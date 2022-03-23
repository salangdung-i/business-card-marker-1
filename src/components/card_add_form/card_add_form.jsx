import React, { useRef, useState } from 'react';
import Button from '../button/button';
import styles from '../card_add_form/card_add_form.module.css';
import ImageFileInput from '../image_file_input/image_file_input';

const CardAddForm = ({ addCard }) => {
  const [file, setFile] = useState({ fileName: null, fileURL: null });
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef()
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const themeRef = useRef();

  const onSubmit = event => {
    event.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value,
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: file.fileName || '',
      fileURL: file.fileURL || '',
    };
    formRef.current.reset();
    setFile({ fileName: null, fileURL: null });
    addCard(card);
  };

  return (
    <form ref={formRef} className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="name"
        ref={nameRef}
        placeholder="Name"
      />
      <input
        className={styles.input}
        type="text"
        name="company"
        ref={companyRef}
        placeholder="Company"
      />
      <select
        className={styles.select}
        name="theme"
        ref={themeRef}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="title"
        ref={titleRef}
        placeholder="Title"
      />
      <input
        className={styles.input}
        type="text"
        name="email"
        ref={emailRef}
        placeholder="Email"
      />
      <textarea
        className={styles.textarea}
        name="message"
        ref={messageRef}
        placeholder="Message"
      />
      <div className={styles.fileInput}>
        <ImageFileInput name={file.fileName} />
      </div>
      <Button name='Add' onClick={onSubmit} />
    </form>
  );
}
export default CardAddForm;
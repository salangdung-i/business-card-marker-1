import React, { memo } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthService from './services/auth_service';
import { firebaseApp } from './services/firebase';
import ImageUploader from './services/image_uploader';
import ImageFileInput from './components/image_file_input/image_file_input';
import CardRepository from './services/card_repository';

const authService = new AuthService(firebaseApp);
const imageUploader = new ImageUploader();
const FileInput = memo(props => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
));
const cardRepository = new CardRepository(firebaseApp);

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} cardRepository={cardRepository} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


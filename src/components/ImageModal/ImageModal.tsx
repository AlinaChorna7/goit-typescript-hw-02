
import Modal from 'react-modal';
import styles from './ImageModal.module.css';
import { Image } from '../App/App.types';

type ImageModalProps={
  image: Image | null;
onClose: ()=> void;
}



const ImageModal = ({ image, onClose }:ImageModalProps) => {
  
  const imageUrl = image && image.urls ? image.urls.full : '';
  const altDescription = image && image.alt_description ? image.alt_description : 'Image';

  return (
    <Modal isOpen={!!image} onRequestClose={onClose} className={styles.ImageModal} overlayClassName="Overlay" ariaHideApp={false}>
      <button className={styles.ImageModalcloseButton} onClick={onClose}>
        Close
      </button>
      
      {image ? <img src={imageUrl} alt={altDescription} className={styles.modalImage} /> : <p>Loading image...</p>}
    </Modal>
  );
};

export default ImageModal;
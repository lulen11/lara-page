import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../modal';
import styles from './styles.module.scss';

const PortfolioModal = ({ visible, toggleModal, children }) => (
  <Modal
    showModal={visible}
    handleModal={toggleModal}
    hideBodyOverflowY
    type="drawer"
    backgroundColor="rgba(0,0,0, 0.6)"
    withCloseIcon
  >
    <div className={styles.typeformIframeContainer}>
      {children}
    </div>
  </Modal>
);

PortfolioModal.defaultProps = {
  visible: false,
};

PortfolioModal.propTypes = {
  visible: PropTypes.bool,
  toggleModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default PortfolioModal;

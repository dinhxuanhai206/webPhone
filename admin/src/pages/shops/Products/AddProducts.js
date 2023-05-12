import Modal from 'components/Modal/Modal';
import React from 'react';
import classNames from 'classnames/bind';
import styles from './AddProduct.module.scss';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const cx = classNames.bind(styles);

const AddProducts = ({ className, visible, onClose }) => {
    return (
        <Modal
            visible={visible}
            onClose={onClose}
            bodyClassName={cx('modal-body')}
            closeClassName={cx('button-close')}
            outerClassName={cx('modal-search')}
        >
            <Typography pb="20px" mb="20px" variant="h2" sx={{ borderBottom: '2px solid #fafafa' }}>
                Add Products
            </Typography>
            <Box sx={{ width: '100%' }}></Box>
        </Modal>
    );
};

export default AddProducts;

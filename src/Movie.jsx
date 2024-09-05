import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import './styles.css';

const Movie = ({ id, genre, title, description, onDelete }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleDelete = () => {
        onDelete(id);
    };

    return (
            <li className="movie-item">
                {title}
                <button onClick={openModal}>Open Description</button>
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <h2>Description</h2>
                    <p>{description}</p>
                    <button onClick={handleDelete}>Delete</button>
                </Modal>
            </li>
        );

};

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default Movie;

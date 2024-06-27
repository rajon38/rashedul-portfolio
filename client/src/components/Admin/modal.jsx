import React, { useRef } from 'react';
import './CSS/modal.css';

const Modal = ({ isOpen, handleClose, selectedItem }) => {
    const form = useRef();

    const sendForm = (e) => {
        e.preventDefault();
    }

    return (
        <div className={`modal fade ${isOpen ? 'show' : ''}`} id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" style={{ display: isOpen ? 'block' : 'none' }}>
            <div className="modal-dialog modal-dialog-centered "  role="document">
                <div className="modal-content ">
                    <div className="modal-header">
                        <h3 className="modal-title" id="exampleModalLongTitle">Modal title</h3>
                    </div>
                    <div className="modal-body">
                        {selectedItem && (
                            <form ref={form} onSubmit={sendForm}>
                                <input type="file" name="file" value={''} placeholder="Your File" />
                                <input type="text" name="title" value={selectedItem.title} onChange={''} placeholder="title"/>
                                <input type="text" name="github" value={selectedItem.github} onChange={''} placeholder="Github Link"/>
                                <input type="text" name="Live" value={selectedItem.demo} onChange={''} placeholder="Live Link"/>
                            </form>
                        )}
                    </div>
                    <div className="modal-footer ">
                        <button type="button" className="btn btn-danger" onClick={handleClose}>Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;

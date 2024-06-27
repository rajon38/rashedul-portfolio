import React, { useState } from 'react';
import './CSS/adminPortfolio.css';
import {useDispatch, useSelector} from "react-redux";
import {Form, Modal} from "antd";
import {HideLoader, ReloadData, ShowLoader} from "../../redux/rootSlice";
import axios from "axios";
import {ErrorToast, SuccessToast} from "../../helper/FormHelper";

const AdminPortfolio = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.root);
    const BaseURL = process.env.REACT_APP_BASE_URL;

    const { userDetails } = state;
    const AdminPortfolioData = userDetails && userDetails.portfolio;
    const [showAddEditModal, setShowAddEditModal] = useState(false);
    const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
    const [type, setType] = useState("add");

    //issues
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const handleOpenModal = (item) => {
        setSelectedItem(item);
        setIsOpen(true);
    }

    const handleCloseModal = () => {
        setIsOpen(false);
    }

    //issues

    const onFinish = async (values) => {
        try {
            const tempPortfolio = values?.portfolio?.split(",") || [];
            values.portfolio = tempPortfolio;
            dispatch(ShowLoader());
            let response;
            if (selectedItemForEdit) {
                response = await axios.post(`${BaseURL}/portfolio/:_id`, {
                    ...values,
                    _id: selectedItemForEdit._id,
                });
            } else {
                response = await axios.post(`${BaseURL}/portfolio`, values);
            }

            dispatch(HideLoader());
            if (response.data.success) {
                ErrorToast(response.data.message);
                setShowAddEditModal(false);
                setSelectedItemForEdit(null);
                dispatch(HideLoader());
                dispatch(ReloadData(true));
            } else {
                ErrorToast(response.data.message);
            }
        } catch (error) {
            dispatch(HideLoader());
            ErrorToast(error.message);
        }
    };

    const onDelete = async (item) => {
        try {
            dispatch(ShowLoader());
            const response = await axios.delete(`${BaseURL}/portfolio/:_id`, {
                _id: item._id,
            });
            dispatch(HideLoader());
            if (response.data.success) {
                SuccessToast(response.data.message);
                dispatch(HideLoader());
                dispatch(ReloadData(true));
            } else {
                ErrorToast(response.data.message);
            }
        } catch (error) {
            dispatch(HideLoader());
            ErrorToast(error.message);
        }
    };

    return (
        <div>
            <h1 className="Title">Portfolio</h1>

            <div className="portfolio__container2">
                {AdminPortfolioData && AdminPortfolioData.map((portfolio) => (
                    <article className="portfolio__item2">
                        <div className="portfolio__item-image2">
                            <img src={`${BaseURL}/${portfolio.image}`} alt={portfolio.title}/>
                        </div>
                        <h3>{portfolio.title}</h3>
                        <div className="portfolio__item-cta2">
                            <a onClick={() => {
                                setSelectedItemForEdit(portfolio);
                                setShowAddEditModal(true);
                                setType("edit");
                            }} className="btn" target="_blank"  rel="noreferrer" >Open Modal</a>
                            <a onClick={() => {
                                onDelete(portfolio);
                            }} className="btn btn-warning" target="_blank"  rel="noreferrer">delete</a>
                        </div>
                    </article>
                ))}
            </div>

            <div className='button'>
            <button
                className="btn btn-primary"
                onClick={() => {
                    setSelectedItemForEdit(null);
                    setShowAddEditModal(true);
                }}
            >
                Add Project
            </button>
            </div>

            {(type === "add" || selectedItemForEdit) && (
                <Modal
                    open={showAddEditModal}
                    title={selectedItemForEdit ? "Edit Project" : "Add Project"}
                    footer={null}
                    onCancel={() => {
                        setShowAddEditModal(false);
                        setSelectedItemForEdit(null);
                    }}
                >
                    <Form
                        layout="vertical"
                        onFinish={onFinish}
                        initialValues={
                            {
                                ...selectedItemForEdit,
                                portfolio: selectedItemForEdit?.portfolio?.join(" , "),
                            } || {}
                        }
                    >
                        <Form.Item name="title"  label="title">
                            <input placeholder="Title" />
                        </Form.Item>
                        <Form.Item name="image" label="image">
                            <input placeholder="image" />
                        </Form.Item>
                        <Form.Item name="demo" label="demo">
                            <input placeholder="demo link" />
                        </Form.Item>
                        <Form.Item name="github" label="github">
                            <input placeholder="github" />
                        </Form.Item>

                        <div className="flex justify-end">
                            <button
                                className="btn btn-warning"
                                onClick={() => {
                                    setShowAddEditModal(false);
                                    setSelectedItemForEdit(null);
                                }}
                            >
                                Cancel
                            </button>
                            <button className="btn btn-primary">
                                {selectedItemForEdit ? "Update" : "Add"}
                            </button>
                        </div>
                    </Form>
                </Modal>
            )}
        </div>
    );
};

export default AdminPortfolio;

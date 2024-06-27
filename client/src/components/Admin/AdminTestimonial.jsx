import React, { useState } from "react";
import "./CSS/adminTestimonial.css";
import { useDispatch, useSelector } from "react-redux";
import { HideLoader, ReloadData, ShowLoader } from "../../redux/rootSlice";
import axios from "axios";
import { ErrorToast, SuccessToast } from "../../helper/FormHelper";
import { Form, Modal } from "antd";

const AdminTestimonial = () => {
  const dispatch = useDispatch();
  const BaseURL = process.env.REACT_APP_BASE_URL;

  const state = useSelector((state) => state.root);
  const { userDetails } = state;
  const AdminTestimonialData = userDetails && userDetails.testimonial;
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
  const [type, setType] = useState("add");

  //issues
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  //issues

  const onFinish = async (values) => {
    try {
      const tempTestimonial = values?.testimonial?.split(",") || [];
      values.testimonial = tempTestimonial;
      dispatch(ShowLoader());
      let response;
      if (selectedItemForEdit) {
        response = await axios.post(`${BaseURL}/testimonial/:_id`, {
          ...values,
          _id: selectedItemForEdit._id,
        });
      } else {
        response = await axios.post(`${BaseURL}/testimonial`, values);
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
      const response = await axios.delete(`${BaseURL}/testimonial/:_id`, {
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
      <h1 className="Title">Testimonial</h1>
      <div className="container flex flex-col md:flex-row flex-wrap  gap-6 items-center justify-center">
        {AdminTestimonialData &&
          AdminTestimonialData.map((item, index) => (
            <div className="testimonial2" key={index}>
              <div className="client__avatar2">
                <img src={`${BaseURL}/${item.image}`} alt="Avatar" />
              </div>
              <h5 className="client__name2">{item.name}</h5>
              <small className="client__review2">{item.review}</small>

              <div className="testimonial__item-cta2">
                <a
                  onClick={() => {
                    setSelectedItemForEdit(item);
                    setShowAddEditModal(true);
                    setType("edit");
                  }}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Modal
                </a>
                <a
                  onClick={() => {
                    onDelete(item);
                  }}
                  className="btn btn-warning"
                  target="_blank"
                  rel="noreferrer"
                >
                  delete
                </a>
              </div>
            </div>
          ))}
      </div>

      <div className="button">
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
          title={selectedItemForEdit ? "Edit Testimonial" : "Add Testimonial"}
          footer={null}
          onCancel={() => {
            setShowAddEditModal(false);
            setSelectedItemForEdit(null);
          }}
        >
          <Form
            className="custom-form"
            layout="vertical"
            onFinish={onFinish}
            initialValues={
              {
                ...selectedItemForEdit,
                testimonial: selectedItemForEdit?.testimonial?.join(" , "),
              } || {}
            }
          >
            <Form.Item name="image" label="image">
              <input placeholder="Image" />
            </Form.Item>
            <Form.Item name="name" label="name">
              <input placeholder="Name" />
            </Form.Item>
            <Form.Item name="review" label="review">
              <input placeholder="Review" />
            </Form.Item>

            <div className="flex justify-end space-x-2">
              <button
                type="button"
                className="btn btn-warning px-4 py-2 rounded bg-red-600 hover:text-white hover:bg-red-700"
                onClick={() => {
                  setShowAddEditModal(false);
                  setSelectedItemForEdit(null);
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary px-4 py-2 rounded bg-blue-600 hover:text-white hover:bg-blue-700"
              >
                {selectedItemForEdit ? "Update" : "Add"}
              </button>
            </div>
          </Form>
        </Modal>
      )}
    </div>
  );
};

export default AdminTestimonial;

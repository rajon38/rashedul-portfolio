import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./CSS/adminContact.css";

const AdminContact = () => {
  const state = useSelector((state) => state.root);
  const { userDetails } = state;
  const contactData = userDetails && userDetails.contact;

  const [currentPage, setCurrentPage] = useState(1);
  const [messagePerPage, setMessagePerPage] = useState(10);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (event) => {
    setMessagePerPage(parseInt(event.target.value));
    setCurrentPage(1);
  };

  const totalPages = Math.ceil((contactData?.length || 0) / messagePerPage);

  const startIndex = (currentPage - 1) * messagePerPage;
  const endIndex = startIndex + messagePerPage;
  const currentMessages = contactData?.slice(startIndex, endIndex);

  return (
    <div>
      <h1 className="Title">Contact</h1>
      <div className="contact__container2">
        {currentMessages &&
          currentMessages.map((item, index) => (
            <div key={index} className="contact-item">
              <h2>{item.name}</h2>
              <small>{item.email}</small>
              <h3>{item.message}</h3>
            </div>
          ))}
      </div>
      {/* Pagination */}
      <div className="pagination-container">
        <div className="flex items-center justify-between py-3 pt-10">
          <div className="flex items-center">
            <label htmlFor="contact" className="mr-2 text-sm text-white font-semibold">
              Show:
            </label>
            <select
              name="contact"
              id="contact"
              value={messagePerPage}
              onChange={handleItemsPerPageChange}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-gray-200 text-gray-500 rounded hover:bg-gray-300 disabled:opacity-50"
            >
              Previous
            </button>
            {[...Array(totalPages).keys()].map((page) => (
              <button
                key={page + 1}
                onClick={() => handlePageChange(page + 1)}
                className={`px-3 py-1 rounded ${
                  page + 1 === currentPage
                    ? "bg-indigo-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {page + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 bg-gray-200 text-gray-500 rounded hover:bg-gray-300 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminContact;

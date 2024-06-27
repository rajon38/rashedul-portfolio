import React, { useRef, useState } from "react";
import "./CSS/adminExperience.css";
import { useSelector } from "react-redux";
import AdminModal from "./AdminModal";

const AdminExperience = () => {
  const state = useSelector((state) => state.root);
  const { userDetails } = state;
  const experienceData = userDetails && userDetails.experience[0];

  const frontend = experienceData && experienceData.frontend;
  const backend = experienceData && experienceData.backend;

  const handleSubmit = (e) => {
    e.preventDefault();
    const technology = e.target.technology.value;
    const experienceLevel = e.target.experienceLevel.value;
    const type = e.target.type.value;
    const formData = {
      technology: technology,
      experienceLevel: experienceLevel,
      type: type,
    };
    console.log("From submitted : ", formData);
  };

  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  return (
    <div>
      <h1 className="Title">Experience</h1>
      <div>
        <div className="experience__container2">
          <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content2">
              {frontend &&
                frontend.map((item, index) => (
                  <div key={index} className="experience__contents2">
                    <input
                      type="text"
                      name="technology"
                      value={item.technology}
                      readOnly
                      placeholder="technology"
                    />
                    <input
                      type="text"
                      name="experienceLevel"
                      value={item.experienceLevel}
                      readOnly
                      placeholder="experienceLevel"
                    />
                  </div>
                ))}
            </div>

            <div className="text-xl pt-8">
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                onClick={() => setIsModalOpen1(true)}
              >
                Add New Experience
              </button>
              <AdminModal
                isOpen={isModalOpen1}
                setIsOpen={setIsModalOpen1}
                title="Add new Frontend Experience"
              >
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="technology"
                    placeholder="technology"
                    required
                  />
                  <input
                    type="text"
                    name="experienceLevel"
                    placeholder="experienceLevel"
                    required
                  />
                  <input
                    type="text"
                    name="type"
                    value="frontend"
                    className="hidden"
                  />
                  <button
                    type="submit"
                    className="btn btn-sm bg-green-200 text-white border-none font-semibold"
                  >
                    ADD
                  </button>
                </form>
              </AdminModal>
            </div>
          </div>

          {/*end of frontend*/}

          <div className="experience__backend">
            <h3>Backend Development</h3>
            <div className="experience__content2">
              {backend &&
                backend.map((item, index) => (
                  <div key={index} className="experience__contents2">
                    <input
                      type="text"
                      name="technology"
                      value={item.technology}
                      readOnly
                      placeholder="technology"
                    />
                    <input
                      type="text"
                      name="experienceLevel"
                      value={item.experienceLevel}
                      readOnly
                      placeholder="experienceLevel"
                    />
                  </div>
                ))}
            </div>
            <div className="text-xl pt-8">
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                onClick={() => setIsModalOpen2(true)}
              >
                Add New Experience
              </button>
              <AdminModal
                isOpen={isModalOpen2}
                setIsOpen={setIsModalOpen2}
                title="Add new Backend Experience"
              >
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="technology"
                    placeholder="technology"
                    required
                  />
                  <input
                    type="text"
                    name="experienceLevel"
                    placeholder="experienceLevel"
                    required
                  />
                  <input
                    type="text"
                    name="type"
                    value="backend"
                    className="hidden"
                  />
                  <button
                    type="submit"
                    className="btn btn-sm bg-green-200 text-white border-none font-semibold"
                  >
                    ADD
                  </button>
                </form>
              </AdminModal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminExperience;

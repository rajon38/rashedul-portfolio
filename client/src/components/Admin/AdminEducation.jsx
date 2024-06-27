import React, {useRef, useState} from 'react';
import './CSS/adminEducation.css'
import {useSelector} from "react-redux";
import AdminModal from './AdminModal';

const AdminEducation = () => {
    const state = useSelector(state => state.root);
    const { userDetails } = state;
    const educationData = userDetails && userDetails.education[0];

    const academic = educationData && educationData.academic;
    const backend = educationData && educationData.backend;

    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const desc = e.target.desc.value;
        const duration = e.target.duration.value;
    
        const formData = {
            title: title,
            desc: desc,
            duration: duration
     
        };
        console.log("From submitted : ", formData);
      };
   
    

    return (
        <div>
            <h1 className='Title'>Education</h1>
            <div>
        
                <div className="education__container2">
                    <div className="education__frontend">
                        <h3>Academic</h3>
                        <div className="education__content2">
                            {academic && academic.map((item, index)=>(
                                <div key={index}  className="education__contents">
                                    <input type="text" name="name" value={item.title} readOnly placeholder="title"/>
                                    <input type="text" name="name" value={item.desc} readOnly placeholder="desc"/>
                                    <input type="text" name="name" value={item.duration} readOnly placeholder="duration"/>
                                </div>
                            ))}
                        </div>
                           <div className="text-xl pt-8">
              <button
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                onClick={() => setIsModalOpen1(true)}
              >
                Add New Education
              </button>
              <AdminModal
                isOpen={isModalOpen1}
                setIsOpen={setIsModalOpen1}
                title="Add new Education"
              >
                <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="title"
                    required
                  />
                  <input
                    type="text"
                    name="desc"
                    placeholder="desc"
                    required
                  />
                  <input
                    type="text"
                    name="duration"
                    placeholder='duration'
                    required
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

                    <div className="education__backend">
                        <h3>Courses</h3>
                        <div className="education__content2">
                            {backend && backend.map((item, index)=>(
                                <div key={index} className="education__contents">
                                <input type="text" name="name" value={item.title} readOnly placeholder="title"/>
                                <input type="text" name="name" value={item.desc} readOnly placeholder="desc"/>
                                <input type="text" name="name" value={item.duration} readOnly placeholder="duration"/>
                                </div>
                            ))}
                        </div>
                        <div className="text-xl pt-8">
              <button
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                onClick={() => setIsModalOpen2(true)}
              >
                Add New Course
              </button>
              <AdminModal
                isOpen={isModalOpen2}
                setIsOpen={setIsModalOpen2}
                title="Add new Course"
              >
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="title"
                    placeholder="title"
                    required
                  />
                  <input
                    type="text"
                    name="desc"
                    placeholder="desc"
                    required
                  />
                  <input
                    type="text"
                    name="duration"
                    placeholder='duration'
                    required
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

export default AdminEducation;
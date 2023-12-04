import React, {useRef, useState} from 'react';
import './CSS/adminEducation.css'
import {useSelector} from "react-redux";

const AdminEducation = () => {
    const state = useSelector(state => state.root);
    const { portfolioData } = state;
    const educationData = portfolioData && portfolioData.education[0];

    const academic = educationData && educationData.academic;
    const backend = educationData && educationData.backend;


    const form = useRef();

    const sendForm = (e) => {
        e.preventDefault();
    }

    // Step 2: Create a state variable to keep track of the input fields
    const [inputFields, setInputFields] = useState([{ value: '' }]);
    const [inputFields2, setInputFields2] = useState([{ value: '' }]);
    // Step 3: Define a function to add a new input field
    const addInputField = () => {
        setInputFields([...inputFields, { value: '' }]);
    };

    const addInputField2 = () => {
        setInputFields2([...inputFields2, { value: '' }]);
    };

    return (
        <div>
            <h1 className='Title'>Education</h1>
            <div>
                <form ref={form} onSubmit={sendForm}>
                <div className="education__container2">
                    <div className="education__frontend">
                        <h3>Academic</h3>
                        <div className="education__content2">
                            {academic && academic.map((item, index)=>(
                                <div key={index}  className="education__contents">
                                    <input type="text" name="name" value={item.title} onChange={''} placeholder="Your Full Name"/>
                                    <input type="text" name="name" value={item.desc} onChange={''} placeholder="Your Full Name"/>
                                    <input type="text" name="name" value={item.duration} onChange={''} placeholder="Your Full Name"/>
                                </div>
                            ))}
                        </div>
                            <div className="inputs" >
                                {inputFields2.map((field, index) => (
                                    <div key={index} className="indexs">
                                        <input type="text" value={field.value} placeholder="Title"
                                               onChange={(e) => {
                                                   const updatedFields2 = [...inputFields2];
                                                   updatedFields2[index].value = e.target.value;
                                                   setInputFields2(updatedFields2);
                                               }}
                                        />
                                        <input type="text" value={field.value} placeholder="Description"
                                               onChange={(e) => {
                                                   const updatedFields = [...inputFields];
                                                   updatedFields[index].value = e.target.value;
                                                   setInputFields(updatedFields);
                                               }}
                                        />
                                        <input type="text" value={field.value} placeholder="Duration"
                                               onChange={(e) => {
                                                   const updatedFields = [...inputFields];
                                                   updatedFields[index].value = e.target.value;
                                                   setInputFields(updatedFields);
                                               }}
                                        />
                                    </div>
                                ))}
                                <button type='submit' onClick={addInputField2} className="btn btn-warning">Add new field</button>

                            </div>
                    </div>


                    {/*end of frontend*/}

                    <div className="education__backend">
                        <h3>Courses</h3>
                        <div className="education__content2">
                            {backend && backend.map((item, index)=>(
                                <div key={index} className="education__contents">
                                <input type="text" name="name" value={item.title} onChange={''} placeholder="Your Full Name"/>
                                <input type="text" name="name" value={item.desc} onChange={''} placeholder="Your Full Name"/>
                                <input type="text" name="name" value={item.duration} onChange={''} placeholder="Your Full Name"/>
                                </div>
                            ))}
                        </div>
                            <div className="inputs">
                                {inputFields.map((field, index) => (
                                    <div key={index} className="indexs">
                                        <input type="text" value={field.value} placeholder="Title"
                                               onChange={(e) => {
                                                   const updatedFields = [...inputFields];
                                                   updatedFields[index].value = e.target.value;
                                                   setInputFields(updatedFields);
                                               }}
                                        />
                                        <input type="text" value={field.value} placeholder="Description"
                                               onChange={(e) => {
                                                   const updatedFields = [...inputFields];
                                                   updatedFields[index].value = e.target.value;
                                                   setInputFields(updatedFields);
                                               }}
                                        />
                                        <input type="text" value={field.value} placeholder="Duration"
                                               onChange={(e) => {
                                                   const updatedFields = [...inputFields];
                                                   updatedFields[index].value = e.target.value;
                                                   setInputFields(updatedFields);
                                               }}
                                        />
                                    </div>
                                ))}

                                <button type='submit' onClick={addInputField} className="btn btn-warning">Add new field</button>
                            </div>
                    </div>
                    <button type='submit' className="btn btn-primary">Update</button>
                </div>
                </form>
            </div>
        </div>
    );


};

export default AdminEducation;
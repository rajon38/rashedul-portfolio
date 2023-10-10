import React, {useRef, useState} from 'react';
import './CSS/adminExperience.css'
import {useSelector} from "react-redux";
import {BsPatchCheckFill} from "react-icons/bs";

const AdminExperience = () => {
    const state = useSelector(state => state.root);
    const { portfolioData } = state;
    const experienceData = portfolioData && portfolioData.experience[0];

    const frontend = experienceData && experienceData.frontend;
    const backend = experienceData && experienceData.backend;

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
            <h1 className="Title">Experience</h1>
        <div>
            <div className="experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        {frontend && frontend.map((item,index)=>(
                            <article className="experience__details" key={index}>
                                <BsPatchCheckFill className="experience__details-icon"/>
                                <div>
                                    <h4>{item.technology}</h4>
                                    <small className="text-light">{item.experienceLevel}</small>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                {/*end of frontend*/}

                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        {backend && backend.map((item,index)=>(
                            <article className="experience__details" key={index}>
                                <BsPatchCheckFill className="experience__details-icon"/>
                                <div>
                                    <h4>{item.technology}</h4>
                                    <small className="text-light">{item.experienceLevel}</small>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </div>

            <form ref={form} onSubmit={sendForm}>
                <div className="input">
                    <div className="inputs">
                        <h3>Frontend</h3>
                        {inputFields.map((field, index) => (
                            <div key={index} className="indexs">
                                <h3>{index} field</h3>
                                <input type="text" value={field.value} placeholder="technology"
                                       onChange={(e) => {
                                           const updatedFields = [...inputFields];
                                           updatedFields[index].value = e.target.value;
                                           setInputFields(updatedFields);
                                       }}
                                />
                                <input type="text" value={field.value} placeholder="experienceLevel"
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

                    <div className="inputs" >
                        <h3>Backend</h3>
                        {inputFields2.map((field, index) => (
                            <div key={index} className="indexs">
                                <h3>{index} field</h3>
                                <input type="text" value={field.value} placeholder="technology"
                                       onChange={(e) => {
                                           const updatedFields2 = [...inputFields2];
                                           updatedFields2[index].value = e.target.value;
                                           setInputFields2(updatedFields2);
                                       }}
                                />
                                <input type="text" value={field.value} placeholder="experienceLevel"
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
                <button type='submit' className="btn btn-primary">Update</button>
            </form>
        </div>
    );
};

export default AdminExperience;
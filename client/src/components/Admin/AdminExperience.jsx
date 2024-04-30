import React, {useRef, useState} from 'react';
import './CSS/adminExperience.css'
import {useSelector} from "react-redux";

const AdminExperience = () => {
    const state = useSelector(state => state.root);
    const { userDetails } = state;
    const experienceData = userDetails && userDetails.experience[0];

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
            <form ref={form} onSubmit={sendForm}>
            <div className="experience__container2">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content2">
                        {frontend && frontend.map((item,index)=>(
                            <div key={index}  className="experience__contents2">
                                <input type="text" name="technology" value={item.technology} onChange={''} placeholder="technology"/>
                                <input type="text" name="experienceLevel" value={item.experienceLevel} onChange={''} placeholder="experienceLevel"/>
                            </div>
                        ))}
                    </div>

                    <div className="inputs">
                        {inputFields.map((field, index) => (
                            <div key={index} className="indexs">
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
                </div>

                {/*end of frontend*/}

                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content2">
                        {backend && backend.map((item,index)=>(
                            <div key={index}  className="experience__contents2">
                                <input type="text" name="technology" value={item.technology} onChange={''} placeholder="technology"/>
                                <input type="text" name="experienceLevel" value={item.experienceLevel} onChange={''} placeholder="experienceLevel"/>
                            </div>
                        ))}
                    </div>

                    <div className="inputs" >
                        {inputFields2.map((field, index) => (
                            <div key={index} className="indexs">
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
            </div>
            <button type='submit' className="btn btn-primary">Update</button>
            </form>
        </div>
        </div>
    );
};

export default AdminExperience;
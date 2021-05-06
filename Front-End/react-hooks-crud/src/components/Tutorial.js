import React, { useState, useEffect } from "react";
import TutorialDataService from "../services/TutorialService";

const Tutorial = props => {
    const initialTutorialState = {
        id: null,
        title: "",
        content: ""
    };
    const [currentTutorial, setCurrentTutorial] = useState(initialTutorialState);
    const [message, setMessage] = useState("");

    const getTutorial = id => {
        TutorialDataService.get(id)
            .then(response => {
                setCurrentTutorial(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        getTutorial(props.match.params.id);
    }, [props.match.params.id]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrentTutorial({ ...currentTutorial, [name]: value });
    };

    const updateTutorial = () => {
        TutorialDataService.update(currentTutorial.id, currentTutorial)
            .then(response => {
                console.log(response.data);
                setMessage("The tutorial was updated successfully!");
            })
            .catch(e => {
                console.log(e);
            });
    };

    const deleteTutorial = () => {
        TutorialDataService.remove(currentTutorial.id)
            .then(response => {
                console.log(response.data);
                props.history.push("/tutorials");
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div>
            {currentTutorial ? (
                <div className="edit-form">
                    <h4>Tutorial</h4>
                    <form>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                name="title"
                                value={currentTutorial.title}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="content">Content</label>
                            <input
                                type="text"
                                className="form-control"
                                id="content"
                                name="content"
                                value={currentTutorial.content}
                                onChange={handleInputChange}
                            />
                        </div>

                    </form>


                    <button className="badge badge-danger mr-2" onClick={deleteTutorial}>
                        Delete
          </button>

                    <button
                        type="submit"
                        className="badge badge-success"
                        onClick={updateTutorial}
                    >
                        Update
          </button>
                    <p>{message}</p>
                </div>
            ) : (
                <div>
                    <br />
                    <p>Please click on a Note...</p>
                </div>
            )}
        </div>
    );
};

export default Tutorial;
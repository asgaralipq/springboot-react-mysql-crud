import React, { useState, useEffect } from "react";
import TutorialDataService from "../services/TutorialService";
import { Link } from "react-router-dom";

const TutorialsList = () => {
    const [tutorials, setTutorials] = useState([]);
    const [currentTutorial, setCurrentTutorial] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);

    useEffect(() => {
        retrieveTutorials();
    }, []);


    const retrieveTutorials = () => {
        TutorialDataService.getAll()
            .then(response => {
                setTutorials(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const refreshList = () => {
        retrieveTutorials();
        setCurrentTutorial(null);
        setCurrentIndex(-1);
    };

    const setActiveTutorial = (tutorial, index) => {
        setCurrentTutorial(tutorial);
        setCurrentIndex(index);
    };




    return (
        <div className="list row">

            <div className="col-md-6">
                <h4>Notes List</h4>

                <ul className="list-group">
                    {tutorials &&
                        tutorials.map((tutorial, index) => (
                            <li
                                className={
                                    "list-group-item " + (index === currentIndex ? "active" : "")
                                }
                                onClick={() => setActiveTutorial(tutorial, index)}
                                key={index}
                            >
                                {tutorial.title}
                            </li>
                        ))}
                </ul>

            </div>
            <div className="col-md-6">
                {currentTutorial ? (
                    <div>
                        <h4>Notes</h4>
                        <div>
                            <label>
                                <strong>Title:</strong>
                            </label>{" "}
                            {currentTutorial.title}
                        </div>
                        <div>
                            <label>
                                <strong>Content:</strong>
                            </label>{" "}
                            {currentTutorial.content}
                        </div>
                        

                        <Link
                            to={"/tutorials/" + currentTutorial.id}
                            className="badge badge-warning"
                        >
                            Edit
            </Link>
                    </div>
                ) : (
                    <div>
                        <br />
                        <p>Please click on a Note...</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TutorialsList;
import React from 'react'

// Dependencies
import moment from 'moment'

const Idea = ({ dataIdea }) => {

    return (
        <div className="ideaContainer">
            <ul className="ideaCard">
                <li className="idCard"><span className="itemName">Id : </span>{dataIdea.id}</li>
                <br />
                <li><span className="itemName">Titre : </span>{dataIdea.title}</li>
                <li><span className="itemName">Autheur : </span>{dataIdea.author}</li>
                <li><span className="itemName">Date : </span>{moment(dataIdea.createdAt[0]).format('DD/MM/YYYY')}</li>
                <li><span className="itemName">Score : </span>{dataIdea.score}</li>
            </ul>
        </div>

    )
}

export default Idea

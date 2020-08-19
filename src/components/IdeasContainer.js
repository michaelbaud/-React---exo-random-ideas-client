import React, { useState, useEffect } from 'react'

// Components
import Idea from './Idea'
import Loader from './Loader'

const IdeasContainer = ({ activatedFilter, input }) => {

    const [ideasArray, setIdeasArray] = useState([])
    const [searchArray, setSearchArray] = useState([])
    const [isLoading, setIsLoading] = useState(false)



    useEffect(() => {
        const getIdeas = async () => {
            setIsLoading(true)
            try {
                const response = await fetch("https://exo-random-ideas-server.herokuapp.com/api/ideas")
                const data = await response.json()
                setIdeasArray(data)
                setIsLoading(false)
            } catch (err) {
                console.error('getIdeas error: ', err, err.stack)
            }
        }
        getIdeas()
    }, [])

    useEffect(() => {
        setIdeasArray(prevState =>
            [...prevState].sort((a, b) => {
                if (activatedFilter === "idAsc") {
                    return a.id - b.id
                } else if (activatedFilter === "idDesc") {
                    return b.id - a.id
                } else if (activatedFilter === "dateAsc") {
                    return a.createdAt[1] - b.createdAt[1]
                } else if (activatedFilter === "dateDesc") {
                    return b.createdAt[1] - a.createdAt[1]
                } else if (activatedFilter === "scoreAsc") {
                    return a.score - b.score
                } else if (activatedFilter === "scoreDesc") {
                    return b.score - a.score
                }
                return prevState
            })
        )
    }, [activatedFilter])

    useEffect(() => {

        if (input !== '') {
            const searchFilter = ideasArray.filter(idea => {
                const str = idea.title.toUpperCase()
                return str.includes(input.toUpperCase())
            })
            setSearchArray(searchFilter)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [input])


    return (
        <div className="ideasContainer">
            {
                isLoading && <Loader />
            }
            {
                input !== '' ?
                    searchArray.map((idea) => {
                        return <Idea key={idea.id} dataIdea={idea} />
                    })
                    :
                    ideasArray.map((idea) => {
                        return <Idea key={idea.id} dataIdea={idea} />
                    })
            }
        </div>
    )
}

export default IdeasContainer
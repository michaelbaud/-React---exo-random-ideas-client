import React, { useEffect, useRef } from 'react'

const Filters = ({ activatedFilter, setActivatedFilter }) => {

    const idAscButtonRef = useRef(null)
    const idDescButtonRef = useRef(null)
    const dateAscButtonRef = useRef(null)
    const dateDescButtonRef = useRef(null)
    const scoreAscButtonRef = useRef(null)
    const scoreDescButtonRef = useRef(null)

    useEffect(() => {
        activatedFilter === 'idAsc' ? idAscButtonRef.current.classList.add("buttonFocused") : idAscButtonRef.current.classList.remove("buttonFocused")
        activatedFilter === 'idDesc' ? idDescButtonRef.current.classList.add("buttonFocused") : idDescButtonRef.current.classList.remove("buttonFocused")
        activatedFilter === 'dateAsc' ? dateAscButtonRef.current.classList.add("buttonFocused") : dateAscButtonRef.current.classList.remove("buttonFocused")
        activatedFilter === 'dateDesc' ? dateDescButtonRef.current.classList.add("buttonFocused") : dateDescButtonRef.current.classList.remove("buttonFocused")
        activatedFilter === 'scoreAsc' ? scoreAscButtonRef.current.classList.add("buttonFocused") : scoreAscButtonRef.current.classList.remove("buttonFocused")
        activatedFilter === 'scoreDesc' ? scoreDescButtonRef.current.classList.add("buttonFocused") : scoreDescButtonRef.current.classList.remove("buttonFocused")
    }, [activatedFilter])

    return (
        <div className="filtersContainer">
            <div className="allButtonsContainer">

                <div className="twoButtonsContainer">
                    <div>ID</div>
                    <button
                        className="buttonLeft"
                        ref={idAscButtonRef}
                        onClick={() => setActivatedFilter('idAsc')}
                    >
                        ▲
                    </button>
                    <button
                        className="buttonRight"
                        ref={idDescButtonRef}
                        onClick={() => setActivatedFilter('idDesc')}
                    >
                        ▼
                    </button>
                </div>

                <div className="twoButtonsContainer">
                    <div>Date</div>
                    <button
                        className="buttonLeft"
                        ref={dateAscButtonRef}
                        onClick={() => setActivatedFilter('dateAsc')}
                    >
                        ▲
                    </button>
                    <button
                        className="buttonRight"
                        ref={dateDescButtonRef}
                        onClick={() => setActivatedFilter('dateDesc')}
                    >
                        ▼
                    </button>
                </div>

                <div className="twoButtonsContainer">
                    <div>Score</div>
                    <button
                        className="buttonLeft"
                        ref={scoreAscButtonRef}
                        onClick={() => setActivatedFilter('scoreAsc')}
                    >
                        ▲
                    </button>
                    <button
                        className="buttonRight"
                        ref={scoreDescButtonRef}
                        onClick={() => setActivatedFilter('scoreDesc')}
                    >
                        ▼
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Filters

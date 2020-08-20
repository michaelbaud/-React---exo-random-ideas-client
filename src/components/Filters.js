import React from 'react'

const Filters = ({ activatedFilter, setActivatedFilter }) => {

    return (
        <div className="filtersContainer">
            <div className="allButtonsContainer">

                <div className="twoButtonsContainer">
                    <div>ID</div>
                    <button
                        className={`buttonLeft ${activatedFilter === 'idAsc' && 'buttonFocused'}`}
                        onClick={() => setActivatedFilter('idAsc')}
                    >
                        ▲
                    </button>
                    <button
                        className={`buttonRight ${activatedFilter === 'idDesc' && 'buttonFocused'}`}
                        onClick={() => setActivatedFilter('idDesc')}
                    >
                        ▼
                    </button>
                </div>

                <div className="twoButtonsContainer">
                    <div>Date</div>
                    <button
                        className={`buttonLeft ${activatedFilter === 'dateAsc' && 'buttonFocused'}`}
                        onClick={() => setActivatedFilter('dateAsc')}
                    >
                        ▲
                    </button>
                    <button
                        className={`buttonRight ${activatedFilter === 'dateDesc' && 'buttonFocused'}`}
                        onClick={() => setActivatedFilter('dateDesc')}
                    >
                        ▼
                    </button>
                </div>

                <div className="twoButtonsContainer">
                    <div>Score</div>
                    <button
                        className={`buttonLeft ${activatedFilter === 'scoreAsc' && 'buttonFocused'}`}
                        onClick={() => setActivatedFilter('scoreAsc')}
                    >
                        ▲
                    </button>
                    <button
                        className={`buttonRight ${activatedFilter === 'scoreDesc' && 'buttonFocused'}`}
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

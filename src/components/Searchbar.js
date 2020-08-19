import React from 'react'

const Searchbar = ({ input, setInput }) => {

    return (
        <div className="box">
            <form>
                <div>
                    <input
                        type="text" id="searchbar"
                        onChange={e => setInput(e.target.value)}
                        value={input}
                        pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
                    />
                    <label htmlFor="searchbar">Rechercher une idée</label>
                </div>
            </form>
        </div>
    )
}

export default Searchbar

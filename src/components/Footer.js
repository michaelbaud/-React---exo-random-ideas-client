import React, { useState, useRef, useEffect } from 'react'

// React icon
import { MdEmail } from "react-icons/md"
import { FaGithub } from "react-icons/fa"
import { FaCode } from "react-icons/fa"

const Footer = () => {

    const [heightFooter, setHeightFooter] = useState()

    const footerRef = useRef()

    useEffect(() => {
        setHeightFooter(footerRef.current.offsetHeight + 40)
    }, [])

    return (
        <div style={{ width: '100%', height: heightFooter }}>
            <footer className="footer" ref={footerRef}>
                <div><MdEmail className="footerLogo" size={25} /> <a href="mailto:michael.baudoin.7@gmail.com">Me contacter</a></div>
                <div><FaGithub className="footerLogo" size={25} /> <a href="https://github.com/michaelbaud?tab=repositories" target="_blank" rel="noopener noreferrer">Mon Github</a></div>
                <div><FaCode className="footerLogo" size={25} /> <a href="https://github.com/michaelbaud/React-Node---exo-random-ideas-fullstack" target="_blank" rel="noopener noreferrer">Code source du site</a></div>
                <div>Made by Michael Baudoin</div>
            </footer >
        </div>
    )
}

export default Footer
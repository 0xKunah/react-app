import React from 'react';
import logo from '../img/logo.png'
import { Link } from 'react-router-dom';
import '../index.css';
export default class Topbar extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }


    render (){
        return (
            <div className={'text-white font-semibold fixed top-0 bg-gradient-to-r from-red-400 via-yellow-200 to-green-400 px-4 py-2 md:py-4 w-full flex items-center shadow'}>
                <Link className={`flex items-center px-2 ${this.props.active == "home" ? "underline" : ""}`} to="/"><img className={'-my-4 pr-2'} width={'40px'} src={logo}/>React app</Link>
                <div className={'flex-grow'}></div>
                <a className={`px-2 ${this.props.active == "github" ? "underline" : ""}`} target="_blank" rel="noreferrer" href="https://github.com/Kunah/react-app-bp">GitHub Repo</a>
            </div>
        )
    }
}

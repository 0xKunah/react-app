import React from 'react';
import Topbar from '../components/Topbar';
import '../index.css';
let pkg = require('../../package.json')

export default class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render (){
        return (
            <div className={'overflow-auto h-full bg-gray-200'}>
                <Topbar active="home"/>
                <div className={'mt-14 flex flex-col items-center'}>
                    <h1 className={'text-center text-3xl py-8 font-semibold'}>Welcome to your app !</h1>
                    <p className={'text-lg'}>Your Electron React app is now ready to use, you are using the version {pkg.version} of {pkg.name}</p>
                    <p className={'text-lg pb-8'}>This boilerplate includes some useful packages/dependencies, like <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" className={'text-blue-500 underline'}>Tailwind CSS</a> but feel free to remove it if you want</p>
                    <p className={'text-lg'}>If you are not used to ReactJS, you can view their docs <a className={'text-blue-500 underline'} href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noreferrer">here</a></p>
                </div>
            </div>
        )
    }
}
"use client";
import React, { useEffect, useState } from 'react'
import Header from './Header'
import SideBar from './SideBar'
import { Credentials } from '../../credentials';
import { jwtDecode } from 'jwt-decode';

function Bars() {
    const [showSideBar, setShowSideBar] = useState(false)
    const onResponse = async (res: CredentialResponse) => {
        console.log(res)
        const decodedCredentials: Credentials = jwtDecode(res.credential as string)
        console.log(decodedCredentials);
    }
    const initializeGsi = () => {
        window.google?.accounts.id.initialize({
            client_id: '857878998115-aknfc80693ka48hveukr696fplo5de71.apps.googleusercontent.com',
            callback: onResponse
        });
        window.google?.accounts.id.prompt(notification => {
        });
    }
    useEffect(() => {
        initializeGsi()
    }, [initializeGsi])

    return (
        <div>
            <Header setShowSideBar={setShowSideBar} showSideBar={showSideBar} />
            {/* <div className='relative'> */}

            <SideBar showSideBar={showSideBar} />
            {/* </div> */}
        </div>
    )
}

export default Bars
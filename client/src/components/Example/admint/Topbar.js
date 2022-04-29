import React from 'react'
import styled from 'styled-components'
import { NotificationsNone } from '@material-ui/icons'
const Topbarwraper = styled.div`
width:100%;
height:60px;
background:white;
.topbarw{
    height:100%;
    padding:0px 20px;
    display:flex;
    align-items:center;
    justify-content:space-between;
}
.display-5{
    cursor:pointer;
}
`
export const Topbar = () => {
    return (
        <Topbarwraper>
            <div className='topbarw'>
                <div className='topleft' >
                    <span className='display-5 text-success fw-bold'>munyua tech</span>
                </div>
                <div className='Topright'>
                    <div>
                        <NotificationsNone />
                    </div>
                </div>
            </div>
        </Topbarwraper>
    )
}

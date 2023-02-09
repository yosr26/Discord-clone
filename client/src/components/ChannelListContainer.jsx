import React from 'react'
import {ChannelList, useChatContext} from 'stream-cht-react'
import Cookies from 'universal-cookie'
import {ChannelSearch, GroupChannelList, GroupChannelPreview} from './'
import siteLogo from '../assets/siteLogo'

const SideBar = () =>{
    <div className='channel-list__sidebar'>
        <div className='channel-list__sidebar__icon1'>
            <div className='icon1__inner'>
                <img src={siteLogo} alt="logo" width="30"/>
            </div>

        </div>
    </div>
}

const ChannelListContainer = () => {
    return(
        <div></div>
    )
}

export default ChannelListContainer;
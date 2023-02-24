import React from 'react'
import SideBar from './SideBar'
import CompanyHeader from './CompanyHeader'
import ChannelSearch from './ChannelSearch'
import {ChannelList, useChatContext} from 'stream-chat-react'
import Cookies from 'universal-cookie'
import GroupChannelList from './GroupChannelList'
import GroupChannelPreview from './GroupChannelPreview'

const cookies = new Cookies()

export default function ChannelListContainer() {
    
    function logout(){
        cookies.remove('token')
        cookies.remove('userId')
        cookies.remove('username')
        cookies.remove('fullName');
        cookies.remove('avatarURL');
        cookies.remove('hashedPassword');
        cookies.remove('phoneNumber');

        window.location.reload()
    }
    return(
        <>
        
            <SideBar logout={logout}/>
            <div className='channel-list__list__wrapper'>
                <CompanyHeader/>
                <ChannelSearch/>
                <ChannelList
                     filters={{}}
                     channelRenderFilterFn={()=>{}}
                     List={(listProps)=>(
                        <GroupChannelList
                            {...listProps}
                            type ="team"
                        />
                     )}
                     Preview={(previewProps) =>(
                        <GroupChannelPreview
                            {...previewProps}
                            type= "team"
                        />
                     )}
                />
                <ChannelList
                     filters={{}}
                     channelRenderFilterFn={()=>{}}
                     List={(listProps)=>(
                        <GroupChannelList
                            {...listProps}
                            type ="messaging"
                        />
                     )}
                     Preview={(previewProps) =>(
                        <GroupChannelPreview
                            {...previewProps}
                            type= "messaging"
                        />
                     )}
                />

            </div>
        </>
    )
}


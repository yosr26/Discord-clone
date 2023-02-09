import React from 'react'
import SideBar from './SideBar'
import CompanyHeader from './CompanyHeader'
import ChannelSearch from './ChannelSearch'
import {ChannelList, useChatContext} from 'stream-chat-react'
// import Cookies from 'universal-cookie'
import GroupChannelList from './GroupChannelList'
import GroupChannelPreview from './GroupChannelPreview'


export default function ChannelListContainer() {
    return(
        <>
            <SideBar/>
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

            </div>
        </>
    )
}


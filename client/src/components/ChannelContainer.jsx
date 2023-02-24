import React from 'react'
import  {Channel, useChatContext} from 'stream-chat-react'
import ChannelInner from './ChannelInner'
import CreateChannel from './CreateChannel'
import EditChannel from './EditChannel'
import TeamMessage from './TeamMessage'

export default function ChannelContainer({isCreating, setIsCreating, isEditing, setIsEditing, createType})  {
    const {channel} = useChatContext()
    // if the user is creating a new channel
    if (isCreating){
        return(
            <div className='channel__conatainer'>
              <CreateChannel createType={createType} setIsCreating={setIsCreating}/>
            </div>
        )
    }
    if (isEditing){
        return(
            <div className='channel__container'>
            <EditChannel setIsEditing={setIsEditing}/>
          </div>
        )
    }
    const EmptyState=()=>{
        <div className='channel-empty__container'>
           <p className='channel-empty__first'>This is the beginning of your chat</p>
           <p className='channel-empty__second'>Send messages, attachements,links,emojis and more</p>
        </div>
    }


    return(
        <div className='channel__container'>
           <Channel
              EmptyStateIndicator={EmptyState}
              Message={(messageProps, i)=><TeamMessage key={i}{...messageProps}/>}
           >
                <ChannelInner setIsEditing={setIsEditing}/>
           </Channel>
        </div>
    )
}


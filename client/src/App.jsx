import React from "react"
import './App.css'
import {StreamChat} from 'stream-chat'
import {Chat } from 'stream-chat-react'
// import Cookies from 'universal-cookie'
import ChannelListContainer from './components/ChannelListContainer'
import ChannelContainer from './components/ChannelContainer'

const apiKey = "527u67ju3axr";
const client = StreamChat.getInstance(apiKey);

export default function App(){
  
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer/>
        <ChannelContainer/> 
      </Chat>
    </div>
  )
}


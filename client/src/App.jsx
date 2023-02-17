import React from "react"
import './App.css'
import {StreamChat} from 'stream-chat'
import {Chat } from 'stream-chat-react'
// import Cookies from 'universal-cookie'
import ChannelListContainer from './components/ChannelListContainer'
import ChannelContainer from './components/ChannelContainer'
import Auth from './components/Auth'
const apiKey = "527u67ju3axr";
const client = StreamChat.getInstance(apiKey);
const authToken = false;

export default function App(){

  if (!authToken) return <Auth/>

  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer/>
        <ChannelContainer/> 
      </Chat>
    </div>
  )
}


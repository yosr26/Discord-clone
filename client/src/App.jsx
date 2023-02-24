import React , {useState} from "react";
import 'stream-chat-react/dist/css/index.css'
import "./App.css";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
import ChannelListContainer from "./components/ChannelListContainer";
import ChannelContainer from "./components/ChannelContainer";
import Auth from "./components/Auth";

const apiKey = "527u67ju3axr";
const client = StreamChat.getInstance(apiKey);
const cookies = new Cookies();
const authToken = cookies.get("token");

if (authToken) {
  client.connectUser({
    id: cookies.get("userId"),
    name: cookies.get("username"),
    fullName: cookies.get("fullName"),
    image: cookies.get("avatarURL"),
    hashedPassword: cookies.get("hashedPassword"),
    phoneNumber: cookies.get("phoneNumber"),
  }, authToken)
 //connect user and fetch msgs
}

export default function App() {
   const [createType, setCreateType] = useState('')
   const [isCreating, setIsCreating] = useState(false)
   const [isEditing, setIsEditing] = useState(false)

  if (!authToken) return <Auth />;

  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer
            isCreating={isCreating}
            setIsCreating={setIsCreating}
            setCreateType={setCreateType}
            setIsEditing={setIsEditing}
        />
        <ChannelContainer 
             isCreating={isCreating}
             setIsCreating={setIsCreating}
             isEditing={isEditing}
             setIsEditing={setIsEditing}
             createType={createType}
        />
      </Chat>
    </div>
  );
}

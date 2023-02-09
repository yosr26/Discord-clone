import { useState, useEffect } from "react";
import {useChatContext} from 'stream-chat-react';
import { AiOutlineSearch } from 'react-icons/ai';

export default function Channelsearch(){

    let style={
        icon:{
            color: "white",
        }
    }


    const [query, setQuery] = useState('')
    const [loading, setLoading]= useState(false)

    const getChannels = async (text) =>{
        try{
        //    get channels
        }catch(error){
            setQuery('')
        }
    }

    function onSearch(e){
          e.preventDefault()
          setLoading(e.target.value)
          getChannels(e.target.value)
    }
    

    return(
        <div className="channel-search__container">
            <div className="channel-search__input__wrapper">
                <div className="channel-search__input__icon">
                     <AiOutlineSearch style={style.icon}/>
                </div>
                <input
                    className="channel-search__input__text"
                    placeholder="Search"
                    type="text"
                    value={query}
                    onChange={onSearch}
                />
            </div>
        </div>
    )
}
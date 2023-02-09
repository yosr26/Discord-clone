
export default function GroupChannelList({children, error=false, loading,type}){
    if (error){
        return type === 'team' ? (
            <div className="team-channel_list">
                <p className="team-channel-list__message">
                    Connection error, please wait a moment and try again
                </p>
            </div>
        ) : null

    }
    if (loading){
        return(
            <div className="team-channel-list">
                <p className="team-channel-list__message loading">
                    {type === 'team' ? 'group' :'Messages'}loading...
                </p>
            </div>
        )
    }
    return(
        <div className="team-channel-list">
          <div className="team-channel-list__header">
              <p className="team-channel-list__header__title">
                {type === 'team' ? 'group' : 'Direct Messages' }
              </p>
          </div>
          {children}
        </div>
    )
}
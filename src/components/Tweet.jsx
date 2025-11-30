

import ProfileImage from "./ProfileImage.jsx";
import User from "./User.jsx";
import Timestamp from "./Timestamp.jsx";
import Message from "./Message.jsx";
import Actions from "./Actions.jsx";

function Tweet({ tweet }) {
  
  return (
    <div className="tweet">
      <ProfileImage url={ tweet.user.image } />
    
      <div className="body">
        <div className="top">
          <User name={ tweet.user.name } handle={ tweet.user.handle }/>

          <Timestamp timestamp={ tweet.timestamp }/>
        </div>

        <Message msg={ tweet.message } />
        
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;

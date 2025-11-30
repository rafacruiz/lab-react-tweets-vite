

import ProfileImage from "./ProfileImage.jsx";
import User from "./User.jsx";
import Timestamp from "./Timestamp.jsx";
import Message from "./Message.jsx";


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
        
        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment" data-testid="comment-icon"></i>
          <i className="fas fa-retweet" data-testid="retweet-icon"></i>
          <i className="far fa-heart" data-testid="heart-icon"></i>
          <i className="fas fa-share" data-testid="share-icon"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;

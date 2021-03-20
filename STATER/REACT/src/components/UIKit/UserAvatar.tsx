import React from "react";
import { Avatar } from "antd";


interface IUserAvatar {
  url?: string;
  name?: string;
  style?: React.CSSProperties
}

const UserAvatar: React.FC<IUserAvatar> = ({ url, name, style }) => {
  if(url){
    return <Avatar style={style} src={user.avatarURL} />
  }
  return <Avatar style={style}>
        {name?.[0]?.toUpperCase() : ""}
      </Avatar>
};
  
export default UserAvatar

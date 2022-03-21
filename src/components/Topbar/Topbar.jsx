import React from "react";
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import "./Topbar.css"

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
            <span className="logo">
                SuperAdmin
            </span>
        </div>
        <div className="topRight">
            <div className="topbarIconContainer">
                <NotificationsNone />
                <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
                <Language />
                <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
                <Settings />
                
            </div>
            <img src="https://cdn.vox-cdn.com/thumbor/dbSL2rQErtPprh4v_icOepQO9Ls=/0x0:2370x1574/920x613/filters:focal(996x598:1374x976):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69715362/Screen_Shot_2020_07_21_at_9.38.25_AM.0.png" alt="avator" className="topAvator" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;

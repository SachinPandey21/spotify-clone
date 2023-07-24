import React from 'react';
import "../Styles/LeftMenu.css";
import { FaSpotify, FaEllipsisH } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import {Menu} from './Menu';
import { MenuList } from './MenuList';
import {MenuPlaylist} from './MenuPlaylist';
import {TrackList} from './TrackList';

function LeftMenu() {
  return (
    <div className='leftMenu'>
        <div className='logoContainer'>
            <div className='logo'>
                <i>
                    <FaSpotify></FaSpotify>
                </i>
                <h2>Spotify</h2>
            </div>
            <i>
                <FaEllipsisH></FaEllipsisH>
            </i>
        </div>
        <div className='searchBox'>
            <input type="text" placeholder='Search'></input>
            <i>
                <BiSearchAlt></BiSearchAlt>
            </i>
        </div>
        <Menu title={'Menu'} listObject={MenuList}></Menu>
        <MenuPlaylist></MenuPlaylist>
        <TrackList trackName={"Take On Me"} artistName={"A-ha"} ></TrackList>
    </div>
  );
}

export {LeftMenu};
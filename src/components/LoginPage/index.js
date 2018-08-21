import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SongList from '../SongList';
import AlbumList from '../AlbumList';
import ArtistList from '../ArtistList';
import BrowseView from '../BrowseView';
import { connect } from "react-redux";
import { fetchUser } from '../../actions/userActions';
import { setToken } from '../../actions/tokenActions';
import { playSong, stopSong, pauseSong, resumeSong } from '../../actions/songActions';
import { bindActionCreators } from 'redux';
import './LoginPage.css'
class LoginPage extends Component {

    //

    constructor (props) {
      super(props)



      this.state = {

      }
    }

    onSpotifyLoginClick() {
        window.location.href = 'https://accounts.spotify.com/authorize?client_id=230be2f46909426b8b80cac36446b52a&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=http://localhost:3000/callback';
    }

    render() {
        return (
            <div className={'login-wrapper'}>
                <h1 className={'title'}> Genomusic </h1>
                <h3 className={'step'}> First Step: </h3>
                <button
                    onClick={this.onSpotifyLoginClick}
                    className='main-pause-play-btn login'>
                    Login With Spotify
                </button>
            </div>
        );
    }


};

LoginPage.propTypes = {
    headerTitle: PropTypes.string,
    audioControl: PropTypes.func,
    resumeSong: PropTypes.func,
    pauseSong: PropTypes.func
};

const mapDispatchToProps = dispatch => {

    return bindActionCreators({
        fetchUser,
        setToken,
        playSong,
        stopSong,
        pauseSong,
        resumeSong
    },dispatch);

};

const mapStateToProps = (state) => {

    return {
        headerTitle: state.uiReducer.title
    };

};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

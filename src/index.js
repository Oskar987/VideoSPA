import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail'

import YTSearch from 'youtube-api-search';

const API_KEY   = 'AIzaSyBIvp4SpWJMD4fehsdUGmD7UXv6MtmVNR8';

class App extends Component{
    constructor(props){
        super(props);

        this.state = { 
            videos : [],
            selectedVideo: null
         };

         this.videoSearch('surfboards');
    }

    videoSearch(term){
        YTSearch({ key: API_KEY, term: term},
        (videos) => 
        {
            this.setState({ 
                videos : videos,
                selectedVideo: videos[0]
             });
        });
    }

    render(){
        const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 500);

        return(
            <div>
                <SearchBar OnSearchTermChange={ videoSearch }/>
                <VideoDetail video={ this.state.selectedVideo}/>
                <VideoList
                 onVideoSelect = { selectedVideo => this.setState({selectedVideo})} 
                 videos = { this.state.videos }/>
            </div>
        );
    };
}

ReactDOM.render(<App/>, document.querySelector('.container'));
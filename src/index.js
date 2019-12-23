//React library
import React ,{ Component } from 'react'
import ReactDOM from 'react-dom';
//Components
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
//youtube API
import YTSearch  from 'youtube-api-search';

//locash
import Lodash from 'lodash';



const API_KEY = ''; // youtube API key


//Create a component , produce HTML
class App extends Component {

  constructor(props){
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
     }; // list of object

     this.videoSearch('Blackpink');
  }


  videoSearch(term){ // callback function
        // will run immediately , set the state from the result
        YTSearch( { key : API_KEY ,term: term }, (videoData) => {
          this.setState({ 
            videos: videoData,
            selectedVideo: videoData[0]      
          });
        });
  }

  render() {
    // can only call every 300 milli seconds.
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300); 
    
    return (// OnsearchTermChange & onVideoSelect are callback.
      <div>  
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/> 
        <VideoDetail video = {this.state.selectedVideo} />
        <VideoList 
        onVideoSelect={selectedVideo => this.setState({selectedVideo})} // pass onVideoSelect to videolist
        videos={this.state.videos} /> 
      </div>
    );
  }
  
}
//videos is the props, will arive at videolist as props

//take component's generated HTML , put it on page.
ReactDOM.render(<App/>,document.querySelector('.container'));
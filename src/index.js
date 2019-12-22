import React ,{ Component } from 'react'
import ReactDOM from 'react-dom';
//React library
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
//youtube API
import YTSearch  from 'youtube-api-search';



const API_KEY = 'AIzaSyCFytvD_XlbYXDl0JVnreufyR0Sqejhw3Q'; // youtube API key


//Create a component , produce HTML
class App extends Component {

  constructor(props){
    super(props);

    this.state = {videos: [] }; // list of object

    // will run immediately
    YTSearch( { key : API_KEY ,term: 'foodking' }, (videoData) => {
      this.setState({ videos: videoData });
    });
  }

  render(){
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} /> 
      </div>
    );
  }
}

//take component's generated HTML , put it on page.
ReactDOM.render(<App/>,document.querySelector('.container'));
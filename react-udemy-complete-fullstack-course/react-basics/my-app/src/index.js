import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Components
import Header from './components/header';
import NewsList from './components/news_list'
import JSON from './db.json';

class App extends Component {

  state = {
    news: JSON,
    filtered: []
  }

  // Filters news by keyword
  getKeyword = (event) => {
    let keyword = event.target.value;
    let filtered = this.state.news.filter((item) => {
      return item.title.indexOf(keyword) > -1
    });

    this.setState({
      filtered
    });
  }

  render() {
    let newsFiltered = this.state.filtered;
    let allNews = this.state.news;
    return (
      <div>
          <Header keywords={this.getKeyword}/>
          <NewsList news={
              newsFiltered.length === 0 ? allNews : newsFiltered
            }>
            <h2>
              Today's News Headlines are:
            </h2>
          </NewsList>
      </div>
    )
  }
}
ReactDOM.render(<App/>, document.getElementById('root'));

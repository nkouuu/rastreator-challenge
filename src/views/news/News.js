import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import New from "./New";
import "./_news.scss";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = { index: 10 };
    this.loadMore = this.loadMore.bind(this);
  }
  componentWillMount() {
    this.props.getNews();
  }
  componentDidMount() {
    let spinner = document.getElementById("spinner");
    window.addEventListener("scroll", e => {
      //you are at the bottom of the page
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 1
      ) {
        spinner.style.display = "inline-block";
        this.loadMore(spinner);
      }
    });
  }
  //increase the number of news on the page
  loadMore(spinner) {
    this.setState({ index: this.state.index + 5 });
    spinner.style.display = "none";
  }
  render() {
    return (
      <div className="news-div">
        <div className="news">
          {this.props.news.map(
            //include only the news indicated by this.state.index
            (e, i) => (i < this.state.index ? <New key={e.id} new={e} /> : "")
          )}
        </div>
        <i className="fas fa-spinner " id="spinner" />
      </div>
    );
  }
}

const mapStateToProps = ({ news }) => {
  return { news };
};

export default connect(
  mapStateToProps,
  actions
)(News);

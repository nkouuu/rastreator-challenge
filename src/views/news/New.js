import React, { Component } from "react";
import "./_news.scss";
import { Link } from "react-router-dom";
import * as actions from "../../actions";
import { connect } from "react-redux";

class New extends Component {
  render() {
    return (
      <div className="new">
        <p className="title">{this.props.new.title}</p>
        <div>
          <p className="intro">
            {this.props.new.body.slice(0, 45)}
            ...
          </p>
          <Link to={`/${this.props.new.id}`} className="link">
            Seguir leyendo
          </Link>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(New);

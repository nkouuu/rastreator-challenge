import React, { Component } from "react";
import { connect } from "react-redux";
import "./_path.scss";

class Path extends Component {
  clase = "";

  render() {
    !this.props.activeNew.id ? (this.clase = "actual-path") : (this.clase = "");
    return (
      <div className="path">
        <div className="path-icon">
          <i className="fas fa-home" />
        </div>
        >
        <div className="parents">
          {!this.props.activeNew.id ? (
            <div>
              <span>Seguros </span> >
            </div>
          ) : (
            ""
          )}
          <span>Seguros de coche</span>>
        </div>
        <div className={this.clase}>
          <span>Articulos</span>
        </div>
        <div className="actual-path">
          {this.props.activeNew.id ? (
            <span>{this.props.activeNew.title}</span>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ activeNew }) => {
  return { activeNew };
};

export default connect(mapStateToProps)(Path);

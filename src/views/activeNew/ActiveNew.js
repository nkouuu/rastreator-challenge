import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import "./_activeNew.scss";

class ActiveNew extends Component {
  componentWillMount() {
    //get the new id from the url
    const id = this.props.match.params.id;
    this.props.getNew(id);
  }
  render() {
    return (
      <div className="active-new">
        <div className="article-info">
          <h2>{this.props.activeNew.title}</h2>
          <div className="img-div">
            <img src="./assets/image-contenido.jpg" alt="" />
          </div>
          <div className="content">{this.props.activeNew.body}</div>
          <div className="green-button-div">
            <button className="green-button">COMPARAR SEGUROS DE COCHE</button>
          </div>
        </div>
        <div className="menu-comparar">
          <p>¡Compara y ahorra!</p>
          <div className="menu-column">
            <div>
              <img src="./assets/car-icon.png" alt="" />
            </div>

            <p>Seguros de coche</p>
            <button className="green-button">COMPARAR</button>
          </div>
          <div className="menu-row">
            <div className="menu-row-img">
              <img src="./assets/van-icon.png" className="icon" alt="" />
              <span>Seguros de furgonetas</span>
            </div>
            <i className="fas fa-angle-right" />
          </div>
          <div className="menu-row">
            <div className="menu-row-img">
              <i className="fas fa-calendar-alt icon" />
              <span>Seguros por dias</span>
            </div>

            <i className="fas fa-angle-right" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ activeNew }) => {
  return { activeNew };
};

export default connect(
  mapStateToProps,
  actions
)(ActiveNew);

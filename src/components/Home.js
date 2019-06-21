import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "./actions/cartActions";

class Home extends Component {
  handleClick = id => {
    this.props.addToCart(id);
  };

  render() {
    let itemList = this.props.items.map(item => {
      return (
        <div className="card" key={item.id}>
          <div className="card-image">
            <img src={item.img} alt={item.title} />
            <span className="card-title">{item.title}</span>
            <span
              to="/"
              className="btn-floating halfway-fab waves-effect waves-light red"
              onClick={() => {
                this.handleClick(item.id);
              }}
            >
              <i className="material-icons">add</i>
            </span>
          </div>

          <div className="card-content">
            <p>{item.desc}</p>
            <p>
              <b>Price: {item.price}Rs.</b>
            </p>
          </div>
        </div>
      );
    });

    return (
      <div className="container">
        <h2>Wellcome</h2>

        <p>
          We see building trust as a fundamental platform. Especially without
          trust we dont have a business just as a journey that ceases everyday
          to begin again the next day,we at 2b Healthcare strive to gain your
          trust through our solutions for healthcare. Company's goal is to
          povide perfect and timely services to our valued customers within
          Lahore and all over Pakistan. We are maintaining quality sale and
          after sale services, we deal in electromedical equipments , hospital
          furniture covering almost all categories and Linen Items. 2B
          healthcare was established in 1972 and Oldest manufacturer and
          exporter of vast rang of Instruments. It comprises of an integrated
          manufacturing facility, employing skilled craftsmen to produce broad
          range of professional Instruments. Its manufacturing process is
          running under the supervision of expert technicians. Management
          Skilled employees are its main source for innovation and development
          of new products. They are working in safe and open environment where
          every worker contributes continuously to expand the company business.
          Qualified persons are hired to make use of the progressive technology.
          The company is also providing active support to its employees to
          improve their skills, creativity power and social development.
          Seaburys & Company has earned the credit to get the entire
          satisfaction of the customers.
        </p>
        <h3 className="center">Our items</h3>
        <div className="box">{itemList}</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    items: state.items
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

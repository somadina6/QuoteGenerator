function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}import {
createStore,
combineReducers,
applyMiddleware } from
"https://esm.sh/redux";
import React from "https://esm.sh/react";
import { Provider, connect } from "https://esm.sh/react-redux";

var colors = [
"#16a085",
"#27ae60",
"#2c3e50",
"#f39c12",
"#e74c3c",
"#9b59b6",
"#FB6964",
"#342224",
"#472E32",
"#BDBB99",
"#77B1A9",
"#73A857"];


// Redux
// action type
const NEW_QUOTE = "NEW_QUOTE";

// action creator
const getQuoteAction = (quote, author) => {
  return {
    type: NEW_QUOTE,
    data_quote: quote,
    data_author: author };

};

// reducer - when you dispatch
const reducer = (state, action) => {
  switch (action.type) {
    case NEW_QUOTE:
      return {
        data_quote: action.data_quote,
        data_author: action.data_author };}


};

const store = createStore(reducer);
store.dispatch(getQuoteAction("qa", "a"));

// React
class ButtonComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("button", {
        id: "new-quote",
        className: "btn btn-primary x-centre",
        onClick: this.props.handleClick }, "New Quote"));




  }}


class QuoteComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("p", { id: "text", class: "row " },
      this.props.quote));


  }}


class AuthorComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement("p", { id: "author" }, this.props.author);
  }}


class MyApp extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleClick",









    () => {
      // quote API request
      fetch(
      "https://api.api-ninjas.com/v1/quotes?category=&x-api-key=rQDhaG8TIjIlDCQbMBAyiw==6DrtxvcOxKklVrPq").

      then(res => res.json()).
      then(r => {
        r = r[0];
        console.log(r.quote);
        this.setState({
          quote: r.quote,
          author: r.author });

      });
    });this.handleClick = this.handleClick.bind(this);this.state = { quote: "You miss 100% of the shots you don't take ", author: "Somadina E" };}componentDidMount() {}

  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("i", { id: "quotemarks", className: "fa fa-quote-left" }), /*#__PURE__*/
      React.createElement(QuoteComponent, { quote: this.state.quote }), /*#__PURE__*/
      React.createElement(AuthorComponent, { author: this.state.author })), /*#__PURE__*/

      React.createElement(ButtonComponent, { handleClick: this.handleClick })));


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(MyApp, null), document.getElementById("myapphere"));

// axios.get("https://api.api-ninjas.com/v1/quotes?category=&x-api-key=rQDhaG8TIjIlDCQbMBAyiw==6DrtxvcOxKklVrPq").then(res=>{
//   console.log(res.data)
// })
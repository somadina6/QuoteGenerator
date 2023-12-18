import {
  createStore,
  combineReducers,
  applyMiddleware
} from "https://esm.sh/redux";
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
  "#73A857"
];

// Redux
// action type
const NEW_QUOTE = "NEW_QUOTE";

// action creator
const getQuoteAction = (quote, author) => {
  return {
    type: NEW_QUOTE,
    data_quote: quote,
    data_author: author
  };
};

// reducer - when you dispatch
const reducer = (state, action) => {
  switch (action.type) {
    case NEW_QUOTE:
      return {
        data_quote: action.data_quote,
        data_author: action.data_author
      };
  }
};

const store = createStore(reducer);
store.dispatch(getQuoteAction("qa", "a"));

// React
class ButtonComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        id="new-quote"
        className="btn btn-primary x-centre"
        onClick={this.props.handleClick}
      >
        New Quote
      </button>
    );
  }
}

class QuoteComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <p id="text" class="row ">
        {this.props.quote}
      </p>
    );
  }
}

class AuthorComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <p id="author">{this.props.author}</p>;
  }
}

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      quote: "You miss 100% of the shots you don't take ",
      author: "Somadina E"
    };
  }

  componentDidMount() {}

  handleClick = () => {
    // quote API request
    fetch(
      "https://api.api-ninjas.com/v1/quotes?category=&x-api-key=rQDhaG8TIjIlDCQbMBAyiw==6DrtxvcOxKklVrPq"
    )
      .then((res) => res.json())
      .then((r) => {
        r = r[0];
        console.log(r.quote);
        this.setState({
          quote: r.quote,
          author: r.author
        });
      });
  };

  render() {
    return (
      <div>
        <div>
          <i id="quotemarks" className="fa fa-quote-left"></i>
          <QuoteComponent quote={this.state.quote} />
          <AuthorComponent author={this.state.author} />
        </div>
        <ButtonComponent handleClick={this.handleClick} />
      </div>
    );
  }
}

ReactDOM.render(<MyApp />, document.getElementById("myapphere"));

// axios.get("https://api.api-ninjas.com/v1/quotes?category=&x-api-key=rQDhaG8TIjIlDCQbMBAyiw==6DrtxvcOxKklVrPq").then(res=>{
//   console.log(res.data)
// })

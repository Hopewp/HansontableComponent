var React = require("react");
var ReactDOM = require("react-dom");
var _ = require("./lib/js/handsontable/dist/handsontable.full");

var HansontableComponent = React.createClass({
  propTypes: {
    id: React.PropTypes.string.isRequired
  },
  getDefaultProps: function () {
    return {
      id: "example"
    };
  },
  getInitialState: function () {
    return {
      data: []
    };
  },

  componentDidMount: function () {
    if (this.props.data) {
      this.setState({
        data: this.props.data
      });
      this.initialTable();
    }
  },
  componentWillReceiveProps: function (nextProps) {
    if (nextProps.data) {
      this.setState({
        data: nextProps.data
      });
      this.initialTable();
    }
  },
  initialTable: function () {
    var container = document.getElementById(this.props.id);
    var hot = new Handsontable(container, {
      data: this.state.data,
      rowHeaders: true,
      colHeaders: true
    });
  },
  render: function () {
    var {id, ...others}=this.props;
    return (<div id={id}></div>);
  }
});

module.exports = HansontableComponent;
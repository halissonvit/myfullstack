var Editable = React.createClass({
  getDefaultProps: function() {
    return {
      elementName: 'span'
    }
  },
  componentDidMount: function() {
    var el = React.findDOMNode(this);
    $(el).editable();
  },
  render: function() {
    var text = this.props.children;
    var elementName = this.props.element ? this.props.element : 'span';
    var element = React.createElement(elementName, this.props, text);

    return element;
  }
});

var FancyCheckbox = React.createClass({
  getDefaultProps: function() {
    return {
      id: 'fancy-checkbox',
      name: 'fancy-checkbox',
      label: 'enabled?',
      wrapperClass: 'wrapper',
      className: ''
    }
  },
  render: function() {
    return (
      <div className={this.props.wrapperClass}>
        <input type="checkbox" id={this.props.id} className="switch {className}" name={this.props.name} />
        <label htmlFor={this.props.id}>{this.props.children}</label>
      </div>
    );
  }
});


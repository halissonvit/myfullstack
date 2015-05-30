var AddTechnologyToMyStack = React.createClass({
  getDefaultProps: function() {
    return {
      wrapperClass: 'wrapper',
      inputWrapperClass: 'form-group',
      labelClass: 'sr-only',
      inputClass: 'form-control',
      inputId: 'technology',
      children: 'Choose a technology and add to your stack'
    }
  },
  render: function() {
    var wrapperClass = this.props.wrapperClass ? this.props.wrapperClass : 'wrapper';
    var text = this.props.children ? this.props.children : 'submit';
    var className = 'btn btn-primary btn-block';

    return (
      <div className={this.props.wrapperClass}>
        <div className={this.props.inputWrapperClass}>
          <label className={this.props.labelClass} htmlFor={this.props.inputId}>{this.props.children}</label>
          <input type="text" className="form-control" id="technology" placeholder="Choose a technology and add to your stack..." />
        </div>

        <button className={className} type="submit">Add to my stack</button>
      </div>
    );
  }
});

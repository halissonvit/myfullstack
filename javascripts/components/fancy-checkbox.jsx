var FancyCheckbox = React.createClass({
    render: function() {
        var id = this.props.id ? this.props.id : "fancy-checkbox";
        var name = this.props.name ? this.props.name : id;
        var label = this.props.label ? this.props.label : 'checked?';
        var className = this.props.className ? this.props.className : 'form-group';

        return (
            <div className={className}>
                <input type="checkbox" id={id} className="switch" name={name} />
                <label htmlFor={id}>{label}</label>
            </div>
        );
    }
});


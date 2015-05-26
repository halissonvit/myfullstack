var AddTechnologyToMyStack = React.createClass({
    render: function() {
        var wrapperClass = this.props.wrapperClass ? this.props.wrapperClass : 'wrapper';
        var text = this.props.children ? this.props.children : 'submit';
        var className = 'btn btn-primary btn-block';

        return (
            <div className={wrapperClass}>
                <div className="form-group">
                    <label className="sr-only" htmlFor="technology">Choose a technology and add to your stack</label>
                    <input type="text" className="form-control" id="technology" placeholder="Choose a technology and add to your stack..." />
                </div>
                <button className={className} type="submit">Add to my stack</button>
            </div>
        );
    }
});

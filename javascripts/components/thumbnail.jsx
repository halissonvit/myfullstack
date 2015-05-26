var Thumbnail = React.createClass({
    render: function() {
        var wrapperClass = this.props.wrapperClass ? this.props.wrapperClass : 'wrapper';
        var imageClass = this.props.imageClass ? this.props.imageClass : 'thumbnail';
        var spanClass = this.props.spanClass ? this.props.imageClass : 'thumbnail-title';

        return (
            <div className={wrapperClass}>
                <image src={this.props.src} className={imageClass} />
                <span className={spanClass}>{this.props.title}</span>
            </div>
        );
    }
});


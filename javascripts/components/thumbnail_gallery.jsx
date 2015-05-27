var ThumbnailGallery = React.createClass({
    render: function() {
        var galleryClass = this.props.galleryClass ? this.props.galleryClass : "";
        var itemClass = this.props.itemClass ? this.props.itemClass : "";

        return (
            <ul className={galleryClass}>
            <div className="container">
                {
                    this.props.items.map(function(item) {
                    return (
                    <li className={itemClass}>
                        <Thumbnail src={item.src} title={item.title} />
                    </li>);
                    })
                }
            </div>
            </ul>
        );
    }
});


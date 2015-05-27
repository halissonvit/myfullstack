var EditStack = React.createClass({
  render: function() {
    var galleryItems = [{src: 'http://dogeforall.biz/images/loader_loaded.png', title: 'Such a beautiful tech'}, {src: 'http://i.stack.imgur.com/aP2dv.gif', title: 'Such a beautiful language'}, {src: 'https://lh6.ggpht.com/Gg2BA4RXi96iE6Zi_hJdloQAZxO6lC6Drpdr7ouKAdCbEcE_Px-1o4r8bg8ku_xzyF4y=h900', title: 'Such a beautiful framework'}, {src: 'http://www.johnidouglas.com.br/wp-content/uploads/2014/12/ruby.png', title: 'Ruby'}, {src: 'http://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Ruby_on_Rails.svg/150px-Ruby_on_Rails.svg.png', title: 'Ruby on Rails'}, {src: 'https://avatars1.githubusercontent.com/u/8312?v=3&s=400', title: 'Sinatra'}, {src: 'https://node-os.com/images/nodejs.png', title: 'NodeJS'}, {src: 'http://georgevmathew.com/images/logos/express.png', title: 'ExpressJS'}, {src: 'https://31.media.tumblr.com/7601a16f1e970bad6717ba5f386466d0/tumblr_inline_mz51cb9Ezv1qfxp6j.jpg', title: 'SailsJS'}, {src: 'http://www.ophtek.com/wp-content/uploads/2014/08/java_tech.jpg', title: 'Java'}, {src: 'http://www.craigburke.com/images/posts/groovy-logo.png', title: 'Groovy'}, {src: 'https://lh3.googleusercontent.com/-beCwYp8iz6s/VPmwsc3fanI/AAAAAAAAAQk/xXXrIBRZi9s/s426/mcachedl_m0AJkq', title: 'Grails'}, {src: 'https://lh3.googleusercontent.com/-beCwYp8iz6s/VPmwsc3fanI/AAAAAAAAAQk/xXXrIBRZi9s/s426/mcachedl_m0AJkq', title: 'Grails'}]

    return(
      <div className="stack-edit">
        <Editable element="h2">Backend stack</Editable>
        <FancyCheckbox className="form-group" label="add to showcase?" />
        <AddTechnologyToMyStack />
        <ThumbnailGallery items={galleryItems} galleryClass="stack" itemClass="stack-item" />
      </div>
    );
  }
})


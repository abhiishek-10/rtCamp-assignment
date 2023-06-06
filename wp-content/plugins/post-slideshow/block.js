(function (blocks, element, components, api) {
    var el = element.createElement;
    var TextControl = components.TextControl;
    var Button = components.Button;

    var postsSlider = {
        title: 'Latest Post Slider',
        icon: 'admin-post',
        category: 'common',
        attributes: {
            posts: {
                type: 'array',
                default: [],
            },
            apiEndpoint: {
                type: 'string',
                default: 'https://wptavern.com/wp-json/wp/v2/posts',
            },
        },
        edit: function (props) {
            var posts = props.attributes.posts;
            var apiEndpoint = props.attributes.apiEndpoint;

            // Fetch all posts data
            var fetchPosts = function () {
                if (apiEndpoint && posts.length === 0) {
                    console.log("tick");
                    // fetch('https://wptavern.com/wp-json/wp/v2/posts')
                    fetch(apiEndpoint)
                        .then(function (response) {
                            if (response.ok) {
                                return response.json();
                            } else {
                                throw new Error('Error fetching posts');
                            }
                        })
                        .then(function (data) {
                            var fetchedPosts = data.map(function (post) {
                                return {
                                    title: post.title.rendered,
                                    link: post.link,
                                    featuredImage: post.jetpack_featured_media_url,
                                    date: post.date,
                                };
                            });

                            props.setAttributes({ posts: fetchedPosts });
                        })
                        .catch(function (error) {
                            console.error('Error fetching posts:', error);
                        });
                }
            };

            return (fetchPosts(), el(
                'div',
                { className: 'custom-slider-main' },
                el(
                    TextControl,
                    {
                        label: 'API Endpoint',
                        value: apiEndpoint,
                        onChange: function (value) {
                            props.setAttributes({ posts: [] });
                            props.setAttributes({ apiEndpoint: value });
                        },
                    }
                ),
                el(
                    'button',
                    {
                        onClick: fetchPosts,
                        className: 'fetch-btn'
                    },
                    'Fetch Posts'
                ),
                el(
                    'div',
                    { className: 'slider-container' },
                    el(
                        'div',
                        { className: 'controls' },
                        el('button', { className: 'prev' }, 'Prev'),
                        el('button', { className: 'next' }, 'Next')
                    ),
                    el(
                        'div',
                        { className: 'slider' },
                        posts.map(function (post, index) {
                            let postYear = post.date.split('-')
                            let postDate = postYear[2].split('T');

                            return el(
                                'div',
                                { key: index, className: 'slide' },
                                el('h2', null, post.title),
                                el('a', { href: post.link, target: "_blank" },
                                    post.featuredImage && el('img', { src: post.featuredImage, alt: post.title })
                                ),
                                el('span', { className: 'post-date' }, `${postDate[0]}-${postYear[1]}-${postYear[0]}`)
                            );
                        })
                    )
                )
            ))
        },
        save: function (props) {
            return el(
                'div',
                { className: 'slider-container' },
                el(
                    'div',
                    { className: 'controls' },
                    el('button', { className: 'prev' }, 'Prev'),
                    el('button', { className: 'next' }, 'Next')
                ),
                el(
                    'div',
                    { className: 'slider' },
                    props.attributes.posts.map(function (post, index) {
                        let postYear = post.date.split('-')
                        let postDate = postYear[2].split('T');

                        return el(
                            'div',
                            { key: index, className: 'slide' },
                            el('h2', null, post.title),
                            el('a', { href: post.link, target: "_blank" },
                                post.featuredImage && el('img', { src: post.featuredImage, alt: post.title })
                            ),
                            el('span', { className: 'post-date' }, `${postDate[0]}-${postYear[1]}-${postYear[0]}`)
                        );
                    })
                )
            );
        },
    };

    blocks.registerBlockType('post-slideshow/latest-post-slider-block', postsSlider);

})(
    window.wp.blocks,
    window.wp.element,
    window.wp.components,
    window.wp.api
);
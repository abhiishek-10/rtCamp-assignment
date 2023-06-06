wp.blocks.registerBlockType('post-slideshow-block/post-slideshow', {
    title: 'Post SlideShow Custom Block',
    icons: 'hammer',
    category: 'design',

    edit: function (props) {
        return wp.element.createElement(
            "div",
            {
                dangerouslySetInnerHTML: {
                    __html: inputToFetch()
                }
            }

        );
    },
    save: function (props) {
        return wp.element.createElement(
            "div",
            {
                dangerouslySetInnerHTML: {
                    __html: fetchData()

                }
            }
        );
    }
})

function inputToFetch() {
    return backendHtml = `
    <input type='text' id='urlInput' placeholder='URL'> 
    <button id='fetch'>Fetch</button> 
    `
}

let postImages = "";
let postYear = ""
let postDate = ""
function fetchData() {
    (fetch('https://wptavern.com/wp-json/wp/v2/posts')
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                postYear = data[i].date.split('-');
                postDate = postYear[2].split('T');
                console.log({ postDate });
                postImages += `<a href="${data[i].link}" target="_blank"><h1>${data[i].title.rendered}</h1> <span class="date">${postDate[0]}-${postYear[1]}-${postYear[0]}</span><img src="${data[i].episode_featured_image}" alt="${data[i].id}"></a>`
            }
        }), postImages)
    return html = `<div id="my-slider" class="slider"> 
                    <div class="controls">
                        <button type="button" class="prev"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_903_6754)">
                        <path d="M25 30L15 20L25 10" stroke="#B3B3B3" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_903_6754">
                        <rect width="40" height="40" fill="white" transform="matrix(-1.19249e-08 -1 -1 1.19249e-08 40 40)"/>
                        </clipPath>
                        </defs>
                        </svg>
                        </button>
                        <button type="button" class="next"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_903_6745)">
                        <path d="M15 30L25 20L15 10" stroke="#B3B3B3" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_903_6745">
                        <rect width="40" height="40" fill="white" transform="translate(0 40) rotate(-90)"/>
                        </clipPath>
                        </defs>
                        </svg>
                        </button>
                    </div> 
                    <div class="slides-wrapper">
                        <div class="slides">
                          ${postImages}
                        </div>
                    </div>
                </div>`;
}

//Todo: New Code=====================================================================================

// wp.blocks.registerBlockType('post-slideshow-block/post-slideshow', {
//     title: 'Post SlideShow Custom Block',
//     icons: 'hammer',
//     category: 'design',
//     edit: function (props) {
//         var blockProps = wp.blockEditor.useBlockProps()
//         console.log(blockProps);
//         return wp.element.createElement(
//             'p',
//             blockProps,
//             'Hello World (from the editor, with css).'
//         );
//     },
//     save: function (props) {
//         var blockProps = wp.blockEditor.useBlockProps.save();
//         return wp.element.createElement(
//             "div",
//             blockProps,

//         );
//     },
//     render_callback: fetchBlockData('https://wptavern.com/wp-json/wp/v2/posts'),
// })


// function fetchBlockData(apiUrl) {
//     console.log("called fetchBlockData");
//     return fetch(apiUrl)
//         .then(response => response.json())
//         .then(data => {
//             // console.log(data);
//             for (let i = 0; i < data.length; i++) {

//             }
//             // Process the API response and render the block content
//             const attribute1 = data[0].link;
//             const attribute2 = data[0].date;

//             // Create the container element
//             const container = document.createElement('div');
//             container.classList.add('your-block');

//             // Create the attribute 1 element
//             const attribute1Element = document.createElement('p');
//             attribute1Element.textContent = 'Attribute 1: ' + attribute1;
//             container.appendChild(attribute1Element);

//             // Create the attribute 2 element
//             const attribute2Element = document.createElement('p');
//             attribute2Element.textContent = 'Attribute 2: ' + attribute2;
//             container.appendChild(attribute2Element);

//             // Append the block to the desired container element
//             const blockContainer = document.querySelector('.wp-block-post-slideshow-block-post-slideshow');
//             if (blockContainer) {
//                 blockContainer.appendChild(container);
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching block data:', error);
//         });
// }

// // Call the function to fetch and render the block data
// // fetchBlockData('https://wptavern.com/wp-json/wp/v2/posts');

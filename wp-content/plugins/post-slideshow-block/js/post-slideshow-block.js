// myFun().then(data => console.log(data));
// console.log(myFun());
wp.blocks.registerBlockType('post-slideshow-block/post-slideshow', {
    title: 'Post SlideShow Custom Block',
    icons: 'hammer',
    category: 'design',
    attributes: {
        companyName: { type: 'string' }
    },
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

        return wp.element.render(
            // "div",
            // {
            //     dangerouslySetInnerHTML: {
            //         __html: "<div id='greeting'></div> <script> function Greeting(props) { return wp.element.createElement('span', null, 'Hello ' + props.toWhom + '!' ); } wp.element.render( wp.element.createElement(Greeting, { toWhom: 'World' }), document.getElementById('greeting') </script > " // __html: mainData

            //     }
            // }
        );
    }
})

function inputToFetch() {
    return backendHtml = `
    <input type='text' id='urlInput' placeholder='URL'> 
    <button id='fetch'>Fetch</button> 
    `
}
let imageSrc = [];
let postLink;
let postImages = "";
let html;
function MakeSlider(fetchData) {
    return html = ` <img src="${imageSrc}" alt="" id="postImage"> `;
}

// function fetchData() {

//     return myFun();
// }

// function myFun() {
//     let postImage = '';
//     fetch('https://wptavern.com/wp-json/wp/v2/posts')
//         .then(response => response.json())
//         .then(data => {
//             // console.log(data);
//             for (let i = 0; i < data.length; i++) {
//                 imageSrc.push(data[i].episode_featured_image)
//                 // imageSrc = data[i].episode_featured_image;
//                 // imageSrc = "";
//             }
//             // console.log(html);
//             for (i = 0; i < imageSrc.length; i++) {
//                 postImage += `<img src="${imageSrc[i]}" alt="">`
//             }
//             console.log(postImage);
//             return postImage;
//         })
//     // console.log(postImages);
// }

async function fetchData() {
    try {
        // Perform your API call here
        // For example, using fetch:
        const response = await fetch('https://wptavern.com/wp-json/wp/v2/posts');
        const data = await response.json();
        return data[0].episode_featured_image;
    } catch (error) {
        throw error;
    }
}

async function getData() {
    try {
        const data = await fetchData();
        // Process the retrieved data if needed
        return data;
    } catch (error) {
        throw error;
    }
}
// Usage
async function mainData() {
    try {
        const data = await getData();
        console.log(data); // Use the retrieved data here
    } catch (error) {
        console.error(error); // Handle any errors
    }
}


// function makeGetRequest(path) {
//     return new Promise(function (resolve, reject) {
//         axios.get(path).then(
//             (response) => {
//                 var result = response.data;
//                 console.log('Processing Request');
//                 resolve(result);
//             },
//             (error) => {
//                 reject(error);
//             }
//         );
//     });
// }
// async function main() {
//     var response = await makeGetRequest('https://wptavern.com/wp-json/wp/v2/posts');
//     console.log(response);
//     for (let i = 0; i < response.length; i++) {
//         postImages += `<img src="${response[i].episode_featured_image
//             } " alt="">`
//         // imageSrc.push(response[i].episode_featured_image)
//     }
//     console.log(postImages);
//     return postImages;
// }

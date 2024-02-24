// Define a function called customRender that renders a React-like element into the DOM
function customRender(reactElement, container) {
    // Step 1: Create a new DOM element based on the type of the provided React-like element
    const domElement = document.createElement(reactElement.type);
    
    // Step 2: Set the inner HTML of the new DOM element to the children of the provided React-like element
    domElement.innerHTML = reactElement.children;
    
    // Step 3: Set the 'href' attribute of the DOM element to the 'href' property of the provided React-like element
    domElement.setAttribute('href', reactElement.props.href);
    
    // Step 4: Set the 'target' attribute of the DOM element to the 'target' property of the provided React-like element
    domElement.setAttribute('target', reactElement.props.target);
    
    // Step 5: Append the newly created DOM element to the provided container
    container.appendChild(domElement);
}

// Define a sample React-like element object
const reactElement = {
    type: "a", // Element type (e.g., "a" for link)
    props: {
        href: "https://www.linkedin.com/in/hs-nahin/", // URL for the link
        target: "_blank", // Open link in a new tab
    },
    children: "Click to visit Google" // Inner text/content of the link
}

// Select the container element in the DOM where the element will be rendered
const mainContainer = document.querySelector("#root");

// Call the customRender function to render the React-like element into the container
customRender(reactElement, mainContainer);

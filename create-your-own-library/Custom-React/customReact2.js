function customRender(reactElement, container) {
    // Step 1: Create a new DOM element based on the type of the provided react element
    const domElement = document.createElement(reactElement.type);
    
    // Step 2: Set the inner text/content of the new DOM element
    domElement.innerHTML = reactElement.children;

    // Step 3: Loop through each property in the props object of the provided react element
    for (const prop in reactElement.props) {
        // Step 4: Skip the 'children' property because it's special and we've already handled it
        if (prop === 'children') continue;
        
        // Step 5: Set attributes on the new DOM element based on the properties of the react element
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    // Step 6: Append the new DOM element to the provided container so it appears on the webpage
    container.appendChild(domElement);
}

// Example reactElement object with information about a link
const reactElement = {
    type: "a", // Element type
    props: {
        href: "https://www.linkedin.com/in/hs-nahin/", 
        target: "_blank",
    },
    children: "Click to visit Google" // Inner text/content of the hyperlink
}

// Find the container element where we want to place our new element
const mainContainer = document.querySelector("#root");

// Call the customRender function to create the element and add it to the container
customRender(reactElement, mainContainer);

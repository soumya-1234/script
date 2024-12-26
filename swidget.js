// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Document is fully loaded.');

    // Load the external script
    var script = document.createElement('script');
    script.src = 'https://static.saleassist.ai/vtiles/swidget.min.js';
    script.async = false;

    script.onload = function() {
        console.log('swidget.min.js has been loaded successfully.');
        
        // Delay the execution to ensure the DOM elements are fully ready
        setTimeout(function() {
            // Define IDs for the elements
            var featureCollectionId = '1featured_collection';
            var divId = 'video-shorts-e67c8832-90fd-47e8-94e2-1b5f06d8f6a1';

            // Get the container element with class 'content'
            var contentContainer = document.querySelector('.content');

            if (!contentContainer) {
                console.log(`Container with class 'content' does not exist. Creating it.`);
                
                // Create the container div if it does not exist
                contentContainer = document.createElement('div');
                contentContainer.className = 'content';
                
                // Append it to the body or a suitable parent element
                document.body.append(contentContainer);
                
                console.log(`Container with class 'content' created and appended.`);
            } else {
                console.log(`Container with class 'content' already exists.`);
            }

            // Check if the feature collection element exists
            var featureCollection = document.getElementById(featureCollectionId);

            if (!featureCollection) {
                console.log(`Feature collection element with ID '${featureCollectionId}' does not exist. Creating it.`);
                
                // Create the feature collection div if it does not exist
                featureCollection = document.createElement('div');
                featureCollection.id = featureCollectionId;

                // Append it to the content container
                contentContainer.append(featureCollection);
                
                console.log(`Feature collection element with ID '${featureCollectionId}' created and appended.`);
            } else {
                console.log(`Feature collection element with ID '${featureCollectionId}' already exists.`);
            }

            // Check if the div with the specified ID already exists
            var existingDiv = document.getElementById(divId);

            if (!existingDiv) {
                console.log(`Div element with ID '${divId}' does not exist. Creating it.`);
                
                // Create the div element if it does not exist
                var el = document.createElement('div');
                el.id = divId;

                // Append the newly created div to the feature collection
                featureCollection.append(el);
                
                console.log(`Div element with ID '${divId}' created and appended to the feature collection.`);

                // Mount the widget only if the div was created
                try {
                    if (typeof saleassistVideoTiles !== 'undefined' && typeof saleassistVideoTiles.mountWidget === 'function') {
                        var widget = saleassistVideoTiles.mountWidget({
                            id: "e67c8832-90fd-47e8-94e2-1b5f06d8f6a1",
                            width: "225px",
                            height: "400px",
                            borderRadius: "rounded",
                            type: "tile"
                        });
                        console.log(`Widget with ID 'e67c8832-90fd-47e8-94e2-1b5f06d8f6a1' mounted.`);
                    } else {
                        console.error('saleassistVideoTiles or mountWidget function is not available.');
                    }
                } catch (error) {
                    console.error(`Error mounting widget: ${error.message}`);
                }
            } else {
                console.log(`Div element with ID '${divId}' already exists.`);
            }

            // Mount the source video if the function is available
            try {
                if (typeof saleassistVideoTiles !== 'undefined' && typeof saleassistVideoTiles.mountSourceVideo === 'function') {
                    saleassistVideoTiles.mountSourceVideo({
                        id: "e67c8832-90fd-47e8-94e2-1b5f06d8f6a1",
                    });
                    console.log(`Source video with ID 'e67c8832-90fd-47e8-94e2-1b5f06d8f6a1' mounted.`);
                } else {
                    console.error('saleassistVideoTiles or mountSourceVideo function is not available.');
                }
            } catch (error) {
                console.error(`Error mounting source video: ${error.message}`);
            }
        }, 200); // Delay 
    };

    script.onerror = function() {
        console.error('Failed to load suditya modified swidget.min.js.');
    };

    // Append the script to the document head
    document.head.appendChild(script);
});

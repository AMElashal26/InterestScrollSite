document.addEventListener('DOMContentLoaded', () => {
    const contentArray = [
        {type: 'text', value: 'The quick brown fox jumps over the lazy dog.'},
        {type: 'text', value: 'Hello, world!'},
        {type: 'text', value: 'Random quote or piece of content #3.'},
        // Add more content objects here
    ];

    function generateRandomContent() {
        const randomIndex = Math.floor(Math.random() * contentArray.length);
        const selectedContent = contentArray[randomIndex];
        const displayElement = document.getElementById('random-content');
        
        if (selectedContent.type === 'text') {
            displayElement.textContent = selectedContent.value;
        } // Extend this if-block to handle other content types, like images
    }

    document.getElementById('refresh-content').addEventListener('click', generateRandomContent);
    generateRandomContent(); // Initial content load
}); 
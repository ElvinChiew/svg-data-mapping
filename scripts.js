fetch('Blank_malaysia_map.svg')
    .then(response => response())
    .then(svg => {
        document.getElementById('svg-container').innerHTML = svg;
    }  
    )
    .catch(error => console.error('Error Loading SVG', error))
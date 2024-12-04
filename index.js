mapboxgl.accessToken = config.accessToken;

// Initialize the map
const map = new mapboxgl.Map({
    container: 'map',
    style: config.style,
    center: config.chapters[0].location.center,
    zoom: config.chapters[0].location.zoom,
    pitch: config.chapters[0].location.pitch,
    bearing: config.chapters[0].location.bearing
});

// DOM elements for story UI
const storyTitle = document.getElementById('story-title');
const storyImage = document.getElementById('story-image');
const storyDescription = document.getElementById('story-description');
const storyAudio = document.getElementById('story-audio');

// Function to update the story UI
const updateStory = (chapter) => {
    storyTitle.textContent = chapter.title;
    storyImage.src = chapter.image;
    storyDescription.textContent = chapter.description;
    storyAudio.src = chapter.audio;
};

// Function to navigate to a chapter
const flyToChapter = (chapter) => {
    map.flyTo({
        center: chapter.location.center,
        zoom: chapter.location.zoom,
        pitch: chapter.location.pitch,
        bearing: chapter.location.bearing,
        essential: true // this ensures the animation is not disabled by user preferences
    });
};

// Add chapters to the map
config.chapters.forEach((chapter, index) => {
    const marker = new mapboxgl.Marker()
        .setLngLat(chapter.location.center)
        .addTo(map)
        .getElement();

    marker.addEventListener('click', () => {
        flyToChapter(chapter);
        updateStory(chapter);
    });

    // Auto-show first chapter
    if (index === 0) {
        updateStory(chapter);
    }
});

// Resize map on window resize
window.addEventListener('resize', () => map.resize());

const galleryImageToHtml = item => {
    return `
        <div class="gallery-item">
            <img src="${item.url}" alt="${item.title}" />
            <h2>${item.title}</h2>
        </div>
    `;
};

const galleryAudioToHtml = item => {
    return `
        <div class="gallery-item">
            <audio controls>
                <source src="${item.url}" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
            <h2>${item.title}</h2>
        </div>
    `;
};

const galleryVideoToHtml = item => {
    return `
        <div class="gallery-item">
            <video controls>
                <source src="${item.url}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <h2>${item.title}</h2>
        </div>
    `;
};

export default {
    image: galleryImageToHtml,
    audio: galleryAudioToHtml,
    video: galleryVideoToHtml,
};

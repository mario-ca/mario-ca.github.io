// Contenido del archivo voting.js

document.addEventListener('DOMContentLoaded', function() {
    var likeCount = 0;
    var dislikeCount = 0;

    document.getElementById('like-button').addEventListener('click', function() {
        likeCount++;
        document.getElementById('like-count').innerText = likeCount;
    });

    document.getElementById('dislike-button').addEventListener('click', function() {
        dislikeCount++;
        document.getElementById('dislike-count').innerText = dislikeCount;
    });
});

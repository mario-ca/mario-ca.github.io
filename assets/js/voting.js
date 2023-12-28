document.addEventListener('DOMContentLoaded', function() {
    var likeButton = document.getElementById('like-button');
    var dislikeButton = document.getElementById('dislike-button');
    var likeCountElement = document.getElementById('like-count');
    var dislikeCountElement = document.getElementById('dislike-count');

    likeCountElement.innerText = localStorage.getItem('likeCount') || 0;
    dislikeCountElement.innerText = localStorage.getItem('dislikeCount') || 0;

    function disableVoting() {
        likeButton.style.opacity = '0.5';
        dislikeButton.style.opacity = '0.5';
        likeButton.style.pointerEvents = 'none';
        dislikeButton.style.pointerEvents = 'none';
    }

    if (localStorage.getItem('hasVoted')) {
        disableVoting();
    }

    likeButton.addEventListener('click', function() {
        var likeCount = parseInt(localStorage.getItem('likeCount'), 10) || 0;
        likeCount++;
        localStorage.setItem('likeCount', likeCount);
        likeCountElement.innerText = likeCount;
        disableVoting();
        localStorage.setItem('hasVoted', 'true');
    });

    dislikeButton.addEventListener('click', function() {
        var dislikeCount = parseInt(localStorage.getItem('dislikeCount'), 10) || 0;
        dislikeCount++;
        localStorage.setItem('dislikeCount', dislikeCount);
        dislikeCountElement.innerText = dislikeCount;
        disableVoting();
        localStorage.setItem('hasVoted', 'true');
    });
});

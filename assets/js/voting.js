document.addEventListener('DOMContentLoaded', function() {
    var likeButton = document.getElementById('like-button');
    var dislikeButton = document.getElementById('dislike-button');
    var likeCountElement = document.getElementById('like-count');
    var dislikeCountElement = document.getElementById('dislike-count');
    var hasVoted = localStorage.getItem('hasVoted');

    function disableVoting() {
        likeButton.style.opacity = '0.5';
        dislikeButton.style.opacity = '0.5';
        likeButton.style.pointerEvents = 'none';
        dislikeButton.style.pointerEvents = 'none';
    }

    if (hasVoted) {
        disableVoting();
    }

    likeButton.addEventListener('click', function() {
        var likeCount = parseInt(likeCountElement.innerText);
        likeCount++;
        likeCountElement.innerText = likeCount;
        disableVoting();
        localStorage.setItem('hasVoted', 'true');
    });

    dislikeButton.addEventListener('click', function() {
        var dislikeCount = parseInt(dislikeCountElement.innerText);
        dislikeCount++;
        dislikeCountElement.innerText = dislikeCount;
        disableVoting();
        localStorage.setItem('hasVoted', 'true');
    });
});

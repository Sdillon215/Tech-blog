$('.comment-form').submit(async function (e) {
    e.preventDefault();
    var comment_text = '';
    const comment = $('.comment-form').attr('name');

    if (comment === 'single-post') {
        console.log('comment from single post page');
        var comment_text = $('#new-comment').val().trim();
    }
    if (comment === 'edit-post') {
        var comment_text = $('#edit-comment').val().trim();
    }

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    console.log(comment_text, post_id);

    if (comment_text) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                post_id,
                comment_text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            if (comment === 'single-post') {
                document.location.reload();
            }
            if (comment === 'edit-post') {
                document.location.replace('/dashboard');
            }
        } else {
            alert(response.statusText);
        }
    }
});
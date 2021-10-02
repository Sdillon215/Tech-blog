$('.comment-form').submit(async function (e) {
    e.preventDefault();
    console.log('click');
    const comment_text = $('textarea').val().trim();

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
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
});
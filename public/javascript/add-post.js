$('#blog-submit').click(async function(e) {
    e.preventDefault();

    const title = $('#post-title').val().trim();
    const post_text = $('#blog-text').val().trim();

    const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
            title,
            post_text
        }),
        headers: { 'Content-Type': 'application/json'}
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
});
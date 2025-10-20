    fetch('/layout/navbar.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('docs-nav').innerHTML = data;
});
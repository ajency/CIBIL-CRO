function showPopup(id, source){
    document.getElementById('videoPlayer').innerHTML = `<iframe width="560" height="315" src="${source}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    document.getElementById(id).classList.add('showPopup')
}

function closePopup(id){
    document.getElementById(id).classList.remove('showPopup')
    document.getElementById('videoPlayer').innerHTML = ``;
}

document.querySelectorAll('.article_card').forEach( article => {
    article.addEventListener('click', () => {
        showPopup('videoPopup', article.dataset.source)
    })
})

document.querySelector('.popup').addEventListener('click', (e) => {
    if(e.target.classList.contains('popup')){
        closePopup(e.target.getAttribute('id'))
    }
})

document.getElementById('subscriptionCheckbox').addEventListener('change', (e) => {
    if(e.target.checked){
        document.getElementById('subscriptionSubmit').classList.remove('disabled')
    }
    else{
        document.getElementById('subscriptionSubmit').classList.add('disabled')
    }
})
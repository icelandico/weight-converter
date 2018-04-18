document.getElementsByClassName('output')[0].style.display = 'none';

document.getElementById('grmInput').addEventListener('input', function(e) {
    document.getElementsByClassName('output')[0].style.display = 'unset';
    let gr = e.target.value;
    document.getElementById('lbsOutput').innerHTML = (gr*0.0022).toFixed(2);
    document.getElementById('ozOutput').innerHTML = (gr*0.03527396).toFixed(2);
    document.getElementById('grwnOutput').innerHTML = (gr/196.26).toFixed(2);
});


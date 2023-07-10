var PSub = 
[
    'https://www.yourupload.com/embed/0j76M2nUjW71', //MemorySnow
    'https://www.yourupload.com/embed/072eaC7OVCnx' //La otra xd
]

var PEspañol =
[
    'https://ok.ru/videoembed/5146335513237', //MemorySnow
    'https://ok.ru/videoembed/5146316835477' //La otra xd
]

function cambiarSub(index)
{
    var iframe = document.getElementById('repro');
    iframe.src = PSub[index];
}

function cambiarAudio(index)
{
    var iframe = document.getElementById('repro');
    iframe.src = PEspañol[index];
}
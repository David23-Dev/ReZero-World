var t1RemakeTitulos = 
[
    'Re:zero - Capitulo 1',
    'Re:zero - Capitulo 2',
    'Re:zero - Capitulo 3',
    'Re:zero - Capitulo 4',
    'Re:zero - Capitulo 5',
    'Re:zero - Capitulo 6',
    'Re:zero - Capitulo 7',
    'Re:zero - Capitulo 8',
    'Re:zero - Capitulo 9',
    'Re:zero - Capitulo 10',
    'Re:zero - Capitulo 11',
    'Re:zero - Capitulo 12',
    'Re:zero - Capitulo 13'
]

var t1RemakeSub = 
[
    'https://www.yourupload.com/embed/laJNpUWfnRgu',
    'https://www.yourupload.com/embed/Ad7Capw1RF34',
    'https://www.yourupload.com/embed/5TpaKCl2n71v',
    'https://www.yourupload.com/embed/gC54Y1WY16Ur',
    'https://www.yourupload.com/embed/VCn4y8I2KpVn',
    'https://www.yourupload.com/embed/17qngh0Se2GU',
    'https://www.yourupload.com/embed/rV8N7yYC1a6I',
    'https://www.yourupload.com/embed/rG0356qG2jYs',
    'https://www.yourupload.com/embed/16HOMkTX4Fjw',
    'https://www.yourupload.com/embed/6Hq8de0P03h3',
    'https://www.yourupload.com/embed/8T8JC435g87x',
    'https://www.yourupload.com/embed/YVuUv4sxT20H',
    'https://www.yourupload.com/embed/4CRUfk0sM4H7'
]

function cambiarVideo(index)
{
    var reproductor = document.getElementById('reproductor');
    var titulo = document.getElementById('nomCap');
    var iframe = document.getElementById('repro');
    reproductor.style.display ='flex';
    titulo.innerText = t1RemakeTitulos[index];
    iframe.src = t1RemakeSub[index];
}
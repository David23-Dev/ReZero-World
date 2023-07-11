var capitulo;

var t2Titulos =
[
    'Re:Zero Season 2 - Capitulo 1',
    'Re:Zero Season 2 - Capitulo 2',
    'Re:Zero Season 2 - Capitulo 3',
    'Re:Zero Season 2 - Capitulo 4',
    'Re:Zero Season 2 - Capitulo 5',
    'Re:Zero Season 2 - Capitulo 6',
    'Re:Zero Season 2 - Capitulo 7',
    'Re:Zero Season 2 - Capitulo 8',
    'Re:Zero Season 2 - Capitulo 9',
    'Re:Zero Season 2 - Capitulo 10',
    'Re:Zero Season 2 - Capitulo 11',
    'Re:Zero Season 2 - Capitulo 12',
    'Re:Zero Season 2 - Capitulo 13',
    'Re:Zero Season 2 - Capitulo 14',
    'Re:Zero Season 2 - Capitulo 15',
    'Re:Zero Season 2 - Capitulo 16',
    'Re:Zero Season 2 - Capitulo 17',
    'Re:Zero Season 2 - Capitulo 18',
    'Re:Zero Season 2 - Capitulo 19',
    'Re:Zero Season 2 - Capitulo 20',
    'Re:Zero Season 2 - Capitulo 21',
    'Re:Zero Season 2 - Capitulo 22',
    'Re:Zero Season 2 - Capitulo 23',
    'Re:Zero Season 2 - Capitulo 24',
    'Re:Zero Season 2 - Capitulo 25'
]

var t2Sub =
[
    'https://www.yourupload.com/embed/xxDITMcmL15E',
    'https://www.yourupload.com/embed/XkU70e1Q0X48',
    'https://www.yourupload.com/embed/4VbRY4f4T0Jo',
    'https://www.yourupload.com/embed/QQ2ycNa8D0FR',
    'https://www.yourupload.com/embed/PGHTa5Vo1w78',
    'https://www.yourupload.com/embed/suly6g4RT344',
    'https://www.yourupload.com/embed/4mNRl4tr6RQ3',
    'https://www.yourupload.com/embed/2L37n1c4hqd0',
    'https://www.yourupload.com/embed/88f7S1CH51G1',
    'https://www.yourupload.com/embed/G4Iwf1r08WPq',
    'https://www.yourupload.com/embed/h00s206IXAye',
    'https://www.yourupload.com/embed/Gsjl53OV34P1',
    'https://www.yourupload.com/embed/m0VY5hnypf7R',
    'https://www.yourupload.com/embed/h75D5e0qbPT1',
    'https://www.yourupload.com/embed/r4aR3715T30S',
    'https://www.yourupload.com/embed/Q0j6w316ww5F',
    'https://www.yourupload.com/embed/Ska1q0r7t13G',
    'https://www.yourupload.com/embed/SEunedFH4B57',
    'https://www.yourupload.com/embed/1p6eLlt7D7qb',
    'https://www.yourupload.com/embed/RT8ej8c8cshP',
    'https://www.yourupload.com/embed/5XB3LC40WXa5',
    'https://www.yourupload.com/embed/g688NLC8VnI1',
    'https://www.yourupload.com/embed/xM0W6J22CV7V',
    'https://www.yourupload.com/embed/5E348loJc465',
    'https://www.yourupload.com/embed/5K822PtvtQSf'

]

var t2Español =
[
    'https://ok.ru/videoembed/5145960188565',
    'https://mega.nz/embed/4OUCCCKS#zfkcQQlxFh14bVNYUo_sx04g5MMdwSDcOGbtbD45-8U',
    'https://ok.ru/videoembed/5145962744469',
    'https://ok.ru/videoembed/5145964251797',
    'https://ok.ru/videoembed/5145965955733',
    'https://ok.ru/videoembed/5145966938773',
    'https://ok.ru/videoembed/5145969035925',
    'https://ok.ru/videoembed/5145970674325',
    'https://ok.ru/videoembed/5145971657365',
    'https://ok.ru/videoembed/5145973164693',
    'https://ok.ru/videoembed/5145975655061',
    'https://ok.ru/videoembed/5145978014357',
    'https://ok.ru/videoembed/5145980308117',
    'https://ok.ru/videoembed/5145982208661',
    'https://ok.ru/videoembed/5146078874261',
    'https://ok.ru/videoembed/5146081888917',
    'https://ok.ru/videoembed/5146084051605',
    'https://ok.ru/videoembed/5146088966805',
    'https://ok.ru/videoembed/5146091195029',
    'https://ok.ru/videoembed/5146094668437',
    'https://ok.ru/videoembed/5146096896661',
    'https://ok.ru/videoembed/5146102270613',
    'https://ok.ru/videoembed/5146106268309',
    'https://ok.ru/videoembed/5146109086357',
    'https://ok.ru/videoembed/5146111117973'
]

function cambiarVideo(index)
{
    var reproductor = document.getElementById('reproductor');
    var titulo = document.getElementById('nomCap');
    var iframe = document.getElementById('repro');
    reproductor.style.display ='flex';
    titulo.innerText = t2Titulos[index];
    iframe.src = t2Sub[index];
    capitulo = index;
}

function cambiarSub()
{
    var iframe = document.getElementById('repro');
    iframe.src = t2Sub[capitulo];
}

function cambiarAudio()
{
    var iframe = document.getElementById('repro');
    iframe.src = t2Español[capitulo];
}
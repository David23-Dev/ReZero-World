var capitulo;

var t1Titulos =
[
    'Re:Zero - Capitulo 0',
    'Re:Zero - Capitulo 1',
    'Re:Zero - Capitulo 2',
    'Re:Zero - Capitulo 3',
    'Re:Zero - Capitulo 4',
    'Re:Zero - Capitulo 5',
    'Re:Zero - Capitulo 6',
    'Re:Zero - Capitulo 7',
    'Re:Zero - Capitulo 8',
    'Re:Zero - Capitulo 9',
    'Re:Zero - Capitulo 10',
    'Re:Zero - Capitulo 11',
    'Re:Zero - Capitulo 12',
    'Re:Zero - Capitulo 13',
    'Re:Zero - Capitulo 14',
    'Re:Zero - Capitulo 15',
    'Re:Zero - Capitulo 16',
    'Re:Zero - Capitulo 17',
    'Re:Zero - Capitulo 18',
    'Re:Zero - Capitulo 19',
    'Re:Zero - Capitulo 20',
    'Re:Zero - Capitulo 21',
    'Re:Zero - Capitulo 22',
    'Re:Zero - Capitulo 23',
    'Re:Zero - Capitulo 24',
    'Re:Zero - Capitulo 25'
]

var t1Sub = 
[
    'https://www.yourupload.com/embed/N8IdPGWM3bpB',
    'https://www.yourupload.com/embed/KLf773wQA18s',
    'https://www.yourupload.com/embed/E6Br15RyBS48',
    'https://www.yourupload.com/embed/0d08M7Jfs067',
    'https://www.yourupload.com/embed/4OgWv0DdPH1d',
    'https://www.yourupload.com/embed/47M0G1BFn8b5',
    'https://www.yourupload.com/embed/s0X81y2xF4Sa',
    'https://www.yourupload.com/embed/MLTpai4bgFyE',
    'https://www.yourupload.com/embed/EmL5GWWN2vh3',
    'https://www.yourupload.com/embed/dB1NhdfKRlA6',
    'https://www.yourupload.com/embed/J62vKa1rbQ6h',
    'https://www.yourupload.com/embed/OPr2REu27kdQ',
    'https://www.yourupload.com/embed/XvmKu5L8P1XG',
    'https://www.yourupload.com/embed/7ds38Kt5d48R',
    'https://www.yourupload.com/embed/Q63pgCbB6kdv',
    'https://www.yourupload.com/embed/gB8CaEL1kJed',
    'https://www.yourupload.com/embed/RS7y0TT4C0e4',
    'https://www.yourupload.com/embed/xRIq8jgQd2wF',
    'https://www.yourupload.com/embed/3CnkVX1HH5xp',
    'https://www.yourupload.com/embed/HLW8oND3O2vU',
    'https://www.yourupload.com/embed/4AP4g6c2jqp0',
    'https://www.yourupload.com/embed/50vfo76635AE',
    'https://www.yourupload.com/embed/PY513OQ7y771',
    'https://www.yourupload.com/embed/DKsk6xUxcY1R',
    'https://www.yourupload.com/embed/72mF38hTU1ca',
    'https://www.yourupload.com/embed/G3c5T07dq00C'

]

var t1Español =
[
    'https://player.odycdn.com/api/v4/streams/free/Re-Zero-kara-Hajimeru-Isekai-Seikatsu/09e317bcfbfc5adc9b6f61ef0b695e2e4b546a5c/a87af8',
    'https://www.yourupload.com/embed/5GW31o5XcrNs',
    'https://www.yourupload.com/embed/rXsG4VfEsxG0',
    'https://www.yourupload.com/embed/hKgfmUxu6sH0',
    'https://www.yourupload.com/embed/D2x3KEtIvqY4',
    'https://www.yourupload.com/embed/1jili0XCK108',
    'https://www.yourupload.com/embed/Gn3Sh3TR6rh1',
    'https://www.yourupload.com/embed/5MY6Tpw7tA66',
    'https://www.yourupload.com/embed/po8U3G52kk0C',
    'https://www.yourupload.com/embed/812E6RbGLy80',
    'https://www.yourupload.com/embed/87l4Pn5YqR60',
    'https://www.yourupload.com/embed/qiLUFu4IteN8',
    'https://www.yourupload.com/embed/aRPY85b3L5PK',
    'https://www.yourupload.com/embed/3W25dX4eHB6S',
    'https://www.yourupload.com/embed/2VLT7iS4wr2S',
    'https://www.yourupload.com/embed/e0CK4C2Yq1fn',
    'https://www.yourupload.com/embed/m1UONu3nQxl0',
    'https://www.yourupload.com/embed/kAFx6Eyor674',
    'https://www.yourupload.com/embed/GL1ByDdSPLPV',
    'https://www.yourupload.com/embed/M0wLl841Kjc8',
    'https://www.yourupload.com/embed/sb41BOX5KYGJ',
    'https://www.yourupload.com/embed/rKaepfJHLL54',
    'https://www.yourupload.com/embed/xlk5LJGl8q3V',
    'https://www.yourupload.com/embed/785g3elSYRR0',
    'https://www.yourupload.com/embed/1P5dFTL16u4n',
    'https://www.yourupload.com/embed/nSg81LThS0KU'
]

function cambiarVideo(index)
{
    var reproductor = document.getElementById('reproductor');
    var titulo = document.getElementById('nomCap');
    var iframe = document.getElementById('repro');
    reproductor.style.display ='flex';
    titulo.innerText = t1Titulos[index];
    iframe.src = t1Sub[index];
    capitulo = index;
}

function cambiarSub()
{
    var iframe = document.getElementById('repro');
    iframe.src = t1Sub[capitulo];
}

function cambiarAudio()
{
    var iframe = document.getElementById('repro');
    iframe.src = t1Español[capitulo];
}
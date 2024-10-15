function kartoshkaDehqoni() {
    const tonna = parseFloat(document.getElementById('kartoshkaTonna').value);
    const narx = parseFloat(document.getElementById('kartoshkaNarx').value);
    const jami = tonna * 1000 * narx;
    document.getElementById('kartoshkaResult').textContent = `Jami daromad: ${jami.toLocaleString()} so'm`;
}

function benzinKolonkasi() {
    const turi = document.getElementById('benzinTuri').value;
    const litr = parseFloat(document.getElementById('benzinLitr').value);
    const narxlar = { 'Ai80': 7000, 'Ai92': 11000, 'Ai95': 14000 };
    const jami = narxlar[turi] * litr;
    document.getElementById('benzinResult').textContent = `Jami: ${jami.toLocaleString()} so'm`;
}

function uyNarxiniHisoblash() {
    const boshlangichNarx = parseFloat(document.getElementById('uyNarxi').value);
    const yillar = parseInt(document.getElementById('yillar').value);
    const yangiNarx = boshlangichNarx * Math.pow(1.1, yillar);
    document.getElementById('uyResult').textContent = `${yillar} yildan keyin narx: ${yangiNarx.toFixed(2)} $`;
}

function somsaHisoblash() {
    const gosht = parseFloat(document.getElementById('gosht').value) * 1000;
    const piyoz = parseFloat(document.getElementById('piyoz').value) * 1000;
    const un = parseFloat(document.getElementById('un').value) * 1000;
    const somsalar = Math.min(
        Math.floor(gosht / 100),
        Math.floor(piyoz / 50),
        Math.floor(un / 25)
    );
    document.getElementById('somsaResult').textContent = `Tayyorlanishi mumkin bo'lgan somsalar soni: ${somsalar} dona`;
}

function beshqozon() {
    const oshKg = parseFloat(document.getElementById('oshKg').value);
    const porsiyaGram = parseFloat(document.getElementById('porsiyaGram').value);
    const odamlarSoni = Math.floor((oshKg * 1000) / porsiyaGram);
    document.getElementById('beshqozonResult').textContent = `Osh ${odamlarSoni} kishiga yetadi`;
}

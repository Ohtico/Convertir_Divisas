const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    let val = document.getElementById('val').value;
    let tmon = document.getElementById('tmon').value;
    let tcmon = document.getElementById('tcmon').value;

    cald(val, tmon, tcmon)
})
function nmoneda(nombre, dolar, pmex, pcol, euro, lest) {
    this.nombre = nombre;
    this.dolar = dolar;
    this.pmex = pmex;
    this.euro = euro;
    this.pcol = pcol;
    this.lest = lest;
}
function lmoneda() {
    lista = Array();

    var mon = new nmoneda('dolar', 1, 19.94, 3947.60, 0.85, 0.72);
    lista.push(mon);
    var mon = new nmoneda('pmex', 0.050, 1, 197.99, 0.043, 0.036);
    lista.push(mon);
    var mon = new nmoneda('pcol', 0.00025, 0.0050, 1, 0.00022, 0.00018);
    lista.push(mon);
    var mon = new nmoneda('euro', 1.17, 23.42, 4639.05, 1, 0.85);
    lista.push(mon);
    var mon = new nmoneda('lest', 1.39, 27.67, 5481.97, 1.18, 1);
    lista.push(mon);

    return lista;
}
const cald = (valor, tmon, tcmon) => {

    let tcambio = '';
    let total = "";
    mons = new lmoneda();

    mon = mons.forEach(function (mon) {
        if (tmon == mon.nombre) {
            if (tcmon == 'pmex') {
                tcambio = valor * mon.pmex;
                total = tcambio + 'Pesos Mexicanos';
            } else if (tcmon == 'pcol') {
                tcambio = valor * mon.pcol;
                total = tcambio + 'Pesos Colombianos'
            } else
                if (tcmon == 'euro') {
                    tcambio = valor * mon.euro;
                    total = tcambio + '  Euros';
                } else
                    if (tcmon == 'lest') {
                        tcambio = valor * mon.lest;
                        total = tcambio + '  Libras Esterlinas';
                    } else
                        if (tcmon == 'dolar') {
                            tcambio = valor * mon.dolar;
                            total = tcambio + '  dolares';
                        }
        }
    });

    document.getElementById('imprin').innerHTML = '';

    document.getElementById('imprin').innerHTML = 'Su total al cambio es de : ' + total;

}
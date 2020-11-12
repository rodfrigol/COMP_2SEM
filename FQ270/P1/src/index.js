var equacoes = {
    'Langmuir': {
        'constantes': ['qmax', 'KL'],
        'unidades': ['mg/g', 'L/mg'],
        'funcao': (params, Ce) => params['qmax']*params['KL']*Ce/(1+params['KL']*Ce)
    },
    'Freundlich': {
        'constantes': ['KF', 'n'],
        'unidades': ['mg^(1-1/n)*g^(-1)*L^(1/n)', ''],
        'funcao': (params, Ce) => params['KF']*Ce**(1/params['n'])
    },
    'Temkin': {
        'constantes': ['b', 'aT'],
        'unidades': ['(J/mol)*(g/mg)', 'L/mg'],
        'funcao': (params, Ce) => (8.314*300/params['b'])*Math.log(params['aT']*Ce)
    },
    'Dubinin-Radushkevich': {
        'constantes': ['qm', 'k'],
        'unidades': ['mg/g', '(J/mol)^(-2)'],
        'funcao': (params, Ce) => params['qm']*Math.exp(-params['k']*(8.314*300*Math.log(1+1/Ce))**2)
    },
    'Redlich-Peterson': {
        'constantes': ['KRP', 'aRP', 'B'],
        'unidades': ['L/g', '(mg/L)^(-B)', ''],
        'funcao': (params, Ce) => params['KRP']*Ce/(1+params['aRP']*(Ce**params['B']))
    }
}

function montarSelect(){
    var html = ''
    Object.keys(equacoes).forEach((eq) => {
        html += "<option value='"+eq+"'>"+eq+"</option>"
    })
    document.getElementById('equacoes').innerHTML = html
}

function changeSelect(elem){
    var html = ''
    equacoes[elem.value]['constantes'].forEach((constante, index) => {
        html += "<div><span>"+constante+":</span><input type='text' name='"+constante+"'></input><span>"+equacoes[elem.value]['unidades'][index]+"</span></div>"
    })
    document.getElementById('constantes').innerHTML = html
}

function obterIsoterma(){
    document.getElementById('errormsg').textContent = ''

    var valores = {}
    var elems = document.getElementById("constantes").children
    for (var i=0; i<elems.length; i++){
        if (isNaN(elems[i].children[1].value) || elems[i].children[1].value===''){
            document.getElementById('errormsg').textContent = 'Preencher as constantes com números'
            return
        }
        valores[elems[i].children[1].name] = elems[i].children[1].value
    }
    
    var equacao = document.getElementById('equacoes').value
    var f = equacoes[equacao]['funcao']
    console.log(f)

    var x = Array.from(Array(60), (_, i) => (i+1)*5)
    var y = Array.from(x, (Ce) => f(valores, Ce))
    console.log(valores)
    
    let grafico = document.getElementById('grafico').getContext('2d');                   
    let chart = new Chart(grafico, {
        type: 'line',
        data: {
            labels: x,
                        
            datasets: [
                {
                    label: 'Isoterma de adsorção - ' + equacao,
                    data: y
                }
            ]
        },
        options : {
            scales: {
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'q (mg/g)'
                }
              }],
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Ce (mg/L)'
                }
              }]
            }     
          }
    });
}

montarSelect()
changeSelect(document.getElementById('equacoes'))
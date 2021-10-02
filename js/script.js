
let crimeslist = []
var requestjson = fetch("config/cfg.json")
    .then(response => response.json())
    .then(data => {
        requestjson = data.cdpenal
        for(i = 0; i < data.cdpenal.length; i++){
            crimeslist.push(data.cdpenal[i])
        }
    })

console.log(crimeslist)


function closeAll(){
    $('.home').hide()
    $('.cars').hide()
    $('.registers').hide()
    $('.logs').hide() 
    $('.prision').hide()
    $('.fine').hide()
    $('.warning').hide()
    $('.prisioninfos').hide()
    $('.boxinfos').hide()
    $('.fineinfos').hide()
    $('.warninginfos').hide()
    $('.searchboxcar').hide()
    $('.resultcar').hide()
    $('.resultdist').hide()
    $('.resultsearch').hide()
    $('.contentmain').hide()
    $('.occurrence').hide()
    $('.a').html('')
    $('.b').html('')
    $('.c').html('')
    $('.d').html('')
    $('.e').html('')
    $('.f').html('')
    $('.g').html('')
    $('.h').html('')
    $('.j').html('')
    $('.soma').html('0')
    $('.finev').html('0')
}

function home(){
    closeAll()
    $('.home').show(200)
}

function register(){
    closeAll()
    $('.registers').show(200)
    $('.searchbox').show(200)
}

function cars(){
    closeAll()
    $('.cars').show(200)
    $('.searchboxcar').show(200)
}
function logs(){
    closeAll()
    $('.logs').show(200)
}

function prision(){
    closeAll()
    $('.prision').show(200)
    for(i = 0; i <= 8; i ++){
        crimeslist[i].crimes.map((element,index)=>{
            $(`.${crimeslist[i].class}`).append(`
                <div class="form-check form-switch">
                    <input onclick="updateSentence()" class="${element.id} form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                    <label class="form-check-label" for="flexSwitchCheckDefault">${element.name}</label>
                </div>
            `)
        })
    }
}


let sentence 
let finev 

function updateSentence(){
    sentence = 0
    finev = 0
    for(i = 0; i < 8; i++){
        crimeslist[i].crimes.map((element,index)=>{
            if ($(`.${element.id}`).is(':checked')){
                sentence = sentence + element.time
                finev = finev + element.fine
                $('.soma').html(sentence)
                $('.finev').html(finev)
            }
        })
    }
} 

function updateFine(){
    sentence = 0
    finev = 0
    for(i = 0; i < 8; i++){
        crimeslist[i].crimes.map((element,index)=>{
            if ($(`.${element.id}`).is(':checked')){
                sentence = sentence + element.time
                finev = finev + element.fine
                $('.soma').html(sentence)
                $('.finev').html(finev)
            }
        })
    }
} 

function fine(){
    closeAll()
    $('.fine').show(200)
    for(i = 0; i <= 8; i ++){
        crimeslist[i].crimes.map((element,index)=>{
            $(`.${crimeslist[i].class}`).append(`
                <div class="form-check form-switch">
                    <input onclick="updateFine()" class="${element.id} form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                    <label class="form-check-label" for="flexSwitchCheckDefault">${element.name}</label>
                </div>
            `)
        })
    }
}

function warning(){
    closeAll()
    $('.warning').show(200)
}

/* REGISTER INTERACTIONS */


function SearchRegister(){
    $('.searchbox').hide()
    $('.spinner-border').show()
    setTimeout(function(){ 
        $('.spinner-border').hide()
        $('.contentmain').show()
        $('.boxinfos').show()
    }, 1500);
}

function closeRegister(){
    $('.prisioninfos').hide()
    $('.boxinfos').hide()
    $('.fineinfos').hide()
    $('.warninginfos').hide()
}

function PrisionsInfos(){
    closeRegister()
    $('.prisioninfos').show()
}

function BoxInfos(){
    closeRegister()
    $('.boxinfos').show()
}

function FineInfos(){
    closeRegister()
    $('.fineinfos').show()
}

function WarningInfos(){
    closeRegister()
    $('.warninginfos').show()
}

/* CAR INTERACTIONS */

function ResultDist(){
    $('.searchboxcar').hide()
    $('.resultcar').show(200)
    $('.resultdist').show(200)
    
}

function ResultSearchCar(){
    $('.searchboxcar').hide()
    $('.resultcar').show(200)
    $('.resultsearch').show(200)    
}

/* OCORRENCIAS */

function occurrence(){
    closeAll()
    $('.occurrence').show(200)
}
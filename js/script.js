
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
    $('.divisions').hide() 
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
function divisions(){
    closeAll()
    $('.divisions').show(200)
}
function prision(){
    closeAll()
    $('.prision').show(200)

    crimeslist[0].crimes.map((element,index)=>{
        $('.a').append(`
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                <label class="form-check-label" for="flexSwitchCheckDefault">${element.name}</label>
            </div>
        `)
    })
    crimeslist[1].crimes.map((element,index)=>{
        $('.b').append(`
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                <label class="form-check-label" for="flexSwitchCheckDefault">${element.name}</label>
            </div>
        `)
    })
    crimeslist[2].crimes.map((element,index)=>{
        $('.c').append(`
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                <label class="form-check-label" for="flexSwitchCheckDefault">${element.name}</label>
            </div>
        `)
    })
    crimeslist[3].crimes.map((element,index)=>{
        $('.d').append(`
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                <label class="form-check-label" for="flexSwitchCheckDefault">${element.name}</label>
            </div>
        `)
    })
    crimeslist[4].crimes.map((element,index)=>{
        $('.e').append(`
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                <label class="form-check-label" for="flexSwitchCheckDefault">${element.name}</label>
            </div>
        `)
    })
    crimeslist[5].crimes.map((element,index)=>{
        $('.f').append(`
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                <label class="form-check-label" for="flexSwitchCheckDefault">${element.name}</label>
            </div>
        `)
    })
    crimeslist[5].crimes.map((element,index)=>{
        $('.g').append(`
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                <label class="form-check-label" for="flexSwitchCheckDefault">${element.name}</label>
            </div>
        `)
    })
    crimeslist[6].crimes.map((element,index)=>{
        $('.h').append(`
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                <label class="form-check-label" for="flexSwitchCheckDefault">${element.name}</label>
            </div>
        `)
    })
    crimeslist[7].crimes.map((element,index)=>{
        $('.j').append(`
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                <label class="form-check-label" for="flexSwitchCheckDefault">${element.name}</label>
            </div>
        `)
    })
}
function fine(){
    closeAll()
    $('.fine').show(200)
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
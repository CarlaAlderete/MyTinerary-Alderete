// const City = require('../models/City')
const cities= [
    { photo:'copenhagen.jpg',city: 'copenhagen', country:'Denmark',id:'100'},
    { photo:'Boracay.jpg', city: 'boracay', country:'Philippines',id:'101'},
    { photo:'Rio.jpg', city: 'rio de Janeiro', country:'Brazil',id:'102'},
    { photo:'Reykjavik.jpg',city: 'reykjavik', country:'Iceland',id:'103'},
    { photo:'amsterdam.jpg',city: 'amsterdam', country:'Netherlands',id:'104'},
    { photo:'londres.jpg',city: 'london', country:'United Kingdom',id:'105'},
    { photo:'Mykonos.jpg',city: 'mykonos', country:'Greece',id:'106'},
    { photo:'toronto.jpg',city: 'toronto', country:'Canada',id:'107'},
    { photo:'telaviv.jpg',city: 'tel aviv', country:'Israel',id:'108'},
    { photo:'losangeles.jpg',city: 'los Angeles', country:'United States',id:'109'},
    { photo:'ny.jpg',city: 'new York', country:'United States',id:'110'},
    { photo:'sanfrancisco.jpg',city: 'san Francisco',country:'United States',id:'111'}
];

const citiesControllers = {
    citiesGet : (req, res)=>{
        res.json({res : cities})
    },
    cityGet : (req, res)=>{
        const city = cities.find(destino => destino.id === req.params.id)
        res.json({res : city})
    }
}

module.exports = citiesControllers
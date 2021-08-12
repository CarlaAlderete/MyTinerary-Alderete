const cities= [
    { foto:'copenhagen.jpg',city: 'copenhagen', country:'Denmark',id:'100'},
    { foto:'Boracay.jpg', city: 'boracay', country:'Philippines',id:'101'},
    { foto:'Rio.jpg', city: 'rio de Janeiro', country:'Brazil',id:'102'},
    { foto:'Reykjavik.jpg',city: 'reykjavik', country:'Iceland',id:'103'},
    { foto:'amsterdam.jpg',city: 'amsterdam', country:'Netherlands',id:'104'},
    { foto:'londres.jpg',city: 'london', country:'United Kingdom',id:'105'},
    { foto:'Mykonos.jpg',city: 'mykonos', country:'Greece',id:'106'},
    { foto:'toronto.jpg',city: 'toronto', country:'Canada',id:'107'},
    { foto:'telaviv.jpg',city: 'tel aviv', country:'Israel',id:'108'},
    { foto:'losangeles.jpg',city: 'los Angeles', country:'United States',id:'109'},
    { foto:'ny.jpg',city: 'new York', country:'United States',id:'110'},
    { foto:'sanfrancisco.jpg',city: 'san Francisco',country:'United States',id:'111'}
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
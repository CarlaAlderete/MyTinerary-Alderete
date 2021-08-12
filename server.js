const express = require('express')
const cors = require('cors')
// require('dotenv').config() para manejar los datos sencibles

const app = express()
app.use(cors())
app.use(express.json())

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

app.get('/api/cities', (req, res)=>{
    res.json({res : cities})
})

app.get('/api/city/:id', (req, res)=>{
    const city = cities.find(destino => destino.id === req.params.id)
    res.json({res : city})
})

app.listen(4000, () => console.log('Server listening on port 4000'))
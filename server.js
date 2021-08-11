const express = require('express')
const cors = require('cors')
// require('dotenv').config() para manejar los datos sencibles

const app = express()
app.use(cors())

const cities= [
    { foto:'copenhagen.jpg',city: 'Copenhagen', country:'Denmark'},
    { foto:'Boracay.jpg', city: 'Boracay', country:'Philippines'},
    { foto:'Rio.jpg', city: 'Rio de Janeiro', country:'Brazil'},
    { foto:'Reykjavik.jpg',city: 'Reykjavik', country:'Iceland'},
    { foto:'amsterdam.jpg',city: 'Amsterdam', country:'Netherlands'},
    { foto:'londres.jpg',city: 'London', country:'United Kingdom'},
    { foto:'Mykonos.jpg',city: 'Mykonos', country:'Greece'},
    { foto:'toronto.jpg',city: 'Toronto', country:'Canada'},
    { foto:'telaviv.jpg',city: 'Tel aviv', country:'Israel'},
    { foto:'losangeles.jpg',city: 'Los Angeles', country:'United States'},
    { foto:'ny.jpg',city: 'New York', country:'United States'},
    { foto:'sanfrancisco.jpg',city: 'San Francisco',country:'United States'}
];

app.listen(4000, () => console.log('Server listening on port 4000'))
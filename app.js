const express = require('express')
const bodyParser = require('body-parser')
const app = express()

let admins = require('./data/admins')
const adminLogged = {
    "firstname": "Papi",
    "lastname": "Mbaye",
    "email": "admin@test.com",
    "role": "superadmin",
    "token": "token_de_papi"
}

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
    next()
})

app.use(bodyParser.json())

app.get('/api/admins', (req, res, next) => {
    res.status(200).json({ admins })
})

app.post('/api/admins', (req, res, next) => {
    let admin = req.body
    admin.id = admins.length + 1
    admins.push(admin)
    res.status(201).json({ message: 'Admin enregistré' })
})

app.delete('/api/admins/:id', (req, res, next) => {
    const id = parseInt(req.params.id)
    const admin = admins.filter(a => a.id === id)
    if (admin[0]) {
        const newAdmins = admins.filter(a => a.id !== id)
        admins = newAdmins
        res.status(200).json({ admins })
    }
    else {
        res.status(404).json({ message: 'Cet utilisateur n\'existe pas.' })
    }
})

app.get('/api/admins/:id', (req, res, next) => {
    const id = parseInt(req.params.id)
    const result = admins.filter(a => a.id === id)
    if (result[0]) {
        const admin = result[0]
        res.status(200).json({ admin })
    }
    else {
        res.status(404).json({ message: 'Cet utilisateur n\'existe pas.' })
    }
})

app.put('/api/admins/:id', (req, res, next) => {
    const id = parseInt(req.params.id)
    const admin = admins.filter(a => a.id === id)
    if (admin[0]) {
        const newAdmins = admins.filter(a => a.id !== admin[0].id)
        newAdmins.push({ ...req.body, id})
        admins = newAdmins
        res.status(200).json('Admin mis à jour !')
    }
    else {
        res.status(404).json({ message: 'Cet admin n\'existe pas.' })
    }
})>

app.post('/api/login', (req, res, next) => {
    admin = req.body
    if (admin.login === 'admin@test.com' && admin.password === 'passer') {
        res.status(200).json({ admin: adminLogged })
    }
    else {
        res.status(404).json({ message: 'Login ou mot de passe incorrect !' })
    }

})

module.exports = app;

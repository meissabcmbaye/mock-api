const ADMINS = [
    {
        "id": 1,
        "firstname": "John",
        "lastname": "Doe",
        "surname": "jhonny",
        "email": "john.doe@test.com",
        "birthDate": "1992-05-11",
        "role": {
            "id": 1,
            "name": "ADMIN"
        },
        "is_active": true
    },
    {
        "id": 2,
        "firstname": "Jane",
        "lastname": "Doe",
        "surname": "jane",
        "birthDate": "1992-10-25",
        "email": "jane.doe@test.com",
        "role": {
            "id": 1,
            "name": "ADMIN"
        },
        "is_active": true
    },
    {
        "id": 3,
        "firstname": "Bobo",
        "lastname": "Baldé",
        "surname": "bobo",
        "birthDate": "1994-06-08",
        "email": "bobo.balde@test.com",
        "role": {
            "id": 1,
            "name": "ADMIN"
        },
        "is_active": false
    }
]

module.exports = ADMINS

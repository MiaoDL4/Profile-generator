const fs = require('fs');

function numberCards(objects) {
    let Data = '';
    for (i = 0; i < objects.length; i++) {
        Data += employeeCards(objects[i]);
    }
    return Data;
};

function employeeCards(passedObject) {
    let param
    ({ name, id, email, officeNumber, github, school } = passedObject)

    if (officeNumber) {
        param = `<strong>Office Number:</strong> ${officeNumber}`;
    } else if (github) {
        param = `<strong>GitHub:</strong> <a href="https://github.com/${github}"> ${github}</a>`;
    } else {
        param = `<strong>School:</strong> ${school}`;
    };

    return `
    <div class="col-4">
        <div class="card me-3 mb-3">
            <div class="card-header">
            <h3>${name}</h3>
            <h5>${passedObject.constructor.name}</h5>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">
                <strong>ID:</strong> ${id}
            </li>
            <li class="list-group-item">
                <strong>Email:</strong> <a href="mailto:${email}">${email}</a>
            </li>
            <li class="list-group-item">
                ${param}
            </li>
            </ul>
        </div>
    </div>
    `;
};

module.exports = function (objects) {

    let HTML = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <style>
      header {
        background-color: blue;
        color: white;
        padding: 20px 0 20px 0;
      }
    </style>
  </head>

    <body>
    <header class="p-6 text-center">
    <h1>My Team</h1>
      </header>
    
        <main class="mt-3 container">
            <div class="row justify-content-center">
                ${numberCards(objects)}
            </div>
        </main>
    
    </body>
    </html>
    `;

    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/team.html', HTML, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve({
                    ok: true,
                    message: 'Successful!'
                });
            }
        });
    }).catch((err) => {
        console.log(err);
    });
};
'use strict';

const roles = {
  manager: {
    icon: 'fas fa-user-tie',
    background: 'danger',
    extra: 'Office Number'
  },
  engineer: {
    icon: 'fas fa-laptop-code',
    background: 'info',
    extra: 'GitHub'
  },
  intern: {
    icon: 'fas fa-clipboard',
    background: 'success',
    extra: 'School'
  }
};

const generateMemberInfo = teamMember => {
  let specifics;

  switch (teamMember.title) {
    case 'Engineer':
      specifics = roles.engineer;
      break;
    case 'Intern':
      specifics = roles.intern;
      break;
    default:
      specifics = roles.manager;
      console.log('getting an error here');
  }

  return `
    <div
    class="card text-white bg-${specifics.background} mb-3"
    style="max-width: 18rem;">
      <div class="card-header">
        <div>
          <h3 class="display-4 font-weight-bold" id="memberName">
            ${teamMember.name}
          </h3>
        </div>
        <div><i class="${specifics.icon}"></i> ${teamMember.title}</div>
      </div>
      <div class="card-body bg-dark">
        <div class="card text-dark" style="width: 15rem;">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <span class="font-weight-bold">ID</span>: ${teamMember.id}
            </li>
            <li class="list-group-item">
              <span class="font-weight-bold">Email</span>:
              ${teamMember.email}
            </li>
            <li class="list-group-item">
              <span class="font-weight-bold">${specifics.extra}</span>:
              ${teamMember.extra}
            </li>
          </ul>
        </div>
      </div>
    </div>`;
};

// sort {info} to show manager, engineers, then interns
const generateHTML = info => {
  return `
    <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossorigin="anonymous"
      />
      <script
        src="https://kit.fontawesome.com/53455dd245.js"
        crossorigin="anonymous"
      ></script>
      <title>Dev Team</title>
    </head>
    <body>
      <nav class="navbar navbar-dark bg-dark">
        <span class="navbar-brand mb-0 h1 mx-auto font-weight-bold"
          >THE DREAM TEAM</span
        >
      </nav>

      <div class="container pt-5">
        <div class="row justify-content-around" id="team-container">
          ${info}
        </div>
      </div>

      <script
        src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        crossorigin="anonymous"
      ></script>
    </body>
  </html>`;
};

module.exports = {
  generateMemberInfo,
  generateHTML
};

const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();
app.use(cors());
app.use(express.json());

//conexión a la bases de datos
async function getConnection() {
  //creary configurar la conexion
  const connection = await mysql.createConnection({
    host: 'sql.freedb.tech',
    user: 'freedb_admin_Hechiceras',
    password: '8f6q2y%Y4NZk!gM',
    database: 'freedb_projectosMolones',
  });

  connection.connect();
  return connection;
}

const port = 3001;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get('/listprojects', async (req, res) => {
  const conn = await getConnection();
  const queryProject =
    'SELECT * FROM projects INNER JOIN autor ON autor.idAutor = projects.fk_autor';
  const [result] = await conn.query(queryProject);
  conn.end();
  res.json({
    msj: 'todo OK hechicera',
    data: result,
  });
});

app.post('/createproject', async (req, res) => {
  const body = req.body;
  const queryAutor = `INSERT INTO autor (nameAutor, jobAutor, imageAutor) VALUES (?, ?, ?);`;
  const queryProject = `INSERT INTO projects (nameProject, sloganProject, urlGit, urlDemo, techProject, descProject, imageProject,fk_autor) VALUES (?,?,?,?,?,?,?,?);`;
  const conn = await getConnection();
  const [result] = await conn.query(queryAutor, [
    body.autor,
    body.job,
    body.image,
  ]);

  if (result.insertId) {
    const [result2] = await conn.query(queryProject, [
      body.name,
      body.slogan,
      body.repo,
      body.demo,
      body.technologies,
      body.desc,
      body.photo,
      result.insertId,
    ]);
  }

  const insertId = result.insertId;

  /*   res.json({
    cardUrl: 'http://localhost:3002/project' + insertId,
  }); */
});

const staticServerPath = './web/dist/';
app.use(express.static(staticServerPath));

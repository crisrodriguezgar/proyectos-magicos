const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json({limit: '100MB'}));
app.set('view engine', 'ejs');

//conexión a la bases de datos
async function getConnection() {
  //creary configurar la conexion
  const connection = await mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DBUSER,
    password: process.env.PASS,
    database: process.env.DATABASE,
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
  const sortFilterParam = req.query.sort;
  let project = '';
  if (
    sortFilterParam === null ||
    sortFilterParam === '' ||
    sortFilterParam === undefined
  ) {
    const queryProject =
      'SELECT * FROM projects INNER JOIN autor ON autor.idAutor = projects.fk_autor ORDER BY nameProject ASC';
    const [results] = await conn.query(queryProject);
    project = results;
  } else {
    const queryProject = `SELECT * FROM projects INNER JOIN autor ON autor.idAutor = projects.fk_autor ORDER BY nameProject ${sortFilterParam}`;
    const [results] = await conn.query(queryProject, [sortFilterParam]);
    project = results;
  }

  res.json({
    msj: 'todo OK hechicera',
    data: project,
  });
  conn.end();
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
  const idAutor = result.insertId;

  let idProject = '';
  let result2 = [];
  if (idAutor) {
    result2 = await conn.query(queryProject, [
      body.name,
      body.slogan,
      body.repo,
      body.demo,
      body.technologies,
      body.desc,
      body.photo,
      idAutor,
    ]);
    console.log(result2[0]);
  }
  idProject = result2[0].insertId;
  res.json({
    cardURL: 'https://proyectos-magicos.onrender.com/project/' + idProject,
    success: true,
  });
  conn.end();
});

app.get('/project/:idProject', async (req, res) => {
  const id = req.params.idProject;
  const selectProject =
    'SELECT * FROM projects INNER JOIN autor ON autor.idAutor = projects.fk_autor WHERE idProject =?';
  const conn = await getConnection();
  const [results] = await conn.query(selectProject, [id]);
  if (results.length === 0) {
    res.render('notFound');
  } else {
    res.render('detailProject', {
      project: results[0],
    });
  }
  console.log(results[0]);
  conn.end();
});

app.delete('/project/:idProject', async (req, res) => {
  console.log('estoy eliminando');
  try {
    const id = req.params.idProject;
    const selectProject = 'DELETE FROM projects WHERE idProject =?';
    const conn = await getConnection();
    const [results] = await conn.query(selectProject, [id]);
    res.json({
      success: true,
    });
    conn.end();
  } catch (error) {
    res.json({
      success: false,
      message:
        'No hemos podido borrar el proyecto, intentalo de nuevo más tarde',
    });
  }
});

const staticServerPath = './src/public-react/';
app.use(express.static(staticServerPath));

const pathServerPublicStyles = './src/public-css';
app.use(express.static(pathServerPublicStyles));

const staticServerPathImages = './src/public-images/';
app.use(express.static(staticServerPathImages));

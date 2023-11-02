const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();
app.use(cors());
/* app.use(express.json({ limit: '25mb' })); */

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

const staticServerPath = './web/dist/';
app.use(express.static(staticServerPath));

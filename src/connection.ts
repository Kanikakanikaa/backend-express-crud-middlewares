import mysql from 'mysql2/promise';
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'LoginSignup'
  })
  
  // connection.connect((error:any) => {
  //   if (error){
  //       console.log("A error has been occurred "
  //           + "while connecting to database.");        
  //       throw error;
  //   }
  //   else{
  //     console.log("connected to database successfully");
  //   }
  // });

  // connection.end()
 
  // connection.query('SELECT 1 + 1 AS solution', (err:any, rows:any) => {
  //   if (err) throw err
  
  //   console.log('The solution is: ', rows[0].solution)
  // })

export default connection;
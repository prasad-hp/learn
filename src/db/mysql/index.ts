import mysql from "mysql2/promise"

  const createConnection = async () => {
    try {
      // Create a connection to the database
      const connection = await mysql.createConnection({
        host     : '127.0.0.1',
        user     : 'root',
        database : "shakila",
        password : "@admin123"
      });
  
      console.log('Connected to the MySQL database');
  
      // Perform a simple query
      const [rows, fields]:any = await connection.execute('SELECT * FROM actor'); 
      console.log('Query results:', rows);
  
      // Close the connection
      await connection.end();
    } catch (error) {
      console.error('Error connecting to the database:', error);
    }
  };
  
  createConnection();
  
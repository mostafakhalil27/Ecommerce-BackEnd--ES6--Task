import connection from '../../../DB/connection.js';


const addUser = (req, res, next) =>{
  const { name, email, password, age} = req.body;
  const query = `INSERT INTO users (name, email, password, age) VALUES ('${name}' , '${email}' , '${password}', ${age})`;
  connection.execute(query , (erorr, result, fields) =>{
    if (erorr) {
        if (erorr.errno = 1062) {
          return res.json({Message:"Email Already Exist"})
        };
        return res.json({Message:"Query erorr", erorr})
    };
        return res.json({Message:"Done", result})
  });
};

const updateUser = (req, res, next) =>{
  const { id } = req.params;
  const { email, name, password, age } = req.body;
  const query = `UPDATE users SET email='${email}' ,name='${name}', password='${password}', age='${age}' WHERE id=${id}`;
  connection.execute(query, (erorr, result) =>{
    if (erorr) {
      return res.json({Message:"Query erorr", erorr})
    };
    return result.affectedRows? res.json({Message:"Done", result}) : res.json({Message:"Invaild ID"})
  });
};

const deleteUser = (req, res, next) =>{
  const { id } = req.params;
  const query = `DELETE FROM users WHERE id=${id}`;
  connection.execute(query, (erorr, result) =>{
    if (erorr) {
      return res.json({Message:"Query erorr", erorr})
    };
    return result.affectedRows? res.json({Message:"Done", result}) : res.json({Message:"Invalid ID"})
  });
};

const getUsers = (req, res, next)=>{
  const query = `SELECT * FROM users`;
  connection.execute(query , (erorr , result , fields) =>{
    if (erorr) {
      return res.json({Message:"query erorr" , erorr})
    };
     return res.json({Message:"Done" , result})    
  });
};

const getSpecialUsers = (res) => {
  const query = `SELECT * FROM users WHERE name LIKE 'a%' AND age < 30`;
  connection.execute(query, (error, result, fields) => {
    if (error) {
      return res.json({Message:"query error", error});
    };
     return res.json({Message:"Done", result});    
  });
};

const getSpecialUsersByID = (res) => {
  const query = `SELECT * FROM users WHERE id IN (1,2)`;
  connection.execute(query, (error, result, fields) => {
    if (error) {
      return res.json({Message:"query error", error});
    };
     return res.json({Message:"Done", result});    
  });
};

const getUsersProducts = (res) => {
  const query = `SELECT * FROM users u, products p WHERE u.id = p.userID`;
  connection.execute(query, (error, result, fields) => {
    if (error) {
      return res.json({Message:"query error", error});
    };
     return res.json({Message:"Done", result});    
  });
};

export {
  addUser,
  updateUser,
  deleteUser,
  getUsers,
  getSpecialUsers,
  getSpecialUsersByID,
  getUsersProducts
};
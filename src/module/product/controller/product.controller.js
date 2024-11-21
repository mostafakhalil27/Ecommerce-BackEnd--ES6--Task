import connection from '../../../DB/connection.js';

const addProduct = (req, res, next) =>{
  const { name , description, price, createdby , userId} = req.body
  const query = `INSERT INTO products (name , description, price, createdby, userId) VALUES ('${name}' , '${description}' , ${price}, '${createdby}', ${userId}, )`;
  connection.execute(query , (erorr, result, fields) =>{
    if (erorr) {
        if (erorr.errno = 1452) {
          return res.json({Message:"Product Already Exist"})
        };
        return res.json({Message:"Query erorr", erorr})
    };
        return result.affectedRows ? res.json({Message:"Done", result}) : res.json({Message:'Fail To Add Product'})
  });
};

const updateProduct = (req, res, next) =>{
  const { id } = req.params
  const { name , description, price, createdby , userId} = req.body 
  const query = `UPDATE products SET name ='${name}' ,description='${description}', price=${price}, createdby='${createdby}' WHERE id=${id} AND userId=${userId},`
  connection.execute(query, (erorr, result) =>{
    if (erorr) {
      return res.json({Message:"Query erorr", erorr})
    }
    return result.affectedRows? res.json({Message:"Done", result}) : res.json({Message:"Fail To Update Product"})
  })
}

const deleteProduct = (req, res, next) =>{
  const { id } = req.params
  const { userId } = req.body
  const query = `DELETE FROM products WHERE id=${id} AND userid=${userId}`
  connection.execute(query, (erorr, result) =>{
    if (erorr) {
      return res.json({Message:"Query erorr", erorr})
    }
    return result.affectedRows ? res.json({Message:"Done", result}) : res.json({Message:"Fail To Delete Product"})
  })
}

const getProducts = (req, res, next)=>{
  const query = `SELECT * FROM products`
  connection.execute(query , (erorr , result , fields) =>{
    if (erorr) {
      return res.json({Message:"query erorr" , erorr})
    }
     return res.json({Message:"Done" , result})    
  })
}

const getSpecialProducts = (req, res, next)=>{
  const query = `SELECT * FROM products WHERE price < 3000`
  connection.execute(query , (error , result , fields) =>{
    if (error) {
      return res.json({Message:"query error" , error})
    }
     return res.json({Message:"Done" , result})    
  })
}

export {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getSpecialProducts 
};
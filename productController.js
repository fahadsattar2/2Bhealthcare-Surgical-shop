const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

router.get('/', (req, res, next) => {
    res.render('products/addOrUpdate', {
        viewTitle: "Insert product"
    });
});

router.post('/', (req, res, next) => {
    if(req.body._id == '')
        insertRecord(req, res);
    else
        updateRecord(req, res);
});

function insertRecord(req, res){
    var product = new Product();
    product.name = req.body.productName;
    product.price = req.body.productPrice;
    product.description = req.body.productDescription;
    product.save((err, doc) => {
        if(!err)
            res.redirect('products/list');
        else{
            console.log('Error adding product: '+ err);
        }
    });
}

function updateRecord(req, res){
    Product.findOneAndUpdate(
        {_id: req.body._id},
        {name: req.body.productName,
         price: req.body.productPrice,
         description: req.body.productDescription},
        {new: true},
        (err, doc) => {
            if(!err){
                res.redirect('products/list');
            }
            else{
                console.log('Error Updating Record: '+err);
            }
        }
    );
}

router.get('/list', (req, res) => {
    Product.find((err, docs) => {
        if(!err){
            res.render('products/list' , {
                list: docs
            });
        }
        else{
            console.log('Error in Retrieving products List :'+err);
        }
    });
});

router.get('/delete/:id', (req, res) => {
    Product.findByIdAndRemove(req.params.id, (err, doc) => {
        if(!err){
            res.redirect('/products/list');
        }
        else{
            console.log('Error in Deleting the product: '+err);
        }
    });
});

router.get('/:id', (req, res) => {
    Product.findById(req.params.id, (err, doc) => {
        if(!err){
            res.render("products/addOrUpdate", {
                viewTitle: "Update Product",
                products: doc
            });
        }
    });
});

module.exports = router;
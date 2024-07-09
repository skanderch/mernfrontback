// 1 require express
const express = require("express");
const {
	addProduct,
	getProducts,
	getOneProduct,
	deleteProduct,
	editProduct,
} = require("../controlles/product");
const isAuth = require("../middleware/isAuth");

// create router
const router = express.Router();

// test
router.get("/test", (req, res) => {
	res.send("hello product");
});

// add product
router.post("/add", isAuth, addProduct);
// gel all product
router.get("/getall", getProducts);
// get one product
router.get("/:id", getOneProduct);

// delete product
router.delete("/:_id", deleteProduct);

// edit product
router.put("/:_id", editProduct);

// export
module.exports = router;

const express = require("express");
var router = require("express-promise-router")();

const CustomersController = require("../controllers/customers");
const {validteParam,schemas,validteBody} = require("./helper")


router
  .route("/")
  .get(CustomersController.index)
  .post(validteBody(schemas.customSchema),CustomersController.newCustomer);


router
  .route("/:customerId")
  .get(validteParam(schemas.idSchema,'customerId'),CustomersController.getCustomer)
  .put([validteParam(schemas.idSchema,'customerId'),validteBody(schemas.customSchema)],CustomersController.replaceCustomer)
  .patch([validteParam(schemas.idSchema,'customerId'),validteBody(schemas.customOptionalSchema)],CustomersController.updateCustomer)
  .delete(validteParam(schemas.idSchema,'customerId'),CustomersController.deleteCustomer)


module.exports = router;

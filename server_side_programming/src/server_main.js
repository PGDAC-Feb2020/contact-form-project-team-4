const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const dbAddFun = require("./server_add");

const dbReadFun = require("./server_read");

const dbUpdateFun = require("./server_update");

const dbDeleteFun = require("./server_delete");

const dbAuthFun = require("./server_auth");

const dbContactFun = require("./server_contact");

const dbForgotFun = require("./server_forgot");

//const { try } = require("bluebird");

/*
app.get("/showrecords", async (req, res) => {

  try {

    const input = req.query;

    const recvReadData = await dbReadFun.dbReadFun(input);

    res.json(recvReadData);
  }
  catch (err) {

    res.json({ message : "connection failed." });
  }

});
*/

app.post("/adduser", async (req, res) => {

  try {

    const input = req.body;

    const recvAddData = await dbAddFun.dbAddFun(input);

    res.json(recvAddData);

  } catch (err) {

    res.json({ message : "server connection failed." });
  }

});

app.post("/showrecords", async (req, res) => {

  try {

    const input = req.body;

    const recvReadData = await dbReadFun.dbReadFun(input);

    res.json(recvReadData);
  }
  catch (err) {

    res.json({ message : "server connection failed." });
  }

});

app.post("/updaterecords", async (req, res) => {

  try {

    const input = req.body;

    const recvData = await dbUpdateFun.dbUpdateFun(input);

    res.json(recvData);
  }
  catch (err) {

    res.json({ message : "server connection failure." });
  }

});

app.post("/deleterecords", async (req, res) => {

  try {

    const input = req.body;

    const recvData = await dbDeleteFun.dbDeleteFun(input);

    res.json(recvData);
  }
  catch (err) {

    res.json({ message : "server connection failure." });
  }

});

app.post("/authuser", async (req, res) => {

  try {

    const input = req.body;

    const recvData = await dbAuthFun.dbAuthFun(input);

    res.json(recvData);
  }
  catch (err) {

    res.json({ message : "server connection failure." });
  }

});

app.post("/contactus", async (req, res) => {

  try {

    const input = req.body;

    const recvData = await dbContactFun.dbContactFun(input);

    res.json(recvData);
  }
  catch (err) {

    res.json({ message : "server connection failure." });
  }

});

app.post("/forgotpassword", async (req, res) => {

  try {

    const input = req.body;

    const recvData = await dbForgotFun.dbForgotFun(input);

    res.json(recvData);
  }
  catch (err) {

    res.json({ message : "server connection failure." });
  }

});

app.listen(3000);
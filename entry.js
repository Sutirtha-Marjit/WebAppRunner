const Application = require('./util/application');
const MasterService = require('./util/service');
const express = require("express");
const fileUpload = require('express-fileupload');
const bodyParser = require("body-parser");
const app = express();
const port = 9090;
Application(express,app,port,bodyParser,MasterService,fileUpload);





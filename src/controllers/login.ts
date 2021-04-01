import {Controller} from "@overnightjs/core";
import {NextFunction, Request, Response} from "express";
import debug = require('debug');

export function middle(req:Request, res:Response, next:NextFunction) {
    let log = debug("api.login");
    //as cores estão aqui https://jonasjacek.github.io/colors/
    log.color="51";
    log({}, 'Requisição em ' +new Date().toISOString());








    next();
    /*res.send('regular');*/

}
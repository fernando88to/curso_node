// tem que ser o primeiro se não, não funciona
import './util/module-alias';
import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import { ForecastController } from '@src/controllers/forecast';
import { Application } from 'express';

export class SetupServer extends Server {
  constructor(private port = 3000) {
    super();
  }

  public init(): void {
    this.setupExpress();
  }

  private setupExpress(): void {
    this.app.use(bodyParser.json());
    this.setupController();
  }

  private setupController(): void {
    const forecastController = new ForecastController();
    this.addControllers([forecastController]);
  }

  public getApp(): Application {
    return this.app;
  }

  public start(): void {
    this.app.listen(this.port, () => {
      console.log("iniciou servidor2");
      //Logger.Imp('Server listening on port: ' + port);
    })
  }
}

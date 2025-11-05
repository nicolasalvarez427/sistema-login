import { bootstrapApplication, type BootstrapContext } from '@angular/platform-browser';
import { App } from './app/app'; // <-- El tutorial usa 'App' (tu archivo se llama 'app')
import { config } from './app/app.config.server';

const bootstrap = (context?: BootstrapContext) => bootstrapApplication(App, config, context);

export default bootstrap;
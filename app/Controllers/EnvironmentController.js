import fs from 'node:fs/promises';
import path from 'node:path';
import CONSTANTS from '../../bootstrap/config.js';

export default async function EnvironmentController(request, response) {


    /** TF 10 - Codar aqui */

import fs from 'node:fs/promises';
import path from 'node:path';
import CONSTANTS from '../../bootstrap/config.js';

export default async function EnvironmentController(request, response) {

    const isDocker = process.env.IS_DOCKER === 'true';

    const environment = isDocker ? 'docker' : 'local';

    const data = {
        environment,
        database: {
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT)
        },
        web: {
            host: isDocker ? 'nodeweb_host' : 'localhost',
            port: isDocker ? 8080 : Number(process.env.NODE_WEB_PORT)
        }
    };

    return response.json(data);
}

}

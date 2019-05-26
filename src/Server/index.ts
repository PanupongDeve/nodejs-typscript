import ServerInterface from '../interfaces/ServerInterface';
import ServerMongo from './ServerMongo';
import ServerMysql from './ServerMysql';

import {
    selectedServer,
    SelectServer
} from '../config';

export let server: ServerInterface;

switch (selectedServer) {
    case SelectServer.mongo:
        server = new ServerMongo();
        break;
    case SelectServer.mysql:
        server = new ServerMysql();
        break;
    default:
        break;
}

export class ServerConfig {
    static port: number = 3000 || Number(process.env.PORT);
}

export class MongDbServiceConfig {
    static auth_url = 'mongodb://panupongdeve:test1234@ds058369.mlab.com:58369/typescript-demo';
}


export enum SelectServer {
    mongo = 'mongo',
    mysql = 'mysql',
}

export const selectedServer: SelectServer = SelectServer.mysql;

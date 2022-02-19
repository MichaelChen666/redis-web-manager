import axios from "axios";
export interface Connection {
  id: string,
  name: string,
  host: string,
  port: number,
  username: string,
  auth: string,
  keysPattern: string,
  namespaceSeparator: string,
  timeoutConnect: number,
  timeoutExecute: number,
  dbScanLimit: number,
  dataScanLimit: number,
  tls: {
    enable: boolean
    cert?: string
    key?: string
    ca?: string
  }
}

export interface Command {
  id: string,
  commands: Array<any>
}

export const getConnections = (): Promise<any> => {
  return axios.get('/redisui/connections').then(ret => ret.data);
}

export const testConnection = (connection: Connection): Promise<any> => {
  return axios.post('/redisui/connection/test', connection)
    .then(ret => ret.data)
    .catch(err => {
      throw new Error(err?.response?.data);
    });
}

export const saveConnection = (connection: Connection): Promise<Connection> => {
  return axios.post('/redisui/connection', connection)
    .then(ret => ret.data)
    .catch(err => {
      throw new Error(err?.response?.data);
    });
}

export const deleteConnection = (id: string): Promise<any> => {
  return axios.delete(`/redisui/connection/${id}`)
    .then(ret => ret.data)
    .catch(err => {
      throw new Error(err?.response?.data);
    });
}

export const openConnection = (id: string): Promise<{ database: Array<any>, info: string }> => {
  return axios.post(`/redisui/connection/${id}/open`)
    .then(ret => ret.data)
    .catch(err => {
      throw new Error(err?.response?.data);
    });
}

export const disconnectionConnection = (id: string): Promise<any> => {
  return axios.post(`/redisui/connection/${id}/disconnection`)
    .then(ret => ret.data)
    .catch(err => {
      throw new Error(err?.response?.data);
    });
}

export const copyConnection = (connection: Connection): Promise<Connection> => {
  return axios.post(`/redisui/connection/copy`, connection)
    .then(ret => ret.data)
    .catch(err => {
      throw new Error(err?.response?.data);
    });
}

export const executeCommand = <T>(command: Command): Promise<T> => {
  return axios.post('/redisui/connection/command', command)
    .then(ret => ret.data)
    .catch(err => {
      throw new Error(err?.response?.data || 'The service cannot be accessed, please check the network and service');
    });
}
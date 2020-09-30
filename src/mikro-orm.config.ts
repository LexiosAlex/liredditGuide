import {MikroORM} from "@mikro-orm/core";
import path from "path";

import {Post} from "./enteties/Post";
import {User} from "./enteties/User";

import {__prod__} from "./constants";

export default {
  dbName: "lireddit",
  password: "12345",
  migrations: {
    path: path.join(__dirname, './migrations'),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post, User],
  type: "postgresql",
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
import { MikroORM } from "@mikro-orm/core";

const main = async () => {
  const orm = await MikroORM.init({
    dbName: "lireddit",
    user: "",
    password: "12345"
  });
};

console.log("hello world");

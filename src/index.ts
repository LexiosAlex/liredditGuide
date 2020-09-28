import { MikroORM } from "@mikro-orm/core";
import { Post } from "./enteties/Post";
import mircoConfig from "./mikro-orm.config";

console.log("123");
const main = async () => {
  const orm = await MikroORM.init(mircoConfig);
  await orm.getMigrator().up();
  // const post = orm.em.create(Post, { title: "my first post" });
  // await orm.em.persistAndFlush(post);

  // const posts = await orm.em.find(Post, {});
  // console.log(posts);
};

main().catch((err) => {
  console.error(err);
});

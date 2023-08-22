import { connectToDatabase } from "@/util/database";
import styles from "./page.module.css";
import { cookies } from "next/headers";

// const postVisit = async () => {
//   const cookiesList = cookies();
//   const visited = cookiesList.has("visited");
//   if (!visited) {
//     let { db } = await connectToDatabase();
//     await db
//       .collection("visits")
//       .updateOne({}, { $inc: { today: 1, total: 1 } })
//       .then((e) => {
//         const oneDay = 24 * 60 * 60 * 1000;
//         cookies().set("visits", "true", { expires: Date.now() - oneDay });
//       });
//   }
// };
const Home = async () => {
  // await postVisit();
  return (
    <div className={styles.main}>
      <div className={styles.text}>게시판을 가냥한 각각의 메뉴</div>
    </div>
  );
};
export default Home;

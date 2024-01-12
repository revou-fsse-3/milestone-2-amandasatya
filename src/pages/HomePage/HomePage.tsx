import RussianWar from "../../components/Images/ruins-russian-s-war-ukraine.jpg";
import { Button } from "@/components/ui/button";
const HomePage = () => {
  return (
    <>
      <div className="flex justify-center items-center pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 w-10/12">
          <div className=" col-span-2">
            <img
              src={RussianWar}
              alt=""
              className=" grayscale hover:grayscale-0 rounded-lg"
            />
          </div>
          <div>
            <div className=" flex flex-col justify-center items-center gap-2 p-10">
              <h1 className="text-3xl font-bold font-serif">Ukraine At War</h1>
              <div className="flex gap-2">
                <h2>Published At:</h2>
                <h3>Bandung, 31 February</h3>
              </div>
              <Button className="hover:bg-red-400">Story</Button>
            </div>
            <h1 className="mx-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              consequuntur et laborum quae, aspernatur iure, nesciunt vel
              eveniet quod odio similique sed impedit beatae incidunt
              dignissimos. Dolorem modi facere aperiam sequi nobis, nam at
              placeat ullam? Nobis, cumque. Beatae tempora quia nihil illo
              reiciendis blanditiis inventore? Soluta adipisci eum odio?
            </h1>
            <div className="pt-2">
              <div className="flex gap-2 mx-10">
                <h2 className=" font-extrabold">Author : </h2>
                <h2>Amanda Satya</h2>
              </div>
              <h2></h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;

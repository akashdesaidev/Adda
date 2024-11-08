import Benifits from "./_comp/Benifits";
import Header from "./_comp/Header";
import HeaderImage from "./_comp/HeaderImage";
import Ourpartner from "./_comp/Ourpartner";
import StatItem from "./_comp/StatItem";

export default function Home() {
  return (
    <>
      <Header />
      <StatItem />
      <div className="flex flex-row justify-end sm:hidden">
        <div className="w-full aspect-square">
          <HeaderImage />
        </div>
      </div>
      <Benifits />
      <Ourpartner />
<<<<<<< HEAD
=======
      <Benifits />
>>>>>>> 9f7785b38c8ffccb2419e1b7621e960cd48aa7b6
    </>
  );
}

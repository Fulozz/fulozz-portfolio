import Navbar from "@/components/Navbar";
import HomeView from "../../pages/HomeView";


export default function Page({ params: {lng} }) {
  return (
    <div className="">
      <Navbar />
      <HomeView />
    </div>
  );
}

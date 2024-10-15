import Navbar from "./components/Navbar/Navbar";

import { useTranslation } from "../i18n";

export default function Page({ params: {lng} }) {

  return (
    <div className="">
      <Navbar lng={lng}  />
      
      

    </div>
  );
}

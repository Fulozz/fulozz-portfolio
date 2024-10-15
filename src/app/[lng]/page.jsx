import Navbar from "@/components/Navbar";
import HomeView from "../../pages/HomeView";
import { useTranslation } from "../i18n";

export default async function Page({ params: {lng} }) {
  const { t } = await useTranslation(lng);
  return (
    <div className="">
      <Navbar />
      {/* <HomeView /> */}
      <h1>{t('title')} </h1>
    </div>
  );
}

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import IconController from "./components/IconController";
import BackgroundController from "./components/BackgroundController";
import LogoPlayground from "./components/LogoPlayground";
import { UpdateStorageContext } from "./context/UpdateStorageContext";
import { Heart } from "lucide-react";

const Home = () => {
  const [selectedIndex, setSelectedIndex] = useState();
  const [updateStorage, setUpdateStorage] = useState({});
  const [downloadIcon, setDownloadIcon] = useState();
  return (
    <UpdateStorageContext.Provider value={{ updateStorage, setUpdateStorage }}>
      <div>
        <Header DownloadIcon={setDownloadIcon} />
        <div className="fixed w-64">
          <SideNav selectedIndex={(e) => setSelectedIndex(e)} />
        </div>
        <div className="fixed grid grid-cols-1 ml-64 md:grid-cols-6">
          <div className="h-screen col-span-2 p-5 overflow-auto border shadow-sm">
            {selectedIndex == 0 ? <IconController /> : <BackgroundController />}
          </div>
          <div className="col-span-3 ">
            <LogoPlayground downloadIcon={downloadIcon} />
          </div>
          <div className="flex flex-col h-screen border shadow-md">
            <Button className="mt-5">Reset</Button>
            <Button className="mt-4">Import</Button>
            <Button className="mt-4">Export</Button>
            <Button className="mt-4">Share</Button>
            <h2 className="flex flex-wrap justify-center inline mt-5 font-bold">
              Build with{" "}
              <Heart className="w-4 h-4 text-red-500 ext-center" />{" "}
              By{" "}
              <a className="text-[#008cff]" href="https://github.com/HamzaZaidiX">
                Hamza Zaidi
              </a>
            </h2>
          </div>
        </div>
      </div>
    </UpdateStorageContext.Provider>
  );
};

export default Home;

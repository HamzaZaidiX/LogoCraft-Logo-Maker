import { Button } from "./ui/button";
import { Download } from "lucide-react";

const Header = ({ DownloadIcon }) => {
  return (
    <div className="flex items-center justify-between pr-5 border shadow-md">
      <a href="/"><img src="/logo.svg" alt="logo" /></a>
      <Button
        className="flex items-center gap-2"
        onClick={() => DownloadIcon(Date.now())}
      >
        <Download className="w-4 h-4 animate-bounce" /> Download
      </Button>
    </div>
  );
};

export default Header;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import InstitutionalMedia from "./pages/InstitutionalMedia";
import StrategicAdvisory from "./pages/StrategicAdvisory";
import Insights from "./pages/Insights";
import CrisisContact from "./pages/CrisisContact";
import NotFound from "./pages/NotFound";
import IndexV1 from "./pages/variants/IndexV1";
import IndexV2 from "./pages/variants/IndexV2";
import IndexV3 from "./pages/variants/IndexV3";
import IndexV4 from "./pages/variants/IndexV4";
import IndexV5 from "./pages/variants/IndexV5";
import IndexV6 from "./pages/variants/IndexV6";
import IndexV7 from "./pages/variants/IndexV7";
import IndexV8 from "./pages/variants/IndexV8";
import IndexV9 from "./pages/variants/IndexV9";
import IndexV10 from "./pages/variants/IndexV10";
import IndexV11 from "./pages/variants/IndexV11";
import IndexV12 from "./pages/variants/IndexV12";
import IndexV13 from "./pages/variants/IndexV13";
import IndexV14 from "./pages/variants/IndexV14";
import IndexV15 from "./pages/variants/IndexV15";
import IndexV16 from "./pages/variants/IndexV16";
import IndexV17 from "./pages/variants/IndexV17";
import IndexV18 from "./pages/variants/IndexV18";
import IndexV19 from "./pages/variants/IndexV19";
import IndexV20 from "./pages/variants/IndexV20";
import IndexV21 from "./pages/variants/IndexV21";
import IndexV22 from "./pages/variants/IndexV22";
import IndexV23 from "./pages/variants/IndexV23";
import IndexV24 from "./pages/variants/IndexV24";
import IndexV25 from "./pages/variants/IndexV25";
import IndexV26 from "./pages/variants/IndexV26";
import IndexV27 from "./pages/variants/IndexV27";
import IndexV28 from "./pages/variants/IndexV28";
import IndexV29 from "./pages/variants/IndexV29";
import IndexV30 from "./pages/variants/IndexV30";
import IndexV31 from "./pages/variants/IndexV31";
import IndexV32 from "./pages/variants/IndexV32";
import IndexV33 from "./pages/variants/IndexV33";
import IndexV34 from "./pages/variants/IndexV34";
import IndexV35 from "./pages/variants/IndexV35";
import IndexV36 from "./pages/variants/IndexV36";
import IndexV37 from "./pages/variants/IndexV37";
import IndexV38 from "./pages/variants/IndexV38";
import IndexV39 from "./pages/variants/IndexV39";
import IndexV40 from "./pages/variants/IndexV40";
import IndexV41 from "./pages/variants/IndexV41";
import IndexV42 from "./pages/variants/IndexV42";
import IndexV43 from "./pages/variants/IndexV43";
import IndexV44 from "./pages/variants/IndexV44";
import IndexV45 from "./pages/variants/IndexV45";
import IndexV46 from "./pages/variants/IndexV46";
import IndexV47 from "./pages/variants/IndexV47";
import IndexV48 from "./pages/variants/IndexV48";
import IndexV49 from "./pages/variants/IndexV49";
import IndexV50 from "./pages/variants/IndexV50";
import IndexV51 from "./pages/variants/IndexV51";
import IndexV52 from "./pages/variants/IndexV52";
import IndexV53 from "./pages/variants/IndexV53";
import IndexV54 from "./pages/variants/IndexV54";
import IndexV55 from "./pages/variants/IndexV55";
import IndexV56 from "./pages/variants/IndexV56";
import IndexV57 from "./pages/variants/IndexV57";
import IndexV58 from "./pages/variants/IndexV58";
import IndexV59 from "./pages/variants/IndexV59";
import IndexV60 from "./pages/variants/IndexV60";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/institutional-media" element={<InstitutionalMedia />} />
          <Route path="/strategic-advisory" element={<StrategicAdvisory />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/crisis-contact" element={<CrisisContact />} />
          {/* Design Variants */}
          <Route path="/1" element={<IndexV1 />} />
          <Route path="/2" element={<IndexV2 />} />
          <Route path="/3" element={<IndexV3 />} />
          <Route path="/4" element={<IndexV4 />} />
          <Route path="/5" element={<IndexV5 />} />
          <Route path="/6" element={<IndexV6 />} />
          <Route path="/7" element={<IndexV7 />} />
          <Route path="/8" element={<IndexV8 />} />
          <Route path="/9" element={<IndexV9 />} />
          <Route path="/10" element={<IndexV10 />} />
          <Route path="/11" element={<IndexV11 />} />
          <Route path="/12" element={<IndexV12 />} />
          <Route path="/13" element={<IndexV13 />} />
          <Route path="/14" element={<IndexV14 />} />
          <Route path="/15" element={<IndexV15 />} />
          <Route path="/16" element={<IndexV16 />} />
          <Route path="/17" element={<IndexV17 />} />
          <Route path="/18" element={<IndexV18 />} />
          <Route path="/19" element={<IndexV19 />} />
          <Route path="/20" element={<IndexV20 />} />
          <Route path="/21" element={<IndexV21 />} />
          <Route path="/22" element={<IndexV22 />} />
          <Route path="/23" element={<IndexV23 />} />
          <Route path="/24" element={<IndexV24 />} />
          <Route path="/25" element={<IndexV25 />} />
          <Route path="/26" element={<IndexV26 />} />
          <Route path="/27" element={<IndexV27 />} />
          <Route path="/28" element={<IndexV28 />} />
          <Route path="/29" element={<IndexV29 />} />
          <Route path="/30" element={<IndexV30 />} />
          <Route path="/31" element={<IndexV31 />} />
          <Route path="/32" element={<IndexV32 />} />
          <Route path="/33" element={<IndexV33 />} />
          <Route path="/34" element={<IndexV34 />} />
          <Route path="/35" element={<IndexV35 />} />
          <Route path="/36" element={<IndexV36 />} />
          <Route path="/37" element={<IndexV37 />} />
          <Route path="/38" element={<IndexV38 />} />
          <Route path="/39" element={<IndexV39 />} />
          <Route path="/40" element={<IndexV40 />} />
          <Route path="/41" element={<IndexV41 />} />
          <Route path="/42" element={<IndexV42 />} />
          <Route path="/43" element={<IndexV43 />} />
          <Route path="/44" element={<IndexV44 />} />
          <Route path="/45" element={<IndexV45 />} />
          <Route path="/46" element={<IndexV46 />} />
          <Route path="/47" element={<IndexV47 />} />
          <Route path="/48" element={<IndexV48 />} />
          <Route path="/49" element={<IndexV49 />} />
          <Route path="/50" element={<IndexV50 />} />
          <Route path="/51" element={<IndexV51 />} />
          <Route path="/52" element={<IndexV52 />} />
          <Route path="/53" element={<IndexV53 />} />
          <Route path="/54" element={<IndexV54 />} />
          <Route path="/55" element={<IndexV55 />} />
          <Route path="/56" element={<IndexV56 />} />
          <Route path="/57" element={<IndexV57 />} />
          <Route path="/58" element={<IndexV58 />} />
          <Route path="/59" element={<IndexV59 />} />
          <Route path="/60" element={<IndexV60 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

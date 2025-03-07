import DescCard from "../DescCard";
import { ProjectSelector } from "./ProjectSelector";
import img from "@/assets/news-14.jpg";

export default function DonatePage() {
  return (
    <div className="mt-40">
      <DescCard title="DONATE" breadcrumb="DONATE" backgroundImage={img} />

      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-gray-900">Community Development Projects</h1>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          <ProjectSelector />
        </main>
      </div>
    </div>
  );
}

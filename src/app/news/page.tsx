
import { TabSwitcher } from "../../components/ui/TabSwitcher";
import LatestNews from "../../components/news/LatestNews";
import Annoucements from "../../components/news/Annoucements";
import PageLayout from "../../components/custom-components/PageLayout";
const Settings = () => (
  <div className="text-bold text-2xl">
    ⚙️ Archive Contents here , its under developement
  </div>
);

export default function DashboardPage() {
  const tabs = [
    { title: "Latest News -2025", content: <LatestNews /> },
    { title: "Archive News", content: <Settings /> },
    { title: "Annoucement", content: <Annoucements /> },
  ];

  return (
    <PageLayout title="News Dashboard">
      <div className="m-full m-20 pr-20">
      <h1 className="text-3xl font-bold mb-6">News Dashboard</h1>
      <TabSwitcher tabs={tabs} />
      </div>
    </PageLayout>
  );
}

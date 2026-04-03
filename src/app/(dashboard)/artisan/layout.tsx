import AppSidebar from '@/components/dashboard/layout/app-sidebar';
import TopNavbar from '@/components/dashboard/layout/top-navbar';
import BottomNavbar from '@/components/dashboard/layout/bottom-navbar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-900 font-sans antialiased">
      {/* Sidebar - Desktop Only */}
      <AppSidebar />

      {/* Main Content Area */}
      <div className="lg:pl-64 flex flex-col min-h-screen">
        <TopNavbar />
        <main className="flex-1 pb-32 lg:pb-0">
          <div className="p-4 md:p-6 lg:p-10 max-w-[1600px] mx-auto space-y-6 md:space-y-8">
            {children}
          </div>
        </main>
      </div>

      {/* Mobile Navigation */}
      <BottomNavbar />
    </div>
  );
}

"use client";
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

function DashboardLayoutContent({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const role = searchParams.get('role') || 'employee';

  return (
    <div className={`flex h-screen ${role === 'admin' ? 'dark bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
      <aside className="w-64 border-r border-slate-200 dark:border-slate-800 p-5 shrink-0 flex flex-col gap-4 bg-white dark:bg-slate-950">
        <h2 className="text-2xl font-black tracking-tight tracking-tighter">AssetLink</h2>
        <div className="text-sm rounded-md bg-indigo-100 dark:bg-indigo-900/40 text-indigo-800 dark:text-indigo-300 p-3 font-semibold mt-2">
          Logged in as: {role.toUpperCase()}
        </div>
        <nav className="flex flex-col gap-2 flex-1 mt-6">
          <Link href={`/dashboard?role=${role}`}><Button variant="ghost" className="w-full justify-start text-left font-medium">🏠 My Portal</Button></Link>
          
          {/* FRONTEND RBAC: INVISIBLE DOORS */}
          {/* If an Employee logs in, these crucial elements are erased from the UI entirely */}
          {role === 'admin' && (
            <>
              <Link href={`/dashboard/inventory?role=${role}`}><Button variant="ghost" className="w-full justify-start text-left font-medium">📦 Manage Inventory</Button></Link>
              <Link href={`/dashboard/users?role=${role}`}><Button variant="ghost" className="w-full justify-start text-left font-medium">👥 All Users</Button></Link>
              <Link href={`/dashboard/assignments?role=${role}`}><Button variant="ghost" className="w-full justify-start text-left font-medium">📝 Access Logs</Button></Link>
            </>
          )}
          
        </nav>
      </aside>
      <main className="flex-1 p-10 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div className="p-8">Loading layout...</div>}>
      <DashboardLayoutContent>{children}</DashboardLayoutContent>
    </Suspense>
  );
}

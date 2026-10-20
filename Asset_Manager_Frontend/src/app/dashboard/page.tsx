"use client";
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';

function DashboardContent() {
  const searchParams = useSearchParams();
  const role = searchParams.get('role') || 'employee';

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight">Welcome back, {role === 'admin' ? 'Aalishan' : 'Ben'}!</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg">
          {role === 'admin' ? 'Here is a quick overview of global company assets.' : 'Here is the equipment currently assigned to you.'}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mt-8">
        <Card className="dark:border-slate-800 dark:bg-slate-900 border-slate-200 shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Total Assets</CardTitle>
          </CardHeader>
          <CardContent><div className="text-4xl font-black">{role === 'admin' ? '1,420' : '2'}</div></CardContent>
        </Card>
        <Card className="dark:border-slate-800 dark:bg-slate-900 border-slate-200 shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Needs Repair</CardTitle>
          </CardHeader>
          <CardContent><div className="text-4xl font-black text-rose-600 dark:text-rose-400">{role === 'admin' ? '41' : '0'}</div></CardContent>
        </Card>
      </div>
      
      <h2 className="text-xl font-bold tracking-tight mt-12 mb-4">{role === 'admin' ? 'Recent Assignments Audit' : 'My Gear'}</h2>
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 overflow-hidden shadow-sm">
        <Table>
          <TableHeader className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
             <TableRow className="hover:bg-transparent">
              <TableHead className="font-semibold text-slate-900 dark:text-white">Item</TableHead>
              <TableHead className="font-semibold text-slate-900 dark:text-white">Serial/Tag</TableHead>
              {role === 'admin' && <TableHead className="font-semibold text-slate-900 dark:text-white">Assignee</TableHead>}
              <TableHead className="text-right font-semibold text-slate-900 dark:text-white">Status</TableHead>
             </TableRow>
          </TableHeader>
          <TableBody>
             <TableRow>
              <TableCell className="font-medium px-4 py-4">MacBook Pro 16" M3 Max</TableCell>
              <TableCell className="text-slate-500 dark:text-slate-400">AAPL-994</TableCell>
              {role === 'admin' && <TableCell>Ben <span className="text-slate-400 ml-1 text-xs">(Engineering)</span></TableCell>}
              <TableCell className="text-right"><span className="text-xs font-semibold px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">Active Check-Out</span></TableCell>
             </TableRow>
             <TableRow>
              <TableCell className="font-medium px-4 py-4">Dell Ultrasharp 27" Monitor</TableCell>
              <TableCell className="text-slate-500 dark:text-slate-400">DELL-112</TableCell>
              {role === 'admin' && <TableCell>Ben <span className="text-slate-400 ml-1 text-xs">(Engineering)</span></TableCell>}
              <TableCell className="text-right"><span className="text-xs font-semibold px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">Active Check-Out</span></TableCell>
             </TableRow>
             {role === 'admin' && (
              <TableRow>
               <TableCell className="font-medium px-4 py-4">Herman Miller Aeron Chair</TableCell>
               <TableCell className="text-slate-500 dark:text-slate-400">FURN-8a2</TableCell>
               <TableCell>Alice <span className="text-slate-400 ml-1 text-xs">(HR)</span></TableCell>
               <TableCell className="text-right"><span className="text-xs font-semibold px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">Active Check-Out</span></TableCell>
              </TableRow>
             )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<div className="p-8">Loading dashboard...</div>}>
      <DashboardContent />
    </Suspense>
  );
}

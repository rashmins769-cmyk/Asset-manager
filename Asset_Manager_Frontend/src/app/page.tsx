import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-slate-50 text-slate-900">
      <div className="flex flex-col items-center gap-6 max-w-sm text-center">
        <h1 className="text-5xl font-black tracking-tighter text-indigo-600">AssetLink</h1>
        <p className="text-slate-500 font-medium px-4 leading-relaxed">To test the RBAC Security Vault features, please choose a role to log in as.</p>
        <div className="flex flex-col w-full gap-4 mt-4 px-6 w-full max-w-[320px]">
          <Link href="/dashboard?role=admin" prefetch={false} className="w-full">
            <Button size="lg" className="w-full shadow-lg hover:shadow-xl transition-all">Login as Admin</Button>
          </Link>
          <Link href="/dashboard?role=employee" prefetch={false} className="w-full">
            <Button size="lg" variant="outline" className="w-full bg-white font-semibold">Login as Standard Employee</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

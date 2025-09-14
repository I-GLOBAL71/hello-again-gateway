'use client';

import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import { useAuth } from '@/contexts/AuthContext';
import { getAdminConfig } from '@/ai/flows/admin-config';
import type { AdminConfig } from '@/lib/types';
import { useEffect, useState } from 'react';
import { Auth } from '@/components/auth/Auth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield } from 'lucide-react';
import Link from 'next/link';

export default function AdminLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  const { user, loading } = useAuth();
  const [dictionary, setDictionary] = useState<any>(null);
  const [adminConfig, setAdminConfig] = useState<AdminConfig | null>(null);
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    async function fetchData() {
      const dict = await getDictionary(lang);
      setDictionary(dict);
      
      try {
        const config = await getAdminConfig();
        setAdminConfig(config);
      } catch (error) {
        console.error("Failed to load admin config:", error);
      }
    }
    fetchData();
  }, [lang]);

  useEffect(() => {
    if (!loading && adminConfig) {
      if (user && user.email === adminConfig.superAdminEmail) {
        setIsAuthorized(true);
      } else {
        setIsAuthorized(false);
      }
    }
  }, [user, loading, adminConfig]);

  if (loading || isAuthorized === null || !dictionary) {
    return (
      <div className="min-h-screen bg-muted/30 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-muted/30 flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center">
            <CardHeader>
                <CardTitle className="flex items-center justify-center gap-2">
                    <Shield className="text-destructive" />
                    Access Denied
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <p>You are not authorized to view this page. Please sign in with an administrator account.</p>
                <Auth dictionary={dictionary.auth} />
                <Button variant="outline" asChild className="mt-4">
                    <Link href={`/${lang}`}>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Home
                    </Link>
                 </Button>
            </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30">
        <header className="bg-background border-b">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                 <h1 className="text-xl font-semibold font-headline">
                    {dictionary.admin.title}
                 </h1>
                 <div className="flex items-center gap-4">
                    <Auth dictionary={dictionary.auth} />
                    <Button variant="outline" asChild>
                        <Link href={`/${lang}`}>
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            {dictionary.admin.backToHome}
                        </Link>
                    </Button>
                 </div>
            </div>
        </header>
        <main className="container mx-auto px-4 py-8">
            {children}
        </main>
    </div>
  );
}


'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { getAdminConfig, updateAdminConfig } from '@/ai/flows/admin-config';
import type { AdminConfig } from '@/lib/types';
import { useAuth } from '@/contexts/AuthContext';
import { Auth } from '@/components/auth/Auth';
import { ArrowLeft, Shield } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';


export default function AdminPage({ params }: { params: { lang: Locale } }) {
    const [config, setConfig] = useState<AdminConfig | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const { toast } = useToast();
    const { user, loading: authLoading } = useAuth();
    const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
    const pathname = usePathname();
    const lang = pathname.split('/')[1] as Locale;
    const [dictionary, setDictionary] = useState<any>(null);


     useEffect(() => {
        const fetchDictionary = async () => {
            const dict = await getDictionary(lang);
            setDictionary(dict);
        };
        fetchDictionary();
    }, [lang]);

    useEffect(() => {
        const fetchConfig = async () => {
            setIsLoading(true);
            try {
                const fetchedConfig = await getAdminConfig();
                setConfig(fetchedConfig);
            } catch (error) {
                toast({
                    variant: 'destructive',
                    title: "Error",
                    description: "Failed to load configuration.",
                });
            } finally {
                setIsLoading(false);
            }
        };
        fetchConfig();
    }, [toast]);

    useEffect(() => {
        if (!authLoading && config) {
            if (user && user.email === config.superAdminEmail) {
                setIsAuthorized(true);
            } else {
                setIsAuthorized(false);
            }
        }
    }, [user, authLoading, config]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!config) return;
        const { name, value } = e.target;
        setConfig(prev => ({ ...prev!, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!config) return;

        try {
            await updateAdminConfig(config);
            toast({
                title: "Success!",
                description: "Configuration saved successfully.",
            });
        } catch (error) {
             toast({
                variant: 'destructive',
                title: "Error",
                description: "Failed to save configuration.",
            });
        }
    };
    
    const pageIsLoading = isLoading || authLoading || isAuthorized === null || !dictionary;

    if (pageIsLoading) {
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

    const adminDictionary = dictionary.admin;

    return (
        <div className="min-h-screen bg-muted/30">
            <header className="bg-background border-b">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <h1 className="text-xl font-semibold font-headline">
                    {adminDictionary.title}
                </h1>
                <div className="flex items-center gap-4">
                    <Auth dictionary={dictionary.auth} />
                    <Button variant="outline" asChild>
                    <Link href={`/${lang}`}>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        {adminDictionary.backToHome}
                    </Link>
                    </Button>
                </div>
                </div>
            </header>
            <main className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <p className="mb-8 text-muted-foreground">{adminDictionary.subtitle}</p>
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>{adminDictionary.superAdminTitle}</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="superAdminEmail">{adminDictionary.superAdminEmail}</Label>
                                    <Input
                                        id="superAdminEmail"
                                        name="superAdminEmail"
                                        type="email"
                                        value={config?.superAdminEmail || ''}
                                        onChange={handleChange}
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>{adminDictionary.pricingTitle}</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="downloadPrice">{adminDictionary.downloadPrice}</Label>
                                    <Input
                                        id="downloadPrice"
                                        name="downloadPrice"
                                        type="number"
                                        step="0.01"
                                        value={config?.downloadPrice || ''}
                                        onChange={handleChange}
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>{adminDictionary.lygosTitle}</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="lygosApiKey">{adminDictionary.lygosApiKey}</Label>
                                    <Input
                                        id="lygosApiKey"
                                        name="lygosApiKey"
                                        type="password"
                                        value={config?.lygosApiKey || ''}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lygosSecretKey">{adminDictionary.lygosSecretKey}</Label>
                                    <Input
                                        id="lygosSecretKey"
                                        name="lygosSecretKey"
                                        type="password"
                                        value={config?.lygosSecretKey || ''}
                                        onChange={handleChange}
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>{adminDictionary.coolpayTitle}</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="coolpayMerchantId">{adminDictionary.coolpayMerchantId}</Label>
                                    <Input
                                        id="coolpayMerchantId"
                                        name="coolpayMerchantId"
                                        value={config?.coolpayMerchantId || ''}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="coolpayApiKey">{adminDictionary.coolpayApiKey}</Label>
                                    <Input
                                        id="coolpayApiKey"
                                        name="coolpayApiKey"
                                        type="password"
                                        value={config?.coolpayApiKey || ''}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="coolpaySecretKey">{adminDictionary.coolpaySecretKey}</Label>
                                    <Input
                                        id="coolpaySecretKey"
                                        name="coolpaySecretKey"
                                        type="password"
                                        value={config?.coolpaySecretKey || ''}
                                        onChange={handleChange}
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        <div className="flex justify-end">
                            <Button type="submit">{adminDictionary.saveButton}</Button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}

    
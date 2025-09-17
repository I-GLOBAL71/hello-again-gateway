'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { updateAdminConfig, getAdminConfig } from '@/app/actions';
import type { AdminConfig } from '@/lib/types';
import { ArrowLeft, Shield, LogIn } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Locale } from '@/i18n-config';

type AdminPageContentProps = {
    dictionary: any;
    initialConfig: AdminConfig;
};

// This function would ideally be a server action to securely check credentials
const verifyCredentials = async (password: string): Promise<boolean> => {
    // In a real app, this would be a secure check against hashed passwords or an auth service.
    // For this example, we use a simple environment variable check.
    // This is a placeholder for a more secure verification method.
    // NOTE: This is a simplified example. In a real-world scenario,
    // you would use a proper authentication library and server-side validation.
    // The password should be stored as an environment variable on the server.
    const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "admin";
    return password === adminPassword;
};


export default function AdminPageContent({ dictionary, initialConfig }: AdminPageContentProps) {
    const [config, setConfig] = useState<AdminConfig>(initialConfig);
    const [isSaving, setIsSaving] = useState(false);
    const { toast } = useToast();
    const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
    const [password, setPassword] = useState('');
    const [authError, setAuthError] = useState('');
    const [isCheckingAuth, setIsCheckingAuth] = useState(false);

    const pathname = usePathname();
    const lang = pathname.split('/')[1] as Locale;
    
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsCheckingAuth(true);
        setAuthError('');
        const isValid = await verifyCredentials(password);
        if (isValid) {
            setIsAuthorized(true);
            sessionStorage.setItem('isAdminAuthenticated', 'true');
        } else {
            setAuthError('Invalid password. Please try again.');
        }
        setIsCheckingAuth(false);
    };

    useEffect(() => {
        // Check session storage to maintain authenticated state during the session
        const sessionAuth = sessionStorage.getItem('isAdminAuthenticated');
        if (sessionAuth === 'true') {
            setIsAuthorized(true);
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setConfig(prev => ({ ...prev!, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!config) return;
        setIsSaving(true);
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
        } finally {
            setIsSaving(false);
        }
    };
    
    if (!isAuthorized) {
        return (
          <div className="min-h-screen bg-muted/30 flex items-center justify-center p-4">
            <Card className="w-full max-w-sm">
              <CardHeader>
                <CardTitle className="flex items-center justify-center gap-2">
                  <Shield className="text-primary" />
                  Admin Access
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter admin password"
                    />
                  </div>
                  {authError && <p className="text-sm text-destructive">{authError}</p>}
                  <Button type="submit" className="w-full" disabled={isCheckingAuth}>
                    <LogIn className="mr-2 h-4 w-4" />
                    {isCheckingAuth ? 'Verifying...' : 'Login'}
                  </Button>
                </form>
                 <Button variant="outline" asChild className="mt-4 w-full">
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
                                        placeholder="This field is no longer used for login"
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
                            <Button type="submit" disabled={isSaving}>
                                {isSaving ? 'Saving...' : adminDictionary.saveButton}
                            </Button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}

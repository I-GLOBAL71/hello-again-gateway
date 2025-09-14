'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Locale } from '@/i18n-config';

// As we can't get the dictionary on the client side in a server component,
// we'll just use a trick to pass the dictionary to the client component.
// This is not ideal, but it's a workaround.
const AdminPageContent = ({ dictionary }: { dictionary: any }) => {
    const [config, setConfig] = useState({
        lygosApiKey: '',
        lygosSecretKey: '',
        coolpayMerchantId: '',
        coolpayApiKey: '',
        coolpaySecretKey: '',
    });
    const { toast } = useToast();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setConfig(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real application, you would send this to a secure backend endpoint
        // to update the environment variables or a database.
        console.log('Saving configuration:', config);
        toast({
            title: dictionary.saveSuccess,
        });
    };
    
    return (
         <div className="max-w-4xl mx-auto">
            <p className="mb-8 text-muted-foreground">{dictionary.subtitle}</p>
            <form onSubmit={handleSubmit} className="space-y-8">
                <Card>
                    <CardHeader>
                        <CardTitle>{dictionary.lygosTitle}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="lygosApiKey">{dictionary.lygosApiKey}</Label>
                            <Input
                                id="lygosApiKey"
                                name="lygosApiKey"
                                type="password"
                                value={config.lygosApiKey}
                                onChange={handleChange}
                            />
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="lygosSecretKey">{dictionary.lygosSecretKey}</Label>
                            <Input
                                id="lygosSecretKey"
                                name="lygosSecretKey"
                                type="password"
                                value={config.lygosSecretKey}
                                onChange={handleChange}
                            />
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>{dictionary.coolpayTitle}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="coolpayMerchantId">{dictionary.coolpayMerchantId}</Label>
                            <Input
                                id="coolpayMerchantId"
                                name="coolpayMerchantId"
                                value={config.coolpayMerchantId}
                                onChange={handleChange}
                            />
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="coolpayApiKey">{dictionary.coolpayApiKey}</Label>
                            <Input
                                id="coolpayApiKey"
                                name="coolpayApiKey"
                                type="password"
                                value={config.coolpayApiKey}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="coolpaySecretKey">{dictionary.coolpaySecretKey}</Label>
                            <Input
                                id="coolpaySecretKey"
                                name="coolpaySecretKey"
                                type="password"
                                value={config.coolpaySecretKey}
                                onChange={handleChange}
                            />
                        </div>
                    </CardContent>
                </Card>

                <div className="flex justify-end">
                    <Button type="submit">{dictionary.saveButton}</Button>
                </div>
            </form>
        </div>
    )
}


export default async function AdminPage({ params }: { params: { lang: Locale }}) {
    const dictionary = (await import(`@/dictionaries/${params.lang}.json`)).default;
    return <AdminPageContent dictionary={dictionary.admin} />
}

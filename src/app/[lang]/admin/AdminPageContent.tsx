'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { getAdminConfig, updateAdminConfig, AdminConfig } from '@/ai/flows/admin-config';
import { Skeleton } from '@/components/ui/skeleton';


const AdminPageContent = ({ dictionary }: { dictionary: any }) => {
    const [config, setConfig] = useState<AdminConfig | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const { toast } = useToast();

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
    
    if (isLoading || !config) {
        return (
             <div className="max-w-4xl mx-auto">
                <p className="mb-8 text-muted-foreground">{dictionary.subtitle}</p>
                <div className="space-y-8">
                    <Card><CardHeader><Skeleton className="h-8 w-1/2" /></CardHeader><CardContent><Skeleton className="h-10 w-full" /></CardContent></Card>
                    <Card><CardHeader><Skeleton className="h-8 w-1/2" /></CardHeader><CardContent className="space-y-4"><Skeleton className="h-10 w-full" /><Skeleton className="h-10 w-full" /></CardContent></Card>
                    <Card><CardHeader><Skeleton className="h-8 w-1/2" /></CardHeader><CardContent className="space-y-4"><Skeleton className="h-10 w-full" /><Skeleton className="h-10 w-full" /><Skeleton className="h-10 w-full" /></CardContent></Card>
                    <div className="flex justify-end"><Skeleton className="h-10 w-32" /></div>
                </div>
            </div>
        )
    }

    return (
         <div className="max-w-4xl mx-auto">
            <p className="mb-8 text-muted-foreground">{dictionary.subtitle}</p>
            <form onSubmit={handleSubmit} className="space-y-8">
                <Card>
                    <CardHeader>
                        <CardTitle>{dictionary.pricingTitle}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="downloadPrice">{dictionary.downloadPrice}</Label>
                            <Input
                                id="downloadPrice"
                                name="downloadPrice"
                                type="number"
                                step="0.01"
                                value={config.downloadPrice}
                                onChange={handleChange}
                            />
                        </div>
                    </CardContent>
                </Card>

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

export default AdminPageContent;

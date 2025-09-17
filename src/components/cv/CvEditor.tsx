'use client';

import { useState, useEffect } from 'react';
import type { CVData, Template, AdminConfig, CreatePaymentInput } from '@/lib/types';
import { CvForm } from '@/components/cv/CvForm';
import { CvPreview } from '@/components/cv/CvPreview';
import { Button } from '@/components/ui/button';
import { Download, ArrowLeft, Eye, Pencil, ChevronDown, Lock, Unlock } from 'lucide-react';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIsMobile } from '@/hooks/use-mobile';
import { templates } from '@/lib/templates';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Locale } from '@/i18n-config';
import { createPayment, getAdminConfig } from '@/app/actions';


const initialCvData: CVData = {
  personalInfo: {
    name: 'Alexandre Dubois',
    title: 'Développeur Web Full-Stack',
    email: 'alex.dubois@email.com',
    phone: '+33 6 12 34 56 78',
    address: 'Paris, France',
  },
  summary:
    "Développeur web passionné avec 5 ans d'expérience dans la création d'applications web robustes et évolutives. Maîtrise de l'écosystème JavaScript, avec une expertise particulière en React et Node.js. Vous pouvez aussi générer un résumé avec l'IA !",
  experience: [
    {
      id: 'exp1',
      company: 'Innovatech Solutions',
      role: 'Développeur Web Senior',
      startDate: '2021-01',
      endDate: 'Présent',
      description:
        "• Conception et développement d'une plateforme SaaS.\n• Mentorat de développeurs juniors.\n• Optimisation des performances de l'application.",
    },
     {
      id: 'exp2',
      company: 'Web Agency Pro',
      role: 'Développeur Full-Stack',
      startDate: '2019-06',
      endDate: '2020-12',
      description:
        "• Création de sites web pour divers clients.\n• Intégration d'API tierces.",
    },
  ],
  education: [
    {
      id: 'edu1',
      institution: 'Grande École du Numérique',
      degree: "Master en Ingénierie Logicielle",
      startDate: '2017-09',
      endDate: '2019-05',
      description: '• Spécialisation en architectures web.',
    },
  ],
  skills: 'React, Next.js, TypeScript, Node.js, Express, MongoDB, PostgreSQL, Docker, Tailwind CSS',
};

type CvEditorProps = {
    template: Template;
    dictionary: any;
    lang: Locale;
}

export function CvEditor({ template, dictionary, lang }: CvEditorProps) {
  const [cvData, setCvData] = useState<CVData>(initialCvData);
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>(template.id);
  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);
  const [paymentStep, setPaymentStep] = useState<'details' | 'form' | 'loading' | 'success' | 'error'>('details');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'mobile' | null>(null);
  const [adminConfig, setAdminConfig] = useState<AdminConfig | null>(null);
  const [downloadPrice, setDownloadPrice] = useState<number>(4.99);
  const [isDownloadUnlocked, setIsDownloadUnlocked] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const fetchConfig = async () => {
        try {
            const config = await getAdminConfig();
            setAdminConfig(config);
            if (config.downloadPrice) {
                setDownloadPrice(parseFloat(config.downloadPrice));
            }
        } catch (error) {
            console.error("Failed to load admin config for price:", error);
        }
    };
    fetchConfig();
  }, []);

  const handlePrint = () => {
    if (isDownloadUnlocked) {
      window.print();
    } else {
      openPaymentDialog();
    }
  };

  const handlePaymentInitiation = async () => {
    setPaymentStep('loading');
    console.log("Initiating payment...");

    if (!adminConfig) {
        console.error("Admin config not loaded.");
        setPaymentStep('error');
        return;
    }

    try {
      const paymentData = {
        amount: downloadPrice,
        currency: lang === 'fr' ? 'EUR' : 'USD',
        description: `${dictionary.editor.paymentItem} - ${selectedTemplate.name}`,
        customerEmail: cvData.personalInfo.email || 'customer@example.com',
        customerName: cvData.personalInfo.name || 'Customer Name',
        successUrl: `${window.location.origin}/${lang}/editor/${selectedTemplateId}?payment=success`,
        cancelUrl: `${window.location.origin}/${lang}/editor/${selectedTemplateId}?payment=cancel`,
        failureUrl: `${window.location.origin}/${lang}/editor/${selectedTemplateId}?payment=failure`,
        webhookUrl: `${window.location.origin}/api/webhook/payment`
      };
      
      const input: CreatePaymentInput = { provider: 'lygos', paymentData, adminConfig };
      const result = await createPayment(input);

      console.log("Payment creation response:", result);

      if (result && result.payment_url && !result.payment_url.startsWith(window.location.origin)) {
        window.location.href = result.payment_url;
      } else if (result && (result.success || result.id || result.payment_url)) {
        setPaymentStep('success');
      } else {
        throw new Error(result.message || 'Payment initiation failed.');
      }
    } catch (error) {
      console.error("Payment error:", error);
      setPaymentStep('error');
    }
  }
  
  const handleClosePaymentDialog = () => {
    setIsPaymentDialogOpen(false);
    setTimeout(() => {
        setPaymentStep('details');
        setPaymentMethod(null);
    }, 300);
  };

  const handleSuccessfulPayment = () => {
    setIsDownloadUnlocked(true);
    handleClosePaymentDialog();
  };
  
  const openPaymentDialog = () => {
    setPaymentStep('details');
    setPaymentMethod(null);
    setIsPaymentDialogOpen(true);
  };

  const selectedTemplate = templates.find(t => t.id === selectedTemplateId) || template;

  const PaymentDialogContent = () => {
    switch (paymentStep) {
        case 'loading':
            return (
                <div className="popup-content">
                    <div className="loader-container">
                        <div className="spinner"></div>
                        <p>{dictionary.editor.paymentLoading}</p>
                    </div>
                </div>
            );
        case 'success':
            return (
                 <div className="popup-content">
                    <div className="success-container">
                        <div className="success-icon">✅</div>
                        <h3>{dictionary.editor.paymentSuccessTitle}</h3>
                        <p>{dictionary.editor.paymentSuccessMessage}</p>
                        <button className="btn-primary mt-4" onClick={handleSuccessfulPayment}>
                            {dictionary.editor.unlockDownload}
                        </button>
                    </div>
                </div>
            )
        case 'error':
             return (
                 <div className="popup-content">
                    <div className="error-container">
                        <div className="error-icon">❌</div>
                        <h3>{dictionary.editor.paymentErrorTitle}</h3>
                        <p>{dictionary.editor.paymentErrorMessage}</p>
                        <button className="btn-secondary mt-4" onClick={() => setPaymentStep('details')}>
                            {dictionary.editor.paymentRetry}
                        </button>
                    </div>
                </div>
            )
        default:
            return (
                 <div className="popup-content">
                    <div className="payment-details">
                        <h4>{dictionary.editor.paymentDetails}</h4>
                        <p><strong>{dictionary.editor.paymentAmount}:</strong> {dictionary.editor.price.replace('{price}', downloadPrice.toString())}</p>
                        <p><strong>{dictionary.editor.paymentDescriptionLabel}:</strong> {dictionary.editor.paymentItem} - {selectedTemplate.name}</p>
                    </div>
                    
                    <div className="payment-methods">
                        <h4>{dictionary.editor.paymentMethods}</h4>
                        <div className="method-buttons">
                            <button className="payment-method" data-method="card" onClick={() => setPaymentMethod('card')}>
                                💳 {dictionary.editor.creditCard}
                            </button>
                            <button className="payment-method" data-method="mobile" onClick={() => setPaymentMethod('mobile')}>
                                📱 {dictionary.editor.mobilePayment}
                            </button>
                        </div>
                    </div>
                    
                    {paymentMethod && (
                        <div className="payment-form-container" id="payment-form">
                            {paymentMethod === 'card' ? (
                                <div className="card-form">
                                    <div className="form-group">
                                        <label>{dictionary.editor.cardNumber}</label>
                                        <input type="text" id="card-number" placeholder="1234 5678 9012 3456" maxLength={19} />
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>{dictionary.editor.cardExpiry}</label>
                                            <input type="text" id="card-expiry" placeholder="MM/AA" maxLength={5} />
                                        </div>
                                        <div className="form-group">
                                            <label>{dictionary.editor.cardCVC}</label>
                                            <input type="text" id="card-cvc" placeholder="123" maxLength={4} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>{dictionary.editor.cardName}</label>
                                        <input type="text" id="card-name" placeholder="John Doe" />
                                    </div>
                                </div>
                            ) : (
                                <div className="mobile-form">
                                    <div className="form-group">
                                        <label>{dictionary.editor.mobileNumber}</label>
                                        <input type="tel" id="mobile-number" placeholder="+33 6 12 34 56 78" />
                                    </div>
                                    <div className="form-group">
                                        <label>{dictionary.editor.mobileOperator}</label>
                                        <select id="mobile-operator">
                                            <option value="">{dictionary.editor.selectOperator}</option>
                                            <option value="orange">{dictionary.editor.operatorOrange}</option>
                                            <option value="mtn">{dictionary.editor.operatorMtn}</option>
                                            <option value="moov">{dictionary.editor.operatorMoov}</option>
                                        </select>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                    
                    <div className="popup-actions">
                        <button className="btn-cancel" onClick={handleClosePaymentDialog}>
                           {dictionary.editor.paymentCancel}
                        </button>
                        {paymentMethod && (
                            <button className="btn-pay" id="process-payment" onClick={handlePaymentInitiation}>
                                {dictionary.editor.paymentPay}
                            </button>
                        )}
                    </div>
                </div>
            );
    }
  }

  const DownloadButton = (
    <Button size="sm" onClick={handlePrint}>
      <Download className="mr-2 h-4 w-4" />
      {dictionary.editor.download}
    </Button>
  );

  const EditorView = (
    <div className="no-print lg:w-[45%] lg:max-w-2xl flex flex-col h-full">
      <header className="p-4 bg-card border-b flex justify-between items-center shrink-0">
        <Button variant="ghost" size="icon" asChild>
          <Link href={`/${lang}/`}>
            <ArrowLeft />
            <span className="sr-only">{dictionary.editor.backToTemplates}</span>
          </Link>
        </Button>
        <h2 className="font-headline text-xl font-semibold">{template.name} {dictionary.editor.template}</h2>
        {DownloadButton}
      </header>
      <div className="overflow-y-auto flex-1 p-4 sm:p-6 bg-card">
          <CvForm cvData={cvData} setCvData={setCvData} dictionary={dictionary.form} />
      </div>
    </div>
  );

    const TemplateSwitcher = (
        <div className="no-print absolute top-4 left-1/2 -translate-x-1/2 z-10">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="bg-white/80 backdrop-blur-sm">
                        {selectedTemplate.name} {dictionary.editor.template}
                        <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {templates.map(t => (
                        <DropdownMenuItem key={t.id} onSelect={() => setSelectedTemplateId(t.id)}>
                            {t.name}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );

  const PreviewView = (
     <div className="print-container-wrapper flex-1 p-4 md:p-8 flex justify-center items-start overflow-y-auto bg-muted/30 relative no-print">
        {TemplateSwitcher}
        <div
          id="cv-preview-wrapper"
          className="w-full max-w-4xl bg-white rounded-lg shadow-2xl transition-transform duration-300 ease-in-out lg:group-focus-within/editor:scale-[1.02] origin-top not-prose"
        >
            <div id="cv-preview" className="w-full transform-gpu rounded-lg">
                 <CvPreview cvData={cvData} templateId={selectedTemplateId} />
            </div>
        </div>
      </div>
  );
  
  const PaymentDialog = (
    <Dialog open={isPaymentDialogOpen} onOpenChange={setIsPaymentDialogOpen}>
      <DialogContent className="p-0 sm:max-w-lg w-[95%] rounded-2xl flex flex-col max-h-[90vh]" onInteractOutside={(e) => e.preventDefault()}>
        <DialogHeader className="p-0 shrink-0">
          <div className="popup-header">
              <h3 className="text-lg font-semibold text-primary-foreground">{dictionary.editor.paymentTitle}</h3>
              <button className="close-btn" onClick={handleClosePaymentDialog}>×</button>
          </div>
          <DialogTitle className="sr-only">{dictionary.editor.paymentTitle}</DialogTitle>
          <DialogDescription className="sr-only">
              {dictionary.editor.paymentDescription}
          </DialogDescription>
        </DialogHeader>
        <div className="overflow-y-auto">
          <PaymentDialogContent/>
        </div>
      </DialogContent>
    </Dialog>
  );


  if (isMobile) {
    return (
      <>
        <Tabs defaultValue="editor" className="flex flex-col h-screen w-full bg-muted/40 no-print">
            <header className="no-print p-2 bg-card border-b flex justify-between items-center shrink-0">
                <Button variant="ghost" size="icon" asChild>
                    <Link href={`/${lang}/`}>
                    <ArrowLeft />
                    <span className="sr-only">{dictionary.editor.backToTemplates}</span>
                    </Link>
                </Button>
                <TabsList className="grid w-full max-w-xs grid-cols-2">
                    <TabsTrigger value="editor"><Pencil className="mr-2"/> {dictionary.editor.formEditor}</TabsTrigger>
                    <TabsTrigger value="preview"><Eye className="mr-2"/> {dictionary.editor.preview}</TabsTrigger>
                </TabsList>
                <Button size="icon" onClick={handlePrint}>
                    <Download/>
                    <span className="sr-only">{dictionary.editor.download}</span>
                </Button>
            </header>
            <TabsContent value="editor" className="flex-1 overflow-y-auto bg-card data-[state=inactive]:hidden">
                 <div className="p-4 sm:p-6">
                    <h2 className="font-headline text-xl font-semibold mb-4 text-center">{template.name} {dictionary.editor.template}</h2>
                    <CvForm cvData={cvData} setCvData={setCvData} dictionary={dictionary.form} />
                 </div>
            </TabsContent>
            <TabsContent value="preview" className="flex-1 overflow-y-auto data-[state=inactive]:hidden no-print">
                {PreviewView}
            </TabsContent>
            
            {PaymentDialog}
        </Tabs>
        <div className="print-only">
            <CvPreview cvData={cvData} templateId={selectedTemplateId} />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex flex-col lg:flex-row h-screen bg-muted/40 group/editor no-print">
        {EditorView}
        {PreviewView}
        {PaymentDialog}
      </div>
      <div className="print-only">
        <CvPreview cvData={cvData} templateId={selectedTemplateId} />
      </div>
    </>
  );
}

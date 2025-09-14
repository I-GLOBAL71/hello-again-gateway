'use client';

import { useState } from 'react';
import type { CVData, Template } from '@/lib/types';
import { CvForm } from '@/components/cv/CvForm';
import { CvPreview } from '@/components/cv/CvPreview';
import { Button } from '@/components/ui/button';
import { Download, ArrowLeft, Eye, Pencil, ChevronDown, CreditCard, CheckCircle } from 'lucide-react';
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

import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';


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
    dictionary: Awaited<ReturnType<typeof getDictionary>>;
    lang: Locale;
}

export function CvEditor({ template, dictionary, lang }: CvEditorProps) {
  const [cvData, setCvData] = useState<CVData>(initialCvData);
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>(template.id);
  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);
  const [paymentStep, setPaymentStep] = useState<'details' | 'form' | 'loading' | 'success' | 'error'>('details');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'mobile' | null>(null);
  const isMobile = useIsMobile();
  const downloadPrice = 4.99; // Configurable price

  const handlePrint = () => {
    window.print();
  };

  const handlePaymentAndDownload = () => {
    setPaymentStep('loading');
    // Here you would integrate the real payment logic
    console.log("Simulating payment processing...");
    
    // Simulate API call
    setTimeout(() => {
      // Simulate success
      setPaymentStep('success');
    }, 2000);
  }
  
  const handleClosePaymentDialog = () => {
    setIsPaymentDialogOpen(false);
    // Reset state after a short delay to allow for closing animation
    setTimeout(() => {
        setPaymentStep('details');
        setPaymentMethod(null);
    }, 300);
  };

  const handleDownload = () => {
    // When payment is successful, trigger the actual download/print
    handleClosePaymentDialog();
    setTimeout(handlePrint, 100);
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
                        <p>Préparation du paiement...</p>
                    </div>
                </div>
            );
        case 'success':
            return (
                 <div className="popup-content">
                    <div className="success-container">
                        <div className="success-icon">✅</div>
                        <h3>Paiement réussi !</h3>
                        <p>Votre paiement a été traité avec succès.</p>
                        <button className="btn-primary" onClick={handleDownload}>
                            Télécharger le CV
                        </button>
                    </div>
                </div>
            )
        case 'error':
             return (
                 <div className="popup-content">
                    <div className="error-container">
                        <div className="error-icon">❌</div>
                        <h3>Erreur de paiement</h3>
                        <p>Le paiement a échoué. Veuillez réessayer.</p>
                        <button className="btn-secondary" onClick={() => setPaymentStep('details')}>
                            Réessayer
                        </button>
                    </div>
                </div>
            )
        default:
            return (
                 <div className="popup-content">
                    <div className="payment-details">
                        <h4>Détails du paiement</h4>
                        <p><strong>Montant:</strong> {dictionary.editor.price.replace('{price}', downloadPrice.toString())}</p>
                        <p><strong>Description:</strong> {dictionary.editor.paymentItem} - {selectedTemplate.name}</p>
                    </div>
                    
                    <div className="payment-methods">
                        <h4>Méthodes de paiement</h4>
                        <div className="method-buttons">
                            <button className="payment-method" data-method="card" onClick={() => setPaymentMethod('card')}>
                                💳 Carte bancaire
                            </button>
                            <button className="payment-method" data-method="mobile" onClick={() => setPaymentMethod('mobile')}>
                                📱 Paiement mobile
                            </button>
                        </div>
                    </div>
                    
                    {paymentMethod && (
                        <div className="payment-form-container" id="payment-form">
                            {paymentMethod === 'card' ? (
                                <div className="card-form">
                                    <div className="form-group">
                                        <label>Numéro de carte</label>
                                        <input type="text" id="card-number" placeholder="1234 5678 9012 3456" maxLength={19} />
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>MM/AA</label>
                                            <input type="text" id="card-expiry" placeholder="12/25" maxLength={5} />
                                        </div>
                                        <div className="form-group">
                                            <label>CVC</label>
                                            <input type="text" id="card-cvc" placeholder="123" maxLength={4} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Nom sur la carte</label>
                                        <input type="text" id="card-name" placeholder="John Doe" />
                                    </div>
                                </div>
                            ) : (
                                <div className="mobile-form">
                                    <div className="form-group">
                                        <label>Numéro de téléphone</label>
                                        <input type="tel" id="mobile-number" placeholder="+33 6 12 34 56 78" />
                                    </div>
                                    <div className="form-group">
                                        <label>Opérateur</label>
                                        <select id="mobile-operator">
                                            <option value="">Sélectionner un opérateur</option>
                                            <option value="orange">Orange Money</option>
                                            <option value="mtn">MTN Money</option>
                                            <option value="moov">Moov Money</option>
                                        </select>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                    
                    <div className="popup-actions">
                        <button className="btn-cancel" onClick={handleClosePaymentDialog}>
                           Annuler
                        </button>
                        {paymentMethod && (
                            <button className="btn-pay" id="process-payment" onClick={handlePaymentAndDownload}>
                                Payer maintenant
                            </button>
                        )}
                    </div>
                </div>
            );
    }
  }


  const DownloadButton = (
      <Button size="sm" onClick={openPaymentDialog}>
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
     <div className="flex-1 p-4 md:p-8 flex justify-center items-start lg:items-center overflow-y-auto bg-muted/30 relative print-container-wrapper">
        {TemplateSwitcher}
        <div
          id="cv-preview-wrapper"
          className="w-full max-w-4xl lg:h-full lg:max-h-[95vh] aspect-[210/297] bg-white rounded-lg shadow-2xl transition-transform duration-300 ease-in-out lg:group-focus-within/editor:scale-[1.02] origin-top"
        >
            <div id="cv-preview" className="w-full h-full transform-gpu overflow-hidden rounded-lg">
                 <CvPreview cvData={cvData} templateId={selectedTemplateId} />
            </div>
        </div>
      </div>
  );
  
  const PaymentDialog = (
    <Dialog open={isPaymentDialogOpen} onOpenChange={setIsPaymentDialogOpen}>
        <DialogContent className="payment-popup p-0" onInteractOutside={(e) => e.preventDefault()}>
          <DialogHeader className="p-0">
            <div className="popup-header">
                <h3 className="text-lg font-semibold text-primary-foreground">{dictionary.editor.paymentTitle}</h3>
                <button className="close-btn" onClick={handleClosePaymentDialog}>×</button>
            </div>
            <DialogTitle>{dictionary.editor.paymentTitle}</DialogTitle>
            <DialogDescription className="sr-only">
                {dictionary.editor.paymentDescription}
            </DialogDescription>
          </DialogHeader>
          <PaymentDialogContent/>
        </DialogContent>
    </Dialog>
  );


  const MobileDownloadButton = (
    <Button size="icon" variant="outline" onClick={openPaymentDialog}>
        <Download />
        <span className="sr-only">{dictionary.editor.download}</span>
    </Button>
  );

  if (isMobile) {
    return (
        <Tabs defaultValue="editor" className="flex flex-col h-screen w-full bg-muted/40">
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
                {MobileDownloadButton}
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
    );
  }

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-muted/40 group/editor">
      {EditorView}
      <div className="print-only">
        <CvPreview cvData={cvData} templateId={selectedTemplateId} />
      </div>
      <div className="no-print flex-1">
        {PreviewView}
      </div>
      {PaymentDialog}
    </div>
  );
}

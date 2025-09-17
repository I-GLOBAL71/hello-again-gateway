export type CVData = {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    address: string;
    photo?: string;
  };
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: string;
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
};

export type Education = {
  id:string;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  description: string;
};

export type Template = {
  id: string;
  name: string;
  isNew?: boolean;
};

export type AdminConfig = {
    superAdminEmail?: string;
    lygosApiKey?: string;
    lygosSecretKey?: string;
    coolpayMerchantId?: string;
    coolpayApiKey?: string;
coolpaySecretKey?: string;
    downloadPrice?: string;
};

// Types for AI Flows

// cv-summary.ts
export type SummarizeCvInput = {
  cvContent: string;
};

export type SummarizeCvOutput = {
  summary: string;
};

// ai-assisted-formatting.ts
export type AiAssistedFormattingInput = {
  templateName: string;
  rawText: string;
};

export type AiAssistedFormattingOutput = {
  formattedText: string;
};

// create-payment.ts
export type PaymentData = {
    amount: number;
    currency: string;
    description: string;
    customerEmail: string;
    customerName: string;
    successUrl: string;
    cancelUrl: string;
    failureUrl: string;
    webhookUrl: string;
};

export type CreatePaymentInput = {
  provider: 'lygos' | 'coolpay';
  paymentData: PaymentData;
  adminConfig: AdminConfig | null;
};

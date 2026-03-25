import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface PolicyPageProps {
  type: 'privacy' | 'terms' | 'refund';
}

export function PolicyPage({ type }: PolicyPageProps) {
  const navigate = useNavigate();
  const content = {
    privacy: {
      title: "Privacy Policy",
      text: "At Brand Propel Studio, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal information when you use our services or visit our website. We collect information such as your name, email, and business details only to provide and improve our services. We never sell your data to third parties."
    },
    terms: {
      title: "Terms of Service",
      text: "By accessing our website or using our services, you agree to comply with these terms. Our services are provided 'as is,' and we make no warranties regarding specific outcomes, although we strive for excellence. All content produced by Brand Propel Studio remains our intellectual property until full payment is received."
    },
    refund: {
      title: "Refund Policy",
      text: "Due to the nature of creative and digital marketing services, we generally do not offer refunds once work has commenced. However, we are committed to your satisfaction and will work closely with you to ensure the final deliverables meet the agreed-upon brief. Specific refund terms may be outlined in individual service contracts."
    }
  }[type];

  return (
    <div className="min-h-screen pt-32 pb-20 px-[5%] bg-white">
      <div className="max-w-3xl mx-auto">
        <button onClick={() => navigate("/")} className="text-brand font-bold mb-8 flex items-center gap-2">
          <ArrowRight className="w-4 h-4 rotate-180" /> Back to Home
        </button>
        <h1 className="text-4xl md:text-6xl font-display font-extrabold text-slate-900 mb-8 tracking-tight">{content.title}</h1>
        <div className="text-lg text-slate-600 leading-relaxed space-y-6">
          <p>{content.text}</p>
          <p>Last updated: March 20, 2026</p>
          <p>If you have any questions regarding this policy, please contact us at hello@brandpropel.studio</p>
        </div>
      </div>
    </div>
  );
}

import { MarketingHeader } from "./contact-page";
import { SiteFooter } from "./sections/site-footer";

const definitionItems = [
  {
    label: "1.1 “Authorized Devices”",
    text: " means those mobile, desktop, or other devices with which the Services can be accessed and used.",
  },
  {
    label: "1.2 “Content”",
    text: " means code, content, fonts, graphics, designs, documents, or materials created using the Services by Customer and its Users or imported into the Services by Customer and its Users.",
  },
  {
    label: "1.3 “Documentation”",
    text: " means the technical materials made available by Getnextjstemplates to Customer and/or its Users in hard copy or electronic form describing the use and operation of the Services.",
  },
  {
    label: "1.4 “Services”",
    text: " means Getnextjstemplates’s proprietary web-based products and services, along with downloadable desktop and mobile apps. Each Order Form will identify details of Customer’s Services subscription.",
  },
  {
    label: "1.5 “Order Form”",
    text: " means a document signed by both Parties identifying the Enterprise Services to be made available by Getnextjstemplates pursuant to this Agreement.",
  },
  {
    label: "1.6 “Packages” or “Components”",
    text: " means add-on modules made available within the Services. Packages and Components may be created by Getnextjstemplates, Customer or other third parties. Packages and Components created by Getnextjstemplates are supported as part of the Services. Getnextjstemplates will use reasonable efforts to support Customer’s use of Packages and Components created by third parties but disclaims all warranties as to such Packages and Components.",
  },
  {
    label: "1.7 “User”",
    text: " means an employee, contractor or other individual associated with Customer who has been provisioned by Customer with access to the Services.",
  },
  {
    label: "1.8 “Services”",
    text: " means Getnextjstemplates’s SaaS product, web design software, tools, along with downloadable desktop and mobile apps. Each Order Form will identify details of Customer’s subscription to the Services.",
  },
];

const licenseItems = [
  {
    label: "2.1 Services.",
    text: " Getnextjstemplates hereby grants Customer a non-exclusive, non-transferable license during the Term to use the Services and to download and install desktop or mobile applications on the number and type of Authorized Devices solely for Customer’s internal business purposes in accordance with the Documentation.",
  },
  {
    label: "2.2 Provisioning the Services.",
    text: " Getnextjstemplates will provide to Customer the necessary passwords, security protocols, policies, network links or connections to allow Customer and its Users to access the Services as described herein. Customer will provision its Users to access and use the features and functions of the Services through the Access Protocols and remains responsible for all acts and omissions of its Users.",
  },
];

function TermsCard() {
  return (
    <div className="rounded-[24px] border border-black/8 bg-white p-8 shadow-[0_18px_60px_rgba(15,23,42,0.05)] sm:p-10 lg:p-12 dark:border-white/8 dark:bg-[#111315] dark:shadow-[0_20px_60px_rgba(0,0,0,0.28)]">
      <div className="space-y-14">
        <div className="space-y-5">
          <p className="text-base leading-7 text-[#1B1D1E] dark:text-white">
            This Getnextjstemplates Terms of Service{" "}
            <span className="font-semibold">(&quot;Agreement&quot;)</span> is
            entered into by and between Getnextjstemplates{" "}
            <span className="font-semibold">
              (&quot;Getnextjstemplates&quot;)
            </span>{" "}
            and the entity or person placing an order for or accessing the
            Services <span className="font-semibold">(&quot;Customer&quot;)</span>.
            This Agreement consists of the terms and conditions set forth below
            and any Order Form. The{" "}
            <span className="font-semibold">&quot;Effective Date&quot;</span> of
            this Agreement is the date which is the earlier of (a)
            Customer&apos;s initial access to the Services through any online
            provisioning, registration or order process or (b) the Effective
            Date of the first Order Form. This Agreement will govern
            Customer&apos;s initial purchase on the Effective Date as well as any
            future purchases made by Customer that reference this Agreement.
            Getnextjstemplates may modify this Agreement from time to time as
            permitted in Section 13.4 (Amendment).
          </p>
          <p className="text-base leading-7 text-[#1B1D1E] dark:text-white">
            Capitalized terms shall have the meanings set forth in Section 1,
            or in the section where they are first used.
          </p>
        </div>

        <section className="space-y-8">
          <h2 className="text-2xl font-medium tracking-tight text-[#1B1D1E] dark:text-white">
            1. Definitions
          </h2>
          <div className="space-y-5">
            {definitionItems.map((item) => (
              <p
                key={item.label}
                className="text-base leading-7 text-[#1B1D1E] dark:text-white"
              >
                <span className="font-semibold">{item.label}</span>
                {item.text}
              </p>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-medium tracking-tight text-[#1B1D1E] dark:text-white">
            2. License and use rights
          </h2>
          <div className="space-y-5">
            {licenseItems.map((item) => (
              <p
                key={item.label}
                className="text-base leading-7 text-[#1B1D1E] dark:text-white"
              >
                <span className="font-semibold">{item.label}</span>
                {item.text}
              </p>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export function TermsPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fbfdff_0%,#ffffff_22%,#fffdfa_100%)] dark:bg-[linear-gradient(180deg,#090b0f_0%,#0c1117_28%,#090b0f_100%)]">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-16 h-[34rem] w-[120rem] -translate-x-1/2 bg-[linear-gradient(90deg,rgba(217,243,252,0.9)_0%,rgba(255,255,255,0.96)_50%,rgba(253,241,211,0.9)_100%)] blur-[160px] dark:bg-[linear-gradient(90deg,rgba(56,189,248,0.18)_0%,rgba(15,23,42,0.22)_50%,rgba(245,158,11,0.18)_100%)]" />
        </div>

        <div className="relative">
          <MarketingHeader />

          <main className="px-6 pb-20 pt-14 lg:px-8 lg:pt-20">
            <div className="mx-auto max-w-6xl">
              <h1 className="text-center text-4xl font-medium tracking-tight text-[#1B1D1E] sm:text-[48px] sm:leading-[1.2] dark:text-white">
                Terms &amp; <span className="font-instrument-serif italic font-normal">Conditions</span> 
              </h1>

              <div className="mt-14">
                <TermsCard />
              </div>
            </div>
          </main>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}

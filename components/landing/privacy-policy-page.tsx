import { MarketingHeader } from "./contact-page";
import { SiteFooter } from "./sections/site-footer";

const privacySections = [
  {
    title: "Personal information collection",
    paragraphs: [
      "While using our Services, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. For example, we collect information when you create an account, request customer support or otherwise communicate with us. The types of information we may collect include basic user information such as your name, email address, social media avatar, telephone number and photograph, company information and any other information you choose to provide.",
      "We will not collect financial information from you such as your payment card number, expiration date or security code. All payments to us are handled via a third party, Getnextjstemplates. We refer to their Privacy Statement for additional details about how those payments are processed.",
    ],
  },
  {
    title: "Personal information you provide to us",
    paragraphs: [
      "While using our Services, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. For example, we collect information when you create an account, request customer support or otherwise communicate with us. The types of information we may collect include basic user information such as your name, email address, social media avatar, telephone number and photograph, company information and any other information you choose to provide.",
      "We will not collect financial information from you such as your payment card number, expiration date or security code. All payments to us are handled via Getnextjstemplates. We refer to their Privacy Statement for more details regarding data processing and transaction security.",
    ],
  },
];

function PrivacyCard() {
  return (
    <div className="rounded-[24px] border border-black/8 bg-white p-8 shadow-[0_18px_60px_rgba(15,23,42,0.05)] sm:p-10 lg:p-12 dark:border-white/8 dark:bg-[#111315] dark:shadow-[0_20px_60px_rgba(0,0,0,0.28)]">
      <div className="space-y-14">
        <p className="text-base leading-7 text-[#1B1D1E] dark:text-white">
          This Privacy Statement explains how Personal Information about our
          potential customers and other individuals using our services is
          collected, used and disclosed by Getnextjstemplates and its
          respective affiliates (&quot;us&quot;, &quot;we&quot;, &quot;our&quot; or
          &quot;Getnextjstemplates&quot;). This Privacy Statement describes our
          privacy practices in relation to the use of our websites including
          any customer portal or interactive customer website, our software,
          services, solutions, tools and related applications, services and
          programs, including research and marketing activities, offered by us
          (the &quot;Services&quot;), as well as your choices regarding use,
          access, storage and correction of Personal Information.
        </p>

        <p className="text-base leading-7 text-[#1B1D1E] dark:text-white">
          It also describes how we collect, use, disclose and otherwise process
          Personal Information collected in relation to our Services and
          otherwise in the course of our business activities. By signing up to
          our Services and by agreeing to our General Terms and Conditions
          required to use certain of our Services, you agree to the collection,
          usage, storage and disclosure of information described in this
          Privacy Statement. Our Services may contain links to other websites
          or services, and the information practices and content of such other
          websites or services shall be governed by the privacy statements of
          those websites or services.
        </p>

        <p className="text-base leading-7 text-[#1B1D1E] dark:text-white">
          We may change this Privacy Statement from time to time. If we make
          changes, we will notify you by revising the date at the top of the
          statement and providing you with additional notifications such as
          adding a statement to our homepage, in our app or sending you a
          notification. We encourage you to review the Privacy Statement
          whenever you use our Services to stay informed about our information
          practices and the ways you can help protect your privacy.
        </p>

        {privacySections.map((section) => (
          <section key={section.title} className="space-y-8">
            <h2 className="text-2xl font-medium tracking-tight text-[#1B1D1E] dark:text-white">
              {section.title}
            </h2>
            <div className="space-y-5">
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-7 text-[#1B1D1E] dark:text-white"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export function PrivacyPolicyPage() {
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
                Privacy <span className="font-instrument-serif italic font-normal">Policy</span> 
              </h1>

              <div className="mt-14">
                <PrivacyCard />
              </div>
            </div>
          </main>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}

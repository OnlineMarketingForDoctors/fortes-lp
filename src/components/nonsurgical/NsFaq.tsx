import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What is the best non-surgical hair loss treatment?",
    a: "There isn't a single best non-surgical hair loss treatment, and any clinic that tells you otherwise is selling rather than assessing. PRP, PRF, exosome therapy and Regenera Activa each suit different patterns and stages of hair loss. What matters more than the choice between them is whether the follicles in the affected area are still active, and whether the underlying cause has been identified. That is what your consultation is for.",
  },
  {
    q: "How much is PRP hair treatment in London?",
    a: "PRP hair treatment cost depends on the number of sessions rather than a single headline figure, because PRP is normally delivered as a course of at least three monthly sessions. You will be given a written quote covering the full course after your free consultation, including whether we think a course is worth doing at all.",
  },
  {
    q: "Who offers the best PRP hair treatment in London?",
    a: "We would treat any clinic claiming to be the best PRP hair treatment London has with a degree of caution. It isn't a claim anyone can evidence, and UK advertising rules require objective comparative claims to be verifiable. More useful questions to ask any clinic: is the assessment carried out by a GMC-registered doctor, is the treatment performed by that same clinician, how many sessions are recommended and why, and what happens if you don't respond. We are happy to answer all four.",
  },
  {
    q: "What is the difference between PRP and PRF?",
    a: "Both use your own blood. PRP is spun with an anticoagulant to isolate the platelet-rich layer. PRF is spun more slowly and without anticoagulant, so it retains white cells and forms a fibrin scaffold that releases growth factors gradually rather than all at once. PRF is offered by relatively few London clinics because it needs different tubes and a different protocol. Which one suits you is a clinical decision made at consultation.",
  },
  {
    q: "Do exosomes work for hair loss?",
    a: "Exosome therapy for hair loss is a newer field than PRP and the published research is still developing. It is not a licensed medicine for hair loss in the UK. We can explain what the current evidence does and does not show, who tends to be considered suitable, and what a course involves, but we will not tell you it is guaranteed to work, because nobody can honestly say that of any hair loss treatment.",
  },
  {
    q: "What is Regenera Activa and how much does it cost?",
    a: "Regenera Activa is an autologous micrografting treatment. A small punch of scalp tissue is taken from behind the ear under local anaesthetic, processed in a dedicated device, and the resulting cell suspension is injected into the thinning areas. Its main practical difference is that it is a single session rather than a monthly course. The price is confirmed at your consultation.",
  },
  {
    q: "Can hair loss be treated without surgery?",
    a: "In many cases, yes, particularly where thinning is early or diffuse and the follicles are still active. Non-surgical hair loss treatments aim to support and maintain the hair you still have. What they cannot do is regrow hair in an area where the follicles have already been lost; that is where a hair transplant becomes the relevant conversation instead.",
  },
  {
    q: "Is non-surgical hair growth treatment suitable for women?",
    a: "Yes, and it is a large part of what we do. Female hair loss is more often diffuse than patterned, which means many women are told they are not hair transplant candidates. Non-surgical density treatment is frequently more appropriate. Because female hair loss is more likely to have a medical driver (thyroid, iron, post-partum or hormonal change), assessment matters even more.",
  },
  {
    q: "Does it hurt, and is there downtime?",
    a: "Injections are uncomfortable rather than painful for most people, and topical anaesthetic is used. Mild tenderness, redness or slight swelling at the injection sites is common and usually settles within about 24 hours. There is no expected downtime, and most people go back to work the same day.",
  },
  {
    q: "How soon will I see a difference?",
    a: "Reduced shedding is usually the first thing people notice, before any visible change in density. Visible change takes months rather than weeks and is best judged on standardised photographs rather than on how your hair looks on a given morning. Your clinician will set out a realistic timeline for the treatment recommended for you.",
  },
  {
    q: "Can I have these treatments alongside a hair transplant?",
    a: "Yes. PRP in particular is often used to support transplanted follicles and recovery after surgery. It also works the other way round: if you have a transplant in future, maintaining the hair you have not lost is what stops you needing a second procedure sooner than necessary.",
  },
  {
    q: "Where is the clinic?",
    a: "Fortes Clinic is at 22 Clifton Road, Little Venice, London W9 1ST, a custom-built, CQC-registered clinic in Central London, close to Warwick Avenue and Maida Vale. We see patients from across London and the UK.",
  },
];

export default function NsFaq() {
  return (
    <section id="faq" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="eyebrow mb-4">Questions</p>
          <h2 className="h-display text-[2rem] lg:text-[2.8rem] !leading-[1.14] text-ink">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-[10px] border border-line bg-bg-lighter open:border-gold/60 open:bg-white transition-colors"
            >
              <summary className="flex items-start justify-between gap-5 cursor-pointer list-none p-6 [&::-webkit-details-marker]:hidden">
                <h3 className="heading-sans text-[1.02rem] text-ink">{f.q}</h3>
                <Plus
                  className="w-5 h-5 flex-shrink-0 text-gold transition-transform duration-200 group-open:rotate-45"
                  strokeWidth={2}
                />
              </summary>
              <p className="px-6 pb-6 text-gray text-[0.95rem] leading-relaxed">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

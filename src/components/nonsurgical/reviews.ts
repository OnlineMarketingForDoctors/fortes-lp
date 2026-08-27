/**
 * Verified Google reviews for Fortes Clinic, transcribed in full from the
 * clinic's Google Business profile. Ordered with the PRP / non-surgical
 * mentions first. Cards clamp the text and expand it with "Read more", so
 * `body` holds the complete review; blank lines are preserved as paragraphs.
 */
export type Review = {
  name: string;
  initial: string;
  /** Avatar tint — mirrors the coloured initials Google assigns. */
  color: string;
  meta: string;
  date: string;
  body: string;
};

export const reviews: Review[] = [
  {
    name: "Nicky Brook",
    initial: "N",
    color: "bg-emerald-100 text-emerald-700",
    meta: "Local Guide · 239 reviews",
    date: "9 months ago",
    body: "6 months on since my FUE hair transplant of over three thousand hairs from the back of my head to the front, I am astounded by the results. Thick natural looking hair where there was almost none & it's looking very natural. I wanted to make sure I was giving the grafted hair the best opportunity possible, so also had 3 sessions of PRP (also with FORTES). I've used Regain morning & evening daily & also take 1mg Finasteride a day. I couldn't be happier, & the results are just getting better. I am told that a year post-op, is when the result will be nearing its best, so the likelihood is I will have even thicker results. Fantastic. Thoroughly recommended.",
  },
  {
    name: "Ismael Sancho",
    initial: "I",
    color: "bg-amber-100 text-amber-700",
    meta: "2 reviews",
    date: "4 months ago",
    body: `I had a hair transplant here in January 2025 and it was amazing. I had about 2800 grafts or so (which is quite little) and it made a monumental difference to my hair.

Dr Ahmad Saeed was great throughout, I was reassured by him at my initial consultation, where he was knowledgeable but also didn't pressure me into any decisions.

During the procedure Dr Ahmad and his team were also great, I had a largely painless and pleasant experience watching Netflix! I almost fell asleep at points!

Afterwards, the team at Fortes were again great, and I am extremely happy with my results.

I continue going there to receive PRP, which is a testament to how reliable they are!

I would recommend Fortes to anyone needing their relevant services.`,
  },
  {
    name: "Mo Gazeranchi",
    initial: "M",
    color: "bg-violet-100 text-violet-700",
    meta: "7 reviews",
    date: "10 months ago",
    body: "I have to say that Dr Ahmad and his team have done an amazing job with my hair transplant. From the whole procedure to the actual results after, I could not have been any happier. It was like a relaxing spa day having my transplant done with amazing care from the team. One of the main concerns I had with a hair transplant was how natural it will look, but the hairline Dr Ahmad drew on was amazing and natural which meant that my results at 6 months have surpassed my expectations in every way. The density and thickness of my hair is superb now and the growth has been astonishing, since it only has been 6 months since my procedure. I would advise anyone who wants to get a hair transplant, to visit Dr Ahmad and his amazing team at Fortes Clinic. Thank you Dr Ahmad and your remarkable team!",
  },
  {
    name: "Aliyar Gazeranchi",
    initial: "A",
    color: "bg-sky-100 text-sky-700",
    meta: "4 reviews",
    date: "10 months ago",
    body: `I had a hair transplant towards the end of April and already have seen large improvements in the quality and thickness of my hair.

I had balding from the crown and the front; now it looks full on both and the amazing thing is that it still looks completely natural. It is as if I was never balding to start with.

Dr Saeed has been incredibly helpful from the start of the process and Fortes Clinic is a place that I would recommend to anyone looking for a hair checkup and transplant.

Thank you to Dr Saeed and his team at Fortes Clinic.`,
  },
  {
    name: "H Amini",
    initial: "H",
    color: "bg-rose-100 text-rose-700",
    meta: "Local Guide · 21 reviews",
    date: "4 months ago",
    body: `Had my hair transplant done on Thursday — 1,700 grafts for the front corners and crown.

The whole experience was genuinely excellent. I even fell asleep for part of it, which says a lot about how comfortable the process was.

Dr Ahmad made me feel completely at ease, and the entire team were incredibly caring and attentive throughout the day.

Lunch was provided, and having Netflix and music available made the whole experience feel relaxed and stress-free.

Looking forward to sharing an update on my results in around six months.

Thanks again, everyone.`,
  },
  {
    name: "Nicola Cucciniello",
    initial: "N",
    color: "bg-orange-100 text-orange-700",
    meta: "Local Guide · 23 reviews",
    date: "7 months ago",
    body: "I had my hair transplant at this clinic last year and the result after one year is truly amazing. The clinic is outstanding, modern and extremely clean, clearly at the forefront of the field. Dr Ahmad Saeed is a true artist in his work, and the entire team is professional, caring and exceptional. I couldn't be happier with the result and the whole experience. Highly recommended.",
  },
  {
    name: "Haider Shubbar",
    initial: "H",
    color: "bg-teal-100 text-teal-700",
    meta: "15 reviews",
    date: "6 months ago",
    body: "I did a hair transplant at this clinic a few days ago and just want to share my great experience. From the moment I walked in greeted by Gina's lovely smile, to meeting Dr Ahmed for an honest and professional consultation who offered me different options with no pressure. I felt at ease throughout the procedure and a full post care package provided. Thank you once again, I look forward to the results!",
  },
  {
    name: "Christian Oldroyd",
    initial: "C",
    color: "bg-indigo-100 text-indigo-700",
    meta: "2 reviews",
    date: "4 months ago",
    body: `Incredible natural results and a world class experience!!

I had an FUE hair transplant — I cannot recommend Fortes Clinic in London highly enough. I did a lot of research beforehand and even visited Harley Street, but Fortes just had a much better feel. There was no pressure and it didn't feel "salesy" at all; it was clear from the start they just really know what they are doing.

One of the best things about them is that they only take one patient per day, so you are the sole focus of the entire team. The communication is excellent; they are so quick to respond to every email and call, which really put me at ease. On the day of the surgery, I was initially quite nervous about the pain, but it was actually very minimal and nothing like I had feared. Dr Saeed is a total expert — so professional and confident that you just know you're in safe hands.

They really look after you throughout the day (the lunch provided was a great touch!) and the aftercare package is spot on. They provide everything from the shampoo to a neck pillow, so you don't have to worry about a thing once you leave.

I'm now two weeks post-op and the results are already better than I ever imagined. The hairline looks incredibly natural, the scabs came off easily, and I had hardly any swelling or lingering pain. They are simply the best. Thank you again to the whole team for everything!`,
  },
  {
    name: "Bill Langford",
    initial: "B",
    color: "bg-lime-100 text-lime-700",
    meta: "4 reviews",
    date: "6 months ago",
    body: `Really happy with the results after my first session, amazing job! Got 1 more session to go, looking forward to seeing the end result.

Anybody who's looking to add more to your hair definitely should look at getting SMP. Amazing work!`,
  },
];

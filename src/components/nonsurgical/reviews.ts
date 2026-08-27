/**
 * Verified Google reviews for Fortes Clinic, transcribed from the clinic's
 * Google Business profile. Ordered with the PRP / non-surgical mentions first.
 * Long reviews are clamped in the card; the full text lives on Google.
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
    body: "6 months on since my FUE hair transplant of over three thousand hairs from the back of my head to the front, I am astounded by the results. Thick natural looking hair where there was almost none. I wanted to make sure I was giving the grafted hair the best opportunity possible, so also had 3 sessions of PRP (also with FORTES). I couldn't be happier, and the results are just getting better. Fantastic. Thoroughly recommended.",
  },
  {
    name: "Ismael Sancho",
    initial: "I",
    color: "bg-amber-100 text-amber-700",
    meta: "2 reviews",
    date: "4 months ago",
    body: "I had a hair transplant here in January 2025 and it was amazing. Dr Ahmad Saeed was great throughout, I was reassured by him at my initial consultation, where he was knowledgeable but also didn't pressure me into any decisions. Afterwards, the team at Fortes were again great, and I am extremely happy with my results. I continue going there to receive PRP, which is a testament to how reliable they are!",
  },
  {
    name: "Mo Gazeranchi",
    initial: "M",
    color: "bg-violet-100 text-violet-700",
    meta: "7 reviews",
    date: "10 months ago",
    body: "Dr Ahmad and his team have done an amazing job with my hair transplant. From the whole procedure to the actual results after, I could not have been any happier. One of the main concerns I had was how natural it will look, but the hairline Dr Ahmad drew on was amazing and natural, which meant that my results at 6 months have surpassed my expectations in every way.",
  },
  {
    name: "Aliyar Gazeranchi",
    initial: "A",
    color: "bg-sky-100 text-sky-700",
    meta: "4 reviews",
    date: "10 months ago",
    body: "I had a hair transplant towards the end of April and already have seen large improvements in the quality and thickness of my hair. I had balding from the crown and the front; now it looks full on both and the amazing thing is that it still looks completely natural. Dr Saeed has been incredibly helpful from the start of the process.",
  },
  {
    name: "H Amini",
    initial: "H",
    color: "bg-rose-100 text-rose-700",
    meta: "Local Guide · 21 reviews",
    date: "4 months ago",
    body: "Had my hair transplant done on Thursday — 1,700 grafts for the front corners and crown. The whole experience was genuinely excellent. I even fell asleep for part of it, which says a lot about how comfortable the process was. Dr Ahmad made me feel completely at ease, and the entire team were incredibly caring and attentive throughout the day.",
  },
  {
    name: "Nicola Cucciniello",
    initial: "N",
    color: "bg-orange-100 text-orange-700",
    meta: "Local Guide · 23 reviews",
    date: "7 months ago",
    body: "I had my hair transplant at this clinic last year and the result after one year is truly amazing. The clinic is outstanding, modern and extremely clean, clearly at the forefront of the field. Dr Ahmad Saeed is a true artist in his work, and the entire team is professional, caring and exceptional. Highly recommended.",
  },
  {
    name: "Haider Shubbar",
    initial: "H",
    color: "bg-teal-100 text-teal-700",
    meta: "15 reviews",
    date: "6 months ago",
    body: "I did a hair transplant at this clinic a few days ago and just want to share my great experience. From the moment I walked in greeted by Gina's lovely smile, to meeting Dr Ahmed for an honest and professional consultation who offered me different options with no pressure. I felt at ease throughout the procedure and a full post care package was provided.",
  },
  {
    name: "Christian Oldroyd",
    initial: "C",
    color: "bg-indigo-100 text-indigo-700",
    meta: "2 reviews",
    date: "4 months ago",
    body: "I cannot recommend Fortes Clinic in London highly enough. I did a lot of research beforehand and even visited Harley Street, but Fortes just had a much better feel. There was no pressure and it didn't feel salesy at all; it was clear from the start they just really know what they are doing. Dr Saeed is a total expert — so professional and confident that you just know you're in safe hands.",
  },
  {
    name: "Bill Langford",
    initial: "B",
    color: "bg-lime-100 text-lime-700",
    meta: "4 reviews",
    date: "6 months ago",
    body: "Really happy with the results after my first session, amazing job! Got 1 more session to go, looking forward to seeing the end result. Anybody who's looking to add more to your hair definitely should look at it. Amazing work!",
  },
];

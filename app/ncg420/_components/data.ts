export interface Specimen {
  id: number;
  x: number;
  y: number;
  rotate: number;
  label: string;
  specimen: string;
  classification: string;
  color: string;
  content: string;
  images: string[];
  sticker: string;
}

export const BATCH_CODE = "5025ST5";
export const HER_NAME = "Giang";

export const SPECIMENS: Specimen[] = [
  {
    id: 1, x: 22, y: 22, rotate: -3,
    label: "The Chibi Artist",
    specimen: "001",
    classification: "Creative Expression",
    color: "#9B8EA0",
    content:
        "You've been drawing chibi characters since before I even knew you. When you were a kid, you stayed inside with your sketchbook and your anime. That never changed. You still light up the same way when you draw. Your photobooth project was still showed your love for drawing.",
    images: ["/birthday/photos/chibi_1.jpg", "/birthday/photos/chibi_2.jpg", "/birthday/photos/chibi_3.jpg"],
    sticker: "/birthday/stickers/chibi.png",
  },
  {
    id: 2, x: 50, y: 18, rotate: 2,
    label: "The Event Planner",
    specimen: "002",
    classification: "Altruistic Behavior",
    color: "#E07A5F",
    content:
        "Birthday parties, school events, club events. If something needs planning, you're already on it. You're never the one sitting idle. You love helping, and it shows. You pour so much of yourself into making things happen for the people around you. I love that about you! Your efforts and thoughtfulness don't go unnoticed.",
    images: ["/birthday/photos/help_1.jpg", "/birthday/photos/help_2.jpg", "/birthday/photos/help_3.jpg"],
    sticker: "/birthday/stickers/planner.png",
  },
  {
    id: 3, x: 75, y: 24, rotate: -1.5,
    label: "The Drummer",
    specimen: "003",
    classification: "Rhythmic Precision",
    color: "#D4A373",
    content:
        "Northern Taiko Team wouldn't be the same without you. You and Linh are the feminine energy that takes care of the team. You didn't just show up to performances. You took care of washing and fixing everyone's uniforms as well. Watching you perform is one of my favorite things. You look so happy when you're drumming.",
    images: ["/birthday/photos/drum_1.jpg", "/birthday/photos/drum_2.jpg", "/birthday/photos/drum_3.jpg"],
    sticker: "/birthday/stickers/taiko.png",
  },
  {
    id: 4, x: 30, y: 50, rotate: 4,
    label: "The Overachiever",
    specimen: "004",
    classification: "Academic Excellence",
    color: "#81B29A",
    content:
        "Biomed student. Two jobs: school admissions and Northern Medical Center. Top of your department multiple semesters. Awards stacking up. That's just crazy. And somehow you still find time to be a social human being outside of all that. You're competitive too. Sometimes a little bitter when someone edges ahead. But you know better and always catch yourself and stay grounded.",
    images: ["/birthday/photos/achieve_1.jpg", "/birthday/photos/achieve_2.jpg", "/birthday/photos/achieve_3.jpg"],

    sticker: "/birthday/stickers/badge.png",
  },
  {
    id: 5, x: 58, y: 48, rotate: -2.5,
    label: "Zhen, Shan, Ren",
    specimen: "005",
    classification: "Moral Compass",
    color: "#F2CC8F",
    content:
        "Truthfulness, Compassion, Forbearance. I see you actually try to live them every day. It makes you the kind of person that other people feel safe around. Keep it up in your cultivation!",
    images: ["/birthday/photos/faith_1.jpg", "/birthday/photos/faith_2.jpg", "/birthday/photos/faith_3.jpg"],
    sticker: "/birthday/stickers/falun.png",
  },
  {
    id: 6, x: 48, y: 72, rotate: -1,
    label: "Twenty-One",
    specimen: "006",
    classification: "Milestone",
    color: "#D4A373",
    content:
        "The girl who stayed inside drawing chibi characters is now 21. A drummer, a scholar, a practitioner, a planner, an artist, and someone who makes every room a little more joyful just by being present You've grown so much, and you did it all on your own terms. This page is just a small reminder of some of the things that make you, you. Happy birthday, Giang.",
    images: ["/birthday/photos/21_1.jpg", "/birthday/photos/21_3.jpg", "/birthday/photos/21_2.jpg"],
    sticker: "/birthday/stickers/21.png",
  },
];

export const LEGAL_AT_21: string[] = [
  "🍺 Buy alcohol (responsibly... or not)",
  "🍸 Become a bartender and judge people's drink orders",
  "🎰 Walk into a casino and immediately lose $20",
  "🍷 Go wine tasting and pretend to know what 'oaky' means",
  "🏨 Book a hotel room without anyone questioning you",
  "🚗 Rent a car without the underage surcharge",
  "👶 Legally adopt a child (please don't yet)",
  "🔫 Apply for a concealed carry permit (in most states)",
  "✈️ Get TSA PreCheck without a parent",
  "🏠 Sign a lease without a co-signer",
  "🪪 Your ID finally doesn't get side-eyed at the door",
  "📋 Serve on a federal jury (so fun!!!)",
];
// Master Birthday Configuration & Dynamic Age Calculator
// Recipient: Samjhana Bam (Sanzu / Bhuntu / Bebo / Sanu / Fuchee / Runchee)
// Giver: Abhay Rawal (Abu)
// Nepali Birthdate: 2061/05/04 BS (4 Bhadra 2061) -> Equivalent AD: August 20, 2004

export const BIRTH_CONFIG = {
  fullName: "Samjhana Bam",
  nepaliName: "Mero Bhuntu / Sanuu (Bebo)",
  nicknames: ["Sanzu", "Bhuntu", "Bebo", "Sanu", "Fuchee", "Runchee", "Babe", "Samjhana"],
  primaryNickname: "Sanzu",
  giverName: "Abhay",
  giverNickname: "Abu",
  nepaliDob: "2061/05/04 BS (4 Bhadra)",
  adDob: "2004-08-20",
  birthYearBS: 2061,
  birthMonthBS: 5, // Bhadra
  birthDayBS: 4,
  birthYearAD: 2004,
  birthMonthAD: 8,
  birthDayAD: 20,
  origin: "Nepalgunj, Nepal 🇳🇵",
  destination: "Sakai, Osaka, Japan 🇯🇵",
};

export function getOrdinalSuffix(n) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

export function calculateAge() {
  const today = new Date();
  const birthDate = new Date(2004, 7, 20); // August 20, 2004
  
  // Calculate completed/turning age
  const turningAge = today.getFullYear() - 2004;
  
  return {
    name: "Sanzu",
    fullName: "Samjhana Bam",
    giver: "Abu",
    age: turningAge,
    ageOrdinal: getOrdinalSuffix(turningAge), // e.g. "22nd"
    dateText: "4 Bhadra",
    dateSubtext: "2061/05/04 BS",
    fullDateText: "4 Bhadra (2061 BS)",
    locations: "Nepalgunj 🇳🇵 ✈️ Osaka 🇯🇵",
  };
}

export const loveLettersList = [
  {
    id: 1,
    name: "Abu",
    msg: "Happy Birthday, my Sanzu! 🎂 Wishing you all the joy, smiles, and endless love in the world today and always.",
  },
  {
    id: 2,
    name: "Abu",
    msg: "Nepalgunj to Sakai is a long line on a map, but it has never been long enough to reach outside my heart.",
  },
  {
    id: 3,
    name: "Abu",
    msg: "One picture from you can change my whole day, my whole mood, my whole heartbeat, my sweet Bhuntu.",
  },
  {
    id: 4,
    name: "Abu",
    msg: "From the rental room in Nepalgunj to Bageshwori Temple, Water Park, Chau-chau dates, and late-night calls to Osaka — you are my home.",
  },
  {
    id: 5,
    name: "Abu",
    msg: "I will keep saving the future we talk about: the light-blue scooter, Bardiya roads, Pokhara, Manang, Mustang, and our happy home.",
  },
  {
    id: 6,
    name: "Abu",
    msg: "You are my Bhuntu when I miss you, my Bhoot when you tease me, my Sanu when I want to protect you, and my Bebo forever.",
  },
  {
    id: 7,
    name: "Abu",
    msg: "Even through screens and time zones, your laugh reaches me like sunlight — warm, pure, and impossible to forget.",
  },
  {
    id: 8,
    name: "Abu",
    msg: "Kailai xadera najanu huss bebo. I love you so much Sanzu, today, tomorrow, and every chapter ahead! ❤️",
  },
];

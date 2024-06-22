export type Book = {
  id: number;
  title: string;
  author: string;
  description: string;
  releaseDate: string;
  price: number;
  image?: string;
  rating?: number;
};

export const books: Book[] = [
  {
    id: 1,
    title:
      "Books That Changed History : From the Art of War to Anne Frank's Diary",
    description: `Books that Changed History features 75 of the world's most momentous titles - from The Art of War to Anne Frank's Diary - and reveals their far-ranging impact.

Books are the medium through which scientists, storytellers, and philosophers introduce their ideas. Discover seminal religious and political titles, cornerstones of science such as On the Origin of Species, and ancient texts such as the I Ching, which is still used today to answer fundamental questions about human existence.

Get up close to see fascinating details, such as Versalius' exquisite anatomical illustrations in Epitome, Leonardo da Vinci's annotated notebooks, or the hand-decorated pages in the Gutenberg Bible. Discover why Euclid's Elements of Geometry was the most influential maths title ever published, and marvel at rare treasures such as the Aubin Codex, which tells the history of the Aztecs and the early Spanaish colonial period in Mexico.

Books that Changed History gathers stories, diaries, scientific treatises, plays, dictionaries, and religious texts into a stunning celebration of the power of books`,
    author: "DK",
    releaseDate: "2017-09-07",
    price: 100.4,
    rating: 5,
    image: "https://m.media-amazon.com/images/I/511pJ0uKYfL._SX342_SY445_.jpg",
  },
  {
    id: 2,
    title: "Atomic Habits",
    description: `THE PHENOMENAL INTERNATIONAL BESTSELLER 1 MILLION COPIES SOLD

Transform your life with tiny changes in behaviour starting now.

People think when you want to change your life, you need to think big. But world-renowned habits expert James Clear has discovered another way. He knows that real change comes from the compound effect of hundreds of small decisions doing two push-ups a day, waking up five minutes early, or holding a single short phone call.

He calls them atomic habits.

In this ground-breaking book, Clears reveals exactly how these minuscule changes can grow into such life-altering outcomes. He uncovers a handful of simple life hacks (the forgotten art of Habit Stacking, the unexpected power of the Two Minute Rule, or the trick to entering the Goldilocks Zone), and delves into cutting-edge psychology and neuroscience to explain why they matter. Along the way, he tells inspiring stories of Olympic gold medalists, leading CEOs, and distinguished scientists who have used the science of tiny habits to stay productive, motivated, and happy.`,
    author: "James Clear",
    releaseDate: "2018-10-18",
    price: 450.45,
    rating: 4.5,
    image: "https://m.media-amazon.com/images/I/81Ls+SBCLiL._SY466_.jpg",
  },
  {
    id: 3,
    title: "The Cat in the Hat",
    description: `The one and only Cat in the Hat from the iconic Dr. Seuss gets a brand new look, introducing his roller-coaster ride of mayhem to a new generation of readers.

When Sally and her brother are left alone, they think they're in for a dull day – until the Cat in the Hat steps in on the mat, bringing with him mayhem and madness! This is the classic book that every child should have the joy of reading.

The perfect book for early readers, the new style brings a worldwide favourite to a whole new generation.`,
    author: "Dr. Seuss",
    releaseDate: "2016-05-05",
    price: 302.43,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/71FYhHDMGfL._SY466_.jpg",
  },
  {
    id: 4,
    title: "Crooked Kingdom Collector's Edition",
    description: `Welcome to the world of the Grisha.

Kaz Brekker and his crew of deadly outcasts have just pulled off a heist so daring even they didn't think they'd survive. But instead of divvying up a fat reward, they're right back to fighting for their lives.

Double-crossed and badly weakened, the crew is low on resources, allies, and hope. As powerful forces from around the world descend on Ketterdam to root out the secrets of the dangerous drug known as jurda parem, old rivals and new enemies emerge to challenge Kaz's cunning and test the team's fragile loyalties.

A war will be waged on the city's dark and twisting streets - a battle for revenge and redemption that will decide the fate of the Grisha world.`,
    author: "Kaz Brekker",
    releaseDate: "2019-09-05",
    price: 662.15,
    rating: 3.5,
    image: "https://m.media-amazon.com/images/I/91JRDxW3AsL._SY466_.jpg",
  },
  {
    id: 5,
    title:
      "Books That Changed History : From the Art of War to Anne Frank's Diary",
    description: `Books that Changed History features 75 of the world's most momentous titles - from The Art of War to Anne Frank's Diary - and reveals their far-ranging impact.

Books are the medium through which scientists, storytellers, and philosophers introduce their ideas. Discover seminal religious and political titles, cornerstones of science such as On the Origin of Species, and ancient texts such as the I Ching, which is still used today to answer fundamental questions about human existence.

Get up close to see fascinating details, such as Versalius' exquisite anatomical illustrations in Epitome, Leonardo da Vinci's annotated notebooks, or the hand-decorated pages in the Gutenberg Bible. Discover why Euclid's Elements of Geometry was the most influential maths title ever published, and marvel at rare treasures such as the Aubin Codex, which tells the history of the Aztecs and the early Spanaish colonial period in Mexico.

Books that Changed History gathers stories, diaries, scientific treatises, plays, dictionaries, and religious texts into a stunning celebration of the power of books`,
    author: "DK",
    releaseDate: "2017-09-07",
    price: 100.4,
    rating: 2.5,
    image: "https://m.media-amazon.com/images/I/511pJ0uKYfL._SX342_SY445_.jpg",
  },
  {
    id: 6,
    title: "Atomic Habits",
    description: `THE PHENOMENAL INTERNATIONAL BESTSELLER 1 MILLION COPIES SOLD

Transform your life with tiny changes in behaviour starting now.

People think when you want to change your life, you need to think big. But world-renowned habits expert James Clear has discovered another way. He knows that real change comes from the compound effect of hundreds of small decisions doing two push-ups a day, waking up five minutes early, or holding a single short phone call.

He calls them atomic habits.

In this ground-breaking book, Clears reveals exactly how these minuscule changes can grow into such life-altering outcomes. He uncovers a handful of simple life hacks (the forgotten art of Habit Stacking, the unexpected power of the Two Minute Rule, or the trick to entering the Goldilocks Zone), and delves into cutting-edge psychology and neuroscience to explain why they matter. Along the way, he tells inspiring stories of Olympic gold medalists, leading CEOs, and distinguished scientists who have used the science of tiny habits to stay productive, motivated, and happy.`,
    author: "James Clear",
    releaseDate: "2018-10-18",
    price: 450.45,
    rating: 5,
    image: "https://m.media-amazon.com/images/I/81Ls+SBCLiL._SY466_.jpg",
  },
  {
    id: 7,
    title: "The Cat in the Hat",
    description: `The one and only Cat in the Hat from the iconic Dr. Seuss gets a brand new look, introducing his roller-coaster ride of mayhem to a new generation of readers.

When Sally and her brother are left alone, they think they're in for a dull day – until the Cat in the Hat steps in on the mat, bringing with him mayhem and madness! This is the classic book that every child should have the joy of reading.

The perfect book for early readers, the new style brings a worldwide favourite to a whole new generation.`,
    author: "Dr. Seuss",
    releaseDate: "2016-05-05",
    price: 302.43,
    rating: 4.5,
    image: "https://m.media-amazon.com/images/I/71FYhHDMGfL._SY466_.jpg",
  },
  {
    id: 8,
    title: "Crooked Kingdom Collector's Edition",
    description: `Welcome to the world of the Grisha.

Kaz Brekker and his crew of deadly outcasts have just pulled off a heist so daring even they didn't think they'd survive. But instead of divvying up a fat reward, they're right back to fighting for their lives.

Double-crossed and badly weakened, the crew is low on resources, allies, and hope. As powerful forces from around the world descend on Ketterdam to root out the secrets of the dangerous drug known as jurda parem, old rivals and new enemies emerge to challenge Kaz's cunning and test the team's fragile loyalties.

A war will be waged on the city's dark and twisting streets - a battle for revenge and redemption that will decide the fate of the Grisha world.`,
    author: "Kaz Brekker",
    releaseDate: "2019-09-05",
    price: 662.15,
    rating: 3.5,
    image: "https://m.media-amazon.com/images/I/91JRDxW3AsL._SY466_.jpg",
  },
];

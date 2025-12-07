export enum Platform {
  youtube = "youtube",
  instagram = "instagram",
  tiktok = "tiktok",
  facebook = "facebook",
  twitter = "twitter",
  linkedin = "linkedin",
  pinterest = "pinterest",
  snapchat = "snapchat",
  twitch = "twitch",
  discord = "discord",
}

export enum Niche {
  lifestyle = "lifestyle",
  fitness = "fitness",
  food = "food",
  travel = "travel",
  tech = "tech",
  gaming = "gaming",
  fashion = "fashion",
  beauty = "beauty",
  business = "business",
  education = "education",
  entertainment = "entertainment",
  music = "music",
  art = "art",
  sports = "sports",
  health = "health",
  finance = "finance",
  other = "other",
}

export enum Status {
  active = "active",
  ban = "ban",
  sold = "sold",
  deleted = "deleted",
  inactive = "inactive",
  pending = "pending",
}

export interface User {
  id: string;
  email: string;
  name: string;
  image: string;
  earned?: number;
  withdrawn?: number;
  createdAt: Date | string;
  updatedAt: Date | string;

  Listing?: Listing[];
  ownerChats?: Chat[];
  chatUserChats?: Chat[];
  withdrawals?: Withdrawal[];
}

export interface Listing {
  id: string;
  ownerId: string;

  title: string;
  platform: Platform;
  username?: string | null;
  followers_count: number;
  engagement_rate?: number | null;
  monthly_views?: number | null;
  niche: Niche;
  price: number;
  description?: string | null;
  verified: boolean;
  monetized: boolean;
  country?: string | null;
  age_range: string;
  status: Status;
  featured: boolean;
  images: string[];
  createdAt: Date | string;
  updatedAt: Date | string;
  platformAssured: boolean;
  isCredentialSubmitted: boolean;
  isCredentialVerified: boolean;
  isCredentialChanged: boolean;

  owner?: User;
  chats?: Chat[];
  transactions?: Transaction[];
}

export interface Chat {
  id: string;
  chatUserId: string;
  ownerUserId: string;
  listingId: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  active: boolean;
  lastMessage: string;
  isLastMessageRead: boolean;
  lastMessageSenderId: string;
  isTokenAmountPaid: boolean;

  messages?: Message[];
  platformMessages?: PlatformMessage[];

  ownerUser?: User;
  chatUser?: User;
  listing?: Listing;
}

export interface Message {
  id: string;
  chatId: string;
  message: string;
  sender_id: string;
  createdAt: Date | string;

  chat?: Chat;
}

export interface PlatformMessage {
  id: string;
  chatId: string;
  message: string;
  sender_id: string;
  createdAt: Date;

  chat?: Chat;
}

export interface Credential {
  id: string;
  listingId: string;
  originalCredential: any[];
  updatedCredential: any[];
  createdAt: Date | string;
}

export interface Transaction {
  id: string;
  listingId: string;
  ownerId: string;
  userId: string;
  amount: number;
  isPaid: boolean;
  createdAt: Date;

  listing?: Listing;
}

export interface Withdrawal {
  id: string;
  userId: string;
  amount: number;
  account: any[];
  isWithdrawn: boolean;
  createdAt: Date;
  updatedAt: Date;

  user?: User;
}

export type CredentialFieldType = "email" | "password";

export type CredentialField = {
  name: string;
  type: CredentialFieldType;
  value: string;
};

// Order main type
export type Order = {
  id: string;
  listingId: string;
  ownerId: string;
  userId: string;
  amount: number;
  isPaid: boolean;
  createdAt: string;
  listing: Listing;
  credential: Credential;
};

import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };
export const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export interface Sermon {
  id: number;
  Title: string;
  Date: string;
  Speaker: string;
  Video_URL: string;
}

export async function getSermons(): Promise<Sermon[]> {
  try {
    const sermons = await prisma.sermon.findMany({
      orderBy: { date: 'desc' }
    });
    return sermons.map(s => ({
      id: s.id,
      Title: s.title,
      Date: s.date.toISOString(),
      Speaker: s.speaker,
      Video_URL: s.videoUrl || ''
    }));
  } catch (e) {
    console.error("Database not ready yet", e);
    return [];
  }
}

export interface ChurchEvent {
  id: number;
  "Event Name": string;
  Date: string;
  Description: string;
  "Signup Link": string;
}

export async function getEvents(): Promise<ChurchEvent[]> {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const events = await prisma.churchEvent.findMany({
      where: { date: { gte: today } },
      orderBy: { date: 'asc' }
    });
    return events.map(e => ({
      id: e.id,
      "Event Name": e.eventName,
      Date: e.date.toISOString(),
      Description: e.description,
      "Signup Link": e.signupLink || ''
    }));
  } catch (e) {
    console.error("Database not ready yet", e);
    return [];
  }
}

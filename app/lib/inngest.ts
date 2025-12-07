import { prisma } from "./prisma";
import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "my-app" });

const syncUserFromClerk = inngest.createFunction(
  { id: "sync-user-from-clerk" },
  { event: "clerk/user.created" },
  async ({ event }: any) => {
    const { data } = event;
    const user = await prisma.user.findFirst({
      where: {
        id: data.id,
      },
    });

    if (user) {
      await prisma.user.update({
        where: {
          id: data.id,
        },
        data: {
          email: data?.email_addresses[0]?.email_address,
          name: data?.first_name + " " + data?.last_name,
          image: data.image_url,
        },
      });

      return;
    }

    await prisma.user.create({
      data: {
        id: data.id,
        email: data?.email_addresses[0]?.email_address,
        name: data?.first_name + " " + data?.last_name,
        image: data.image_url,
      },
    });
  }
);
const syncUpdateUserFromClerk = inngest.createFunction(
  { id: "sync-user-from-clerk" },
  { event: "clerk/user.created" },
  async ({ event }: any) => {
    const { data } = event;

    await prisma.user.update({
      where: {
        id: data.id,
      },
      data: {
        email: data?.email_addresses[0]?.email_address,
        name: data?.first_name + " " + data?.last_name,
        image: data.image_url,
      },
    });
  }
);

export const functions = [syncUserFromClerk, syncUpdateUserFromClerk];

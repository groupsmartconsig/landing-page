import { z } from "zod"

const envSchema = z.object({
  NEXT_PUBLIC_AUTH_API: z.string().url(),
  NEXT_PUBLIC_DATA_API: z.string().url(),
  NEXT_PUBLIC_TENANT: z.string(),
  NEXT_PUBLIC_USERNAME: z.string(),
  NEXT_PUBLIC_PASSWORD: z.string(),
})

export const env = envSchema.parse({
  NEXT_PUBLIC_AUTH_API: process.env.NEXT_PUBLIC_AUTH_API,
  NEXT_PUBLIC_DATA_API: process.env.NEXT_PUBLIC_DATA_API,
  NEXT_PUBLIC_TENANT: process.env.NEXT_PUBLIC_TENANT,
  NEXT_PUBLIC_USERNAME: process.env.NEXT_PUBLIC_USERNAME,
  NEXT_PUBLIC_PASSWORD: process.env.NEXT_PUBLIC_PASSWORD,
})
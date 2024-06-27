import { z } from "zod";

const envSchema = z.object({
    STRIPE_KEY_PUBLIC: z.string(),
    STRIPE_KEY_PRIVATE: z.string()
})

const _env = envSchema.safeParse(process.env)

if(!_env.data) {
    throw new Error('Environment variable error')
}

export const env = _env.data
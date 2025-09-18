'use server';

export async function verifyAdminPassword(password: string): Promise<{ success: boolean }> {
    const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "admin";
    if (password === adminPassword) {
        return { success: true };
    }
    return { success: false };
}

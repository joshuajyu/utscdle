import bcrypt from "bcrypt";

/**
 * Hashes a password with a generated salt using bcrypt.
 * @param password - The plain text password to hash.
 * @returns A promise that resolves to the salted and hashed password.
 * @throws An error if the hashing process fails.
 */
export async function saltAndHashPassword(password: any): Promise<string> {
  if (!password) {
    throw new Error("Password cannot be empty");
  }

  try {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (error: unknown) {
    throw new Error("Failed to hash password: " + error);
  }
}

/**
 * Generates a cryptographically secure, short identifier of arbitrary length
 * with uniform entropy distribution across all character positions.
 *
 * @param {number} length - The precise number of characters to return.
 * @returns {string} A hexadecimal string containing exactly `length` characters.
 * @throws {RangeError} If the requested length is negative.
 */
export function generateShortId(length: number): string {
    if (length < 0) {
        throw new RangeError("Length must be a non-negative integer.");
    }
    if (length === 0) return "";
    const byteLength = Math.ceil(length / 2);
    const bytes = crypto.getRandomValues(new Uint8Array(byteLength));
    let result = "";
    for (const element of bytes) {
        result += element.toString(16).padStart(2, "0");
    }

    return result.substring(0, length);
}
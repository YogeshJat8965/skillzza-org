/**
 * Helper function to get the correct asset path with base URL
 * @param {string} path - The asset path (e.g., '/skillzza-logo.png')
 * @returns {string} - The full path with base URL
 */
export const getAssetPath = (path) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Add base URL (empty string in dev, '/newsite/' in production)
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};

/**
 * Helper function for background image URLs
 * @param {string} path - The asset path
 * @returns {string} - CSS url() string with correct path
 */
export const getBackgroundImageUrl = (path) => {
  return `url('${getAssetPath(path)}')`;
};

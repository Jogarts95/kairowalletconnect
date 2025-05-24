const WALLET_KEY_PREFIX = "wallet_address_";

export const useWalletStorage = () => {
  const saveWalletAddress = (address: string) => {
    const key = `${WALLET_KEY_PREFIX}${address}`;
    localStorage.setItem(key, address);
  };

  const getWalletAddress = (address: string): string | null => {
    const key = `${WALLET_KEY_PREFIX}${address}`;
    return localStorage.getItem(key);
  };

  return { saveWalletAddress, getWalletAddress };
};
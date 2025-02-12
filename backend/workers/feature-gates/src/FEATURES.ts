import type { FEATURE_GATES_MAP } from "@coral-xyz/common";

export const FEATURE_GATES = ({
  dropzoneUsers,
  userId,
}: {
  dropzoneUsers: string[];
  userId?: string;
}) =>
  ({
    STRIPE_ENABLED: true,
    PRIMARY_PUBKEY_ENABLED: true,
    SWAP_FEES_ENABLED: false,
    DROPZONE_ENABLED: Boolean(userId && dropzoneUsers.includes(userId)),
    STICKER_ENABLED: true,
    BARTER_ENABLED: false,
  } satisfies {
    // ensure all keys are present
    [feature in keyof FEATURE_GATES_MAP]: boolean;
  });

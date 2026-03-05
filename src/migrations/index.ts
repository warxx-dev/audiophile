import * as migration_20260301_203159 from './20260301_203159';
import * as migration_20260301_213031_add_media_image_sizes from './20260301_213031_add_media_image_sizes';

export const migrations = [
  {
    up: migration_20260301_203159.up,
    down: migration_20260301_203159.down,
    name: '20260301_203159',
  },
  {
    up: migration_20260301_213031_add_media_image_sizes.up,
    down: migration_20260301_213031_add_media_image_sizes.down,
    name: '20260301_213031_add_media_image_sizes'
  },
];

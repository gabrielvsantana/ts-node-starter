import { logger } from '@/logger';

export async function main() {
  logger.info('Running main');
}

main().catch(logger.error);

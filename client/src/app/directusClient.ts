import { createDirectus, graphql } from '@directus/sdk';
import environment from '@environment';

export const directusClient = createDirectus(environment.directus.url).with(graphql());

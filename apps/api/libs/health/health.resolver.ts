import { Resolver, Query } from '@nestjs/graphql';
import { HealthCheck } from './models/health-check.model';

@Resolver(() => HealthCheck)
export class HealthResolver {
  @Query(() => HealthCheck)
  async healthCheck(): Promise<HealthCheck> {
    try {
      // Perform any necessary health checks here
      // For example, you could check database connectivity, external services, etc.

      return {
        status: 'OK',
        message: 'Service is healthy',
        timestamp: new Date().toISOString(),
      };
    } catch (error) {
      return {
        status: 'ERROR',
        message: `Health check failed: ${error.message}`,
        timestamp: new Date().toISOString(),
      };
    }
  }
}

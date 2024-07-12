import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const configService = app.get(ConfigService);
    const port = configService.get<string>('api.port');
    app.useGlobalPipes(
        new ValidationPipe({
            validationError: { target: false },
            transform: true,
            skipMissingProperties: true,
        }),
    );
    app.use(
        helmet({
            crossOriginEmbedderPolicy: false,
            contentSecurityPolicy: {
                useDefaults: true,
                directives: {
                    imgSrc: [
                        `'self'`,
                        'data:',
                        'apollo-server-landing-page.cdn.apollographql.com',
                    ],
                    scriptSrc: [`'self'`, `https: 'unsafe-inline'`],
                    manifestSrc: [
                        `'self'`,
                        'apollo-server-landing-page.cdn.apollographql.com',
                    ],
                    frameSrc: [`'self'`, 'sandbox.embed.apollographql.com'],
                },
            },
        }),
    );
    app.enableCors({
        origin: 'http://localhost:3000',
        credentials: true,
    });
    await app.listen(port, () => {
        console.log(`🚀 Server ready at: http://localhost:${port}/graphql`);
    });
}
bootstrap();

import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
    HttpException,
    Req
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);

        if (!token) {
            throw new UnauthorizedException();
        }
        try {
            const payload = await this.jwtService.verifyAsync(
                token,
                {
                    secret: jwtConstants.secret
                }
            );
            // 💡 We're assigning the payload to the request object here
            // so that we can access it in our route handlers
            request['user'] = payload;
        } catch(err) {
            throw  new HttpException(err, 401);
        }
        return true;
    }

    private extractTokenFromHeader(@Req() request) {
        const authorizationHeader = request.headers['authorization'];

        if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
          // Xử lý lỗi hoặc thông báo khi header không hợp lệ
          throw new UnauthorizedException('Invalid Authorization header');
        }
    
        const token = authorizationHeader.replace('Bearer ', '');
    
        // Tiếp tục xử lý hoặc trả về token
        return token;
    }
}
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.get<string>('JWT_SECRET'), // 🔥 HARUS SAMA
    });
  }

  validate(payload: any) {
    return {
      userId: payload.sub,
      username: payload.username,
      role: payload.role, // 🔥 INI YANG DIPAKAI RolesGuard
      memberId: payload.memberId,
    };
  }
}

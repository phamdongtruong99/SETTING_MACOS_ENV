import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { isEmpty, intersection } from 'lodash';

type TPermissions = {
  methods: Array<string>;
  modules: Array<string>;
};
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  matchPermissions(currentPermissions: Array<string>, requirePermissions: Array<string>): boolean {
    if (isEmpty(intersection(requirePermissions, currentPermissions))) {
      return true;
    }
    return false;
  }

  canActivate(context: ExecutionContext): boolean {
    const methods = this.reflector.get<string[]>('methods', context.getHandler());
    const modules = this.reflector.get<string[]>('modules', context.getClass());
    const requirePermissions = [`${modules[0]}_${methods[0]}`];
    const request = context.switchToHttp().getRequest();
    const { user } = request;

    return this.matchPermissions(user.permissions, requirePermissions);
  }
}
// https://github.com/dichakho/roomify-api/blob/master/src/common/guards/roles.guard.ts

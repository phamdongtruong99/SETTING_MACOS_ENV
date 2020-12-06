import { SetMetadata, CustomDecorator } from '@nestjs/common'

export const META_SCOPE = 'keycloak-scope'

export const DefineScope = (scope: string): CustomDecorator<string> =>
  SetMetadata<string, string>(META_SCOPE, scope)
  
// https://github.com/anonrig/nestjs-keycloak-admin/blob/master/src/decorators/scope.decorator.ts

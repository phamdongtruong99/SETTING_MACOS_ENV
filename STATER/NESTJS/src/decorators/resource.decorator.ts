import { SetMetadata, CustomDecorator } from '@nestjs/common'

export const META_RESOURCE = 'keycloak-resource'

export const DefineResource = (resource: string): CustomDecorator<string> =>
  SetMetadata<string, string>(META_RESOURCE, resource)
  
// https://github.com/anonrig/nestjs-keycloak-admin/blob/master/src/decorators/resource.decorator.ts

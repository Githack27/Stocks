export interface User
{
  username: string,
  password: string,
  email: string,
  isContributor: boolean,
  isExternalUser: boolean,
  externalUserID: string
}

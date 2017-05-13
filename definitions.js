//@flow

export type OrganizationEntity = {
    id: number,
    login: string,
    avatar_url: string,
    description: string,
}

export type AuthorizationEntity = {
    id: number,
    token: string,
    hashed_token: string,
}

export type IssueEntity = {
    id: number,
    number: number,
    title: string,
}

export type RepositoryEntity = {
    id: number,
    owner: UserEntity,
    name: string,
    url: string,
    sha: string,
    html_url: string,
    comments_url: string,
    fork: boolean,
}

export type UserEntity = {
    login: string,
    id: number,
    avatar_url: string,
    gravatar_id: string,
    site_admin: boolean,
    name: string,
    company: string,
    blog: string,
    location: string,
    email: string,
    hireable: boolean,
    bio: string,
    public_repos: number,
    public_gists: number,
    followers: number,
    following: number,
}


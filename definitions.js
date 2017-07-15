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

export type LabelEntity = {
    id: number,
    name: string,
    color: string,
    default: boolean,
}

export type NotificationSubject = {
    title: string,
    type: string,
}

export type NotificationEntity = {
    id: string,
    repository: RepositoryEntity,
    subject: NotificationSubject,
    reason: string,
    unread: boolean,
    updated_at: string,
    last_read_at: string,
}

export type IssueEntity = {
    id: number,
    number: number,
    title: string,
    body: string,
    repository_url: string,
    created_at: string,
    labels: Array<LabelEntity>,
}

export type SearchIssuesResult = {
    total_count: number,
    incomplete_results: boolean,
    items: Array<IssueEntity>,
}

export type SearchRepositoriesResult = {
    total_count: number,
    incomplete_results: boolean,
    items: Array<RepositoryEntity>,
}

export type PushEvent = {
    id: string,
    type: "PushEvent",
    actor: Object,
    repo: Object,
    payload: Object,
    public: boolean,
    created_at: string,
}

export type PullRequestEvent = {
    id: string,
    type: "PullRequestEvent",
    actor: Object,
    repo: Object,
    payload: Object,
    public: boolean,
    created_at: string,
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

